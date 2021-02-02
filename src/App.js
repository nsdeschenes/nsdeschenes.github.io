import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Flex,
  Link,
  CSSReset,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import GithubLogo from './images/github.svg'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Presentations = lazy(() => import('./pages/Presentations'))

const App = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')

  return (
    <>
      <Flex direction="column" minHeight="100vh" bg={bg}>
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
        <Footer>
          <Link href="https://github.com/nsdeschenes" target="_blank">
            <Stack isInline align="center" my="auto">
              <Image align="vertical" alt="Github Logo" src={GithubLogo} />
              <Text>Github</Text>
            </Stack>
          </Link>
        </Footer>
      </Flex>
    </>
  )
}

export default App
