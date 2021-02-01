import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router basename="/">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
