export default {
  namespace: 'global',
  reducer: (state = { showLoading: false }, { type, payload }) => {
    switch (type) {
      case 'SHOW_GLOBAL_LOADING':
        return { ...state, showLoading: payload }
      default:
        return state
    }
  }
}
