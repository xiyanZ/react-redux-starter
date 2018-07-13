import React, { Component } from 'react'
import axios from 'axios'
import connect from '@connect'
import history from '@history'

@connect(({ posts }) => ({
  posts
}))
export default class Detail extends Component {
  state = {
    title: '',
    content: ''
  }

  renderItems = () => {
    const { id } = this.props.match.params
    return this.props.posts.map(({ title, id: curId }) => {
      return (
        <li
          key={curId}
          style={{ color: id == curId ? 'red' : 'black' }}
          onClick={() => {
            history.push(`/posts/${curId}`)
          }}
        >
          {title}
        </li>
      )
    })
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const res = await axios.get(
      `http://reduxblog.herokuapp.com/api/posts/${id}?key=etong008linhoomjac20180510`
    )

    const { title, content } = res.data
    this.setState({
      title,
      content
    })
  }

  render() {
    const { title, content } = this.state
    const { id } = this.props.match.params
    return (
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
