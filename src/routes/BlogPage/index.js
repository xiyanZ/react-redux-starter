import React from 'react'
import Posts from '~components/Posts'
import { Link } from 'react-router-dom'
import connect from '@connect'

// let + const
// 单向数据流
@connect(state => ({
  posts: state.posts.blogList,
  showLoading: state.global.showLoading
}))
export default class BlogPage extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs()
  }
  render() {
    const { posts, showLoading } = this.props

    //  const posts = this.state.posts 等价于 const { posts } = this.state
    // JSX
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '10px'
          }}
        >
          <Link
            to="/new"
            style={{
              background: '#3ba7f3',
              color: '#fff',
              padding: '10px',
              textDecoration: 'none'
            }}
          >
            撰写博客
          </Link>
        </div>
        {!showLoading ? (
          <Posts data={posts} deletePost={this.props.deleteBlog} />
        ) : (
          '加载中...'
        )}
      </div>
    )
  }
}
