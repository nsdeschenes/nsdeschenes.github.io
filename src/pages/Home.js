import React from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/Layout'

const Home = () => {
  return (
    <Layout mb="5em">
      <Center mt="15em">
        <Heading size="4xl">Welcome</Heading>
      </Center>
      <Text pt="100vh">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
        varius justo. Vivamus porttitor turpis in tortor feugiat dapibus. Nulla
        non interdum turpis, quis facilisis massa. Suspendisse nec tellus
        sagittis, pellentesque sapien eget, tincidunt dolor. Aenean non massa
        dapibus, euismod eros ut, tincidunt sapien. Nulla sagittis placerat nisi
        id placerat. Sed quis nisl et leo tincidunt ullamcorper a eget nisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod
        leo a varius tempor.
      </Text>
    </Layout>
  )
}

export default Home
