export default {
  namespace: "global",
  reducer: (state = { showLoading: false }, action) => {
    switch (action.type) {
      case "SHOW_GLOBAL_LOADING":
        return { showLoading: action.payload };
      default:
        return state;
    }
  }
};
