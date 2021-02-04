import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/Layout'

const Home = () => {
  return (
    <Layout mb="5em">
      <Center
        height="100vh"
        position="relative"
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Box
          width="100%"
          height="100%"
          textAlign="center"
          verticalAlign="center"
          position="relative"
          bg="#E2E8F0"
          color="#000000"
          style={{
            mixBlendMode: 'screen',
          }}
        >
          <Heading size="4xl">Welcome</Heading>
        </Box>
      </Center>
      <Text>
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
