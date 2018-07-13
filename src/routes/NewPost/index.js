import React, { Component } from 'react'
import '../../style/newPost.css'
import axios from 'axios'
import { Field } from 'redux-form'
import BlogFields from '~components/BlogFields'
import reduxForm from '@reduxForm'
import history from '@history'

@reduxForm.create({
  validate
})
export default class NewPost extends Component {
  state = {
    message: ''
  }

  renderFields = () => {
    return (
      <React.Fragment>
        <Field name="title" component={BlogFields} type="text" label="标题" />
        <Field
          name="categories"
          component={BlogFields}
          type="text"
          label="分类"
        />
        <Field name="content" component={BlogFields} type="text" label="内容" />
      </React.Fragment>
    )
  }

  showMessage = (message, time = 1500, callback = () => {}) => {
    this.setState(
      {
        message
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              message: ''
            },
            callback
          )
        }, time)
      }
    )
  }

  handleChange = (event, name) => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitBlog = async values => {
    const res = await axios({
      method: 'POST',
      url:
        'http://reduxblog.herokuapp.com/api/posts?key=etong008linhoomjac20180510',
      data: values
    })

    if (res.status === 201) {
      // 提交成功
      this.showMessage('提交成功！！！', 1500, () => {
        history.push('/')
      })
    } else {
      // 失败
      this.showMessage('出错啦！！！')
    }
  }

  render() {
    const { message } = this.state
    return (
      <form
        className="new-post"
        onSubmit={this.props.handleSubmit(values => {
          this.submitBlog(values)
        })}
      >
        <dialog open={message ? true : false}>
          <p>{message}</p>
        </dialog>
        {this.renderFields()}
        <section>
          <button type="submit">发布</button>
          <button
            type="button"
            onClick={() => {
              history.push('/')
            }}
          >
            取消
          </button>
        </section>
      </form>
    )
  }
}

function validate(values) {
  const error = {}

  const { title } = values

  if (!title) {
    error.title = '请输入标题'
  }

  return error
}
