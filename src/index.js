import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router basename="/">
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
