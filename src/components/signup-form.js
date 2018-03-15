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

const BloomerInput = (props) =>
  <Control style={{ padding: '0.5em' }}>
    <Input {...props} />
  </Control>

class SignupForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          component={BloomerInput}
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        <Field
          component={BloomerInput}
          name="email"
          placeholder="Email"
          type="text"
        />
        <Field
          component={BloomerInput}
          name="phone"
          placeholder="Phone"
          type="text"
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
