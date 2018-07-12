import request from '@request'

export function fetchBlogs() {
  return request(
    'http://reduxblog.herokuapp.com/api/posts?key=etong008linhoomjac20180510',
    'get'
  )
}

export function deleteBlog(id) {
  return request(
    `http://reduxblog.herokuapp.com/api/posts/${id}?key=etong008linhoomjac20180510`,
    'delete'
  )
}
