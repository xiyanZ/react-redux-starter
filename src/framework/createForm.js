import { reduxForm } from "redux-form";
export default function connect(params) {
  return target => {
    return reduxForm({
      form: target.name,
      ...params
    })(target);
  };
}
