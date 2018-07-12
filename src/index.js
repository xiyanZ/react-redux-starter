import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import history from '@history'
import { Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { ActivityIndicator } from 'antd-mobile'
import { composeWithDevTools } from 'redux-devtools-extension'
import router from '~routes'

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(reduxThunk))
    : applyMiddleware(reduxThunk)
)
const routes = []
for (const [key, value] of Object.entries(router)) {
  const component = Loadable({
    loader: value.component,
    loading: () => {
      return <ActivityIndicator toast text="加载中..." />
    }
  })
  routes.push(
    <Route key={key} exact={value.exact} path={key} component={component} />
  )
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>{routes}</React.Fragment>
    </Router>
  </Provider>,
  document.querySelector('#root')
)
export default store
