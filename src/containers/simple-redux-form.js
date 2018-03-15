import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Button,
} from 'bloomer'
import isEmail from 'validator/lib/isEmail'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

import { BloomerInput } from '../components/forms/inputs'


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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class SimpleReduxForm extends Component {
  onSubmit = (formData) => {
    return sleep(2000).then(() => {
      console.log('SUBMITTED FORM DATA', formData)
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            isColor="primary"
            type="submit"
            isLoading={this.props.submitting}
          >
            Submit
          </Button>
        </form>
      </Fragment>
    )
  }
}

export default reduxForm({
  form: 'SimpleReduxForm',
})(SimpleReduxForm)
