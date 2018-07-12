let isLoading = false
let loadingTimer = -1
let actionCount = 0
const ignoreTime = 200

const proxyAction = func => {
  return (...args) => async dispatch => {
    actionCount++
    if (!isLoading) {
      loadingTimer = setTimeout(() => {
        dispatch({
          type: 'SHOW_GLOBAL_LOADING',
          payload: true
        })
        loadingTimer = -1
      }, ignoreTime)
      isLoading = true
    }

    await dispatch(func(...args))

    actionCount--
    if (loadingTimer !== -1 && actionCount === 0) {
      try {
        clearTimeout(loadingTimer)
        loadingTimer = -1
      } catch (e) {
        console.error(e)
      }
      isLoading = false
    }
    if (isLoading && actionCount === 0) {
      dispatch({
        type: 'SHOW_GLOBAL_LOADING',
        payload: false
      })
      isLoading = false
    }
  }
}
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const actions = {}
for (let i = 0; i < keys.length; i += 1) {
  const actionActions = context(keys[i]).default
  for (const [key, value] of Object.entries(actionActions)) {
    actions[key] = proxyAction(value)
  }
}
export default actions
