import React, { Component } from 'react'
import {
  Field,
  Input,
  Control,
  Help,
} from 'bloomer'

class BloomerInput extends Component {
  render() {
    const {
      input,
      placeholder,
      type,
      meta: { touched, error, warning },
    } = this.props

    return (
      <Field>
        <Control style={{ padding: '0.5em' }}>
          <Input
            {...input}
            placeholder={placeholder}
            type={type}
          />
        </Control>
        {
          touched &&
            ((error && <Help isColor='danger'>{error}</Help>) ||
              (warning && <Help isColor='warning'>{warning}</Help>))
        }
      </Field>
    )
  }
}

export {
  BloomerInput,
}
