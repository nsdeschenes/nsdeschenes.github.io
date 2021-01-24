import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Flex, Link, CSSReset } from '@chakra-ui/react'

import { Navbar } from './components/Navbar'
import { Main } from './components/Main'

const App = () => {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bg="gray.50">
        <CSSReset />
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/presentations">Presentations</Link>
        </Navbar>
        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <p>Home</p>
              </Route>
              <Route exact path="/projects">
                <p>Projects</p>
              </Route>
              <Route exact path="/presentations">
                <p>Presentations</p>
              </Route>
            </Switch>
          </Suspense>
        </Main>
      </Flex>
    </>
  )
}

export default App
