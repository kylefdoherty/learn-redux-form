import React, { Component } from 'react'
import {
  Columns,
  Column,
  Box,
  Navbar,
  NavbarBrand,
  NavbarItem,
} from 'bloomer'

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
        <Columns isCentered style={{ marginTop: '100px', textAlign: 'center' }}>
          <Column isSize='1/3'>
              Form Goes Here
          </Column>
        </Columns>
      </div>
    )
  }
}

export default App
