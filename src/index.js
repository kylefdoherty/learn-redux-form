import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Container } from 'bloomer';

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const exampleReducer = (state = {name: 'boom'}, action) => state

const rootReducer = combineReducers({
  exampleReducer,
  form: formReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Container isFluid style={{ margin: '0px', padding: '0px' }}>
      <App />
    </Container>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
