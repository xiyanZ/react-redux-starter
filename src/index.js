import React from 'react'
import ReactDOM from 'react-dom'
import Gate from './components/Gate'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <Gate />
  </Provider>,
  document.querySelector('#root')
)
