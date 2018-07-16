import actions from "./";
import history from "@history";
import { fetchBlogs, deleteBlog, fetchPostDetail } from "~services/blogService";
import types from "../common/types";
export default {
  fetchBlogs: () => async dispatch => {
    const res = await fetchBlogs();
    dispatch({
      type: types.posts.FETCH_BLOGS,
      payload: res.data
    });
  },
  deleteBlog: id => async dispatch => {
    // 删除博客
    await deleteBlog(id);
    dispatch(actions.fetchBlogs()); // 删除成功后再次请求博客列表
  },
  test: id => async dispatch => {
    await new Promise(resolve => {
      setTimeout(resolve, 200, "foo");
    });
  },
  fetchPostDetail: id => async dispatch => {
    //获取博客详情
    const res = await fetchPostDetail(id);
    dispatch({
      type: types.posts.FETCH_POST_DETAIL,
      payload: res.data
    });
  },
  clearPostDetail: () => {
    return {
      type: types.posts.CLEAR_POST_DETAIL
    };
  },
  switchPost: id => async dispatch => {
    history.push(`/posts/${id}`);
    dispatch(actions.fetchPostDetail(id));
  }
};
