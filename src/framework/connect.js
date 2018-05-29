import { connect as reduxConnect } from "react-redux";
import actions from "../actions";
console.log(actions);
export default function connect(params) {
  return target => {
    return reduxConnect(params, actions)(target);
  };
}
