import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'
import { makeServer } from './services/mirage'
import Routes from './routes'

function App() {
  makeServer()

  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}

export default App
