import React, { Component } from 'react'
import {
  Field,
  Icon,
  Input,
  Label,
  Control,
  Help,
} from 'bloomer'


class BloomerInput extends Component {
  render() {
    console.log("props", this.props)
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
            (error && <Help isColor='danger'>{error}</Help>)
        }
      </Field>
    )
  }
}

export {
  BloomerInput,
}
