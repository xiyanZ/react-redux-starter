import React, { Component } from 'react'
import connect from '@connect'
import { userInfo } from 'os'

@connect(({ posts, global }) => ({
  posts: posts.blogList,
  detail: posts.detail,
  showLoading: global.showLoading
}))
export default class Detail extends Component {
  renderItems = () => {
    const { id } = this.props.match.params
    return this.props.posts.map(({ title, id: curId }) => {
      return (
        <li
          key={curId}
          style={{ color: id == curId ? 'red' : 'black', cursor: 'pointer' }}
          onClick={() => {
            if (id == curId) return false
            this.props.switchPost(curId)
          }}
        >
          {title}
        </li>
      )
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPostDetail(id)
  }

  componentWillUnmount() {
    this.props.clearPostDetail() // 组件卸载时从 redux state 中清楚当前文章状态，防止下次加载时出现上篇文章的残影
  }

  render() {
    const { title, content } = this.props.detail
    const { id } = this.props.match.params
    return this.props.showLoading ? (
      '加载中...'
    ) : (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 150px'
        }}
      >
        <div>
          <h2>{title}</h2>
          <article>{content}</article>
          <span
            style={{
              position: 'absolute',
              right: '10px',
              top: '10px'
            }}
            onClick={async () => {
              this.props.deleteBlog(id)
            }}
          >
            X
          </span>
        </div>
        <ul>{this.renderItems()}</ul>
      </div>
    )
  }
}
