import React from 'react'
import App from './App'
import NewPost from './NewPost'
import Detail from './Detail'
import history from '@history'

import { Router, Route } from 'react-router-dom'

const Gate = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/new" component={NewPost} />
        <Route path="/posts/:id" component={Detail} />
      </div>
    </Router>
  )
}

export default Gate
