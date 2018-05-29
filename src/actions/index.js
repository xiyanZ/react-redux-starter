const proxyAction = func => {
  return (...args) => async dispatch => {
    dispatch({
      type: 'SHOW_GLOBAL_LOADING',
      payload: true
    })
    await dispatch(func(...args))
    dispatch({
      type: 'SHOW_GLOBAL_LOADING',
      payload: false
    })
  }
}
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const actions = {}
for (let i = 0; i < keys.length; i += 1) {
  const actionActions = context(keys[i]).default
  for (const [key, value] of Object.entries(actionActions)) {
    actions[key] = proxyAction(value)
    // actions[namespace][key] = proxyAction(value)
  }
}
console.log(actions)
export default actions
// export default dispatch => {
//   return bindActionCreators(actions, dispatch)
// }
