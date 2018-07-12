import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { isNumber } from 'lodash.isnumber'

export default {
  create: params => {
    return target => {
      return reduxForm({
        form: target.name,
        ...params
      })(target)
    }
  },
  createField: config => {
    return (
      <Field
        component={config.component}
        {...config.props}
        validate={config.validate}
      />
    )
  },
  validators: {
    required: value => (value && value.length > 0 ? undefined : 'required'),
    nullValue: (init, message = '必填项') => {
      return value => (value === init ? message : undefined)
    },
    maxLength: (max, message = `不能超过 ${max} 个字`) => {
      return value => (value && value.length > max ? message : undefined)
    },
    minLength: (min, message = `不能少于 ${min} 个字`) => {
      return value => (value && value.length < min ? message : undefined)
    },
    number: (value, message = '必须是数字') => {
      return value && isNumber(value) ? message : undefined
    },
    minValue: (min, message = `不能小于 ${min}`) => {
      return value => (value && value < min ? message : undefined)
    },
    email: (value, message = '请输入正确的邮件格式') => {
      return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? message
        : undefined
    }
  }
}
