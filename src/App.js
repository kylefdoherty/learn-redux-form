import React, { Component } from 'react'
import {
  Columns,
  Column,
  Navbar,
  NavbarBrand,
  NavbarItem,
} from 'bloomer'

import SignupForm from './components/signup-form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{ borderBottom: 'solid 1px #00D1B2', margin: '0' }}>
          <NavbarBrand>
            <NavbarItem>
                Redux-Form Basic Example
            </NavbarItem>
          </NavbarBrand>
        </Navbar>
        <Columns
          isCentered
          style={{ margin: '50px 0px 100px 0', textAlign: 'center' }}
        >
          <Column
            isSize='1/3'
            style={{ height: 'auto', border: '1px solid #00d1b2', padding: '2em' }}
          >
            <SignupForm />
          </Column>
        </Columns>
      </div>
    )
  }
}

export default App
