import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Flex, Link, CSSReset } from '@chakra-ui/react'

import { Navbar } from './components/Navbar'
import { Main } from './components/Main'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Presentations = lazy(() => import('./pages/Presentations'))

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
                <Home />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/presentations">
                <Presentations />
              </Route>
            </Switch>
          </Suspense>
        </Main>
      </Flex>
    </>
  )
}

export default App
