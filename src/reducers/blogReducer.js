import types from "../common/types";

export default {
  namespace: "posts",
  reducer: (state = { blogList: [], detail: {} }, action) => {
    switch (action.type) {
      case types.posts.FETCH_BLOGS:
        return {
          ...state,
          blogList: action.payload
        };
      case types.posts.FETCH_POST_DETAIL:
        return {
          ...state,
          detail: action.payload
        };
      case types.posts.CLEAR_POST_DETAIL:
        return {
          ...state,
          detail: {}
        };
      default:
        return state;
    }
  }
};
