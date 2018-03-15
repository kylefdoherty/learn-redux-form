import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Field as BloomerField,
  Icon,
  Input,
  Label,
  Control,
  Help,
  Select,
  TextArea,
  Checkbox,
  Radio,
  Button,
} from 'bloomer'
import isEmail from 'validator/lib/isEmail'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

import { BloomerInput } from './forms/inputs'

// TODO - move these to a libs folder
// Validations
const required = value => (value ? undefined : 'Required')
const validEmail = value =>
  value && isEmail(value) ? undefined : 'Must be a valid email'

// Warnings
const alphanumeric = value =>
  value && isAlphanumeric(value) ? undefined : 'Must be alpha numeric'

// Normalizers
const formatPhone = value => {
  if (!value) { return value }

  const number = value.replace(/[^\d]/g, '')
  return number
}


class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          component={BloomerInput}
          name="firstName"
          placeholder="First Name"
          type="text"
          validate={[required]}
          warn={alphanumeric}
        />
        <Field
          component={BloomerInput}
          name="email"
          placeholder="Email"
          type="text"
          validate={[required, validEmail]}
        />
        <Field
          component={BloomerInput}
          name="phone"
          normalize={formatPhone}
          placeholder="Phone"
          type="text"
          validate={[required]}
        />
        <Button
          style={{ marginTop: '1em' }}
          isColor='success'
          isOutlined>Submit
        </Button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signupForm',
})(SignupForm)
