import actions from './'
// import history from '@history'
import { fetchBlogs, deleteBlog } from '~services/blogService'

export default {
  fetchBlogs: () => async dispatch => {
    const res = await fetchBlogs()
    dispatch({
      type: 'FETCH_BLOGS',
      payload: res.data
    })
  },
  deleteBlog: id => async dispatch => {
    await deleteBlog(id)
    dispatch(actions.fetchBlogs())
  }
}
