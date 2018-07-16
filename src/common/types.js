const types = {
  global: {
    SHOW_GLOBAL_LOADING: Symbol()
  },
  posts: {
    FETCH_BLOGS: Symbol(),
    FETCH_POST_DETAIL: Symbol(),
    CLEAR_POST_DETAIL: Symbol()
  }
};
export default types;
