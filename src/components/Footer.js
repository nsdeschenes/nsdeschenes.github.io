import React from 'react'
import PropTypes from 'prop-types'
import { Flex, List, ListItem, useColorModeValue } from '@chakra-ui/react'

import { Layout } from './Layout'

export const Footer = (props) => {
  const bg = useColorModeValue("gray.300", "gray.800")
  
  return (
    <Flex
      {...props}
      as="footer"
      py="4"
      bg={bg}
      fontFamily="body"
      borderTop="2px solid"
      borderTopColor="gray.300"
    >
      <Layout>
        <Flex align="center" direction="row">
          <List px={0} d="flex" align="center" direction="row">
            {React.Children.map(props.children, (child) => (
              <ListItem>{child}</ListItem>
            ))}
          </List>
        </Flex>
      </Layout>
    </Flex>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  bg: PropTypes.string,
}
