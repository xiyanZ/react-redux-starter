export default {
  namespace: "posts",
  reducer: (state = [], action) => {
    switch (action.type) {
      case "FETCH_BLOGS":
        console.log(111);
        return [...action.payload];
      default:
        return state;
    }
  }
};
