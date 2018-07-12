import { connect as reduxConnect } from 'react-redux'
import actions from '../actions'

export default function connect(params) {
  return target => {
    return reduxConnect(params, actions)(target)
  }
}
