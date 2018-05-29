import axios from 'axios'
import actions from './'
import history from '@history'
export default {
  fetchBlogs: () => async dispatch => {
    const res = await axios.get(
      'http://reduxblog.herokuapp.com/api/posts?key=etong008linhoomjac20180510'
    )

    dispatch({
      type: 'FETCH_BLOGS',
      payload: res.data
    })
  },
  deleteBlog: id => async dispatch => {
    await axios({
      method: 'DELETE',
      url: `http://reduxblog.herokuapp.com/api/posts/${id}?key=etong008linhoomjac20180510`
    })
    history.push('/')
    dispatch(actions.fetchBlogs())
  }
}
