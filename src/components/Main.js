import React from 'react'
import { node } from 'prop-types'
import { Flex, useColorModeValue } from '@chakra-ui/react'

export const Main = ({ children }) => {
  const bg = useColorModeValue("gray.50", "gray.800")

  return (
    <Flex
      maxW={{ sm: 540, md: 768, lg: 960, xl: 1200 }}
      as="main"
      id="main"
      fontFamily="body"
      flex="1 0 auto"
      mx="auto"
      pt={10}
      width="100%"
      bg={bg}
    >
      {children}
    </Flex>
  )
}

Main.propTypes = { children: node }
