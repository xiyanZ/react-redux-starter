export default {
  namespace: 'posts',
  reducer: (state = { blogList: [], detail: {} }, action) => {
    switch (action.type) {
      case 'FETCH_BLOGS':
        return {
          ...state,
          blogList: action.payload
        }
      case 'FETCH_POST_DETAIL':
        return {
          ...state,
          detail: action.payload
        }
      case 'CLEAR_POST_DETAIL':
        return {
          ...state,
          detail: {}
        }
      default:
        return state
    }
  }
}
