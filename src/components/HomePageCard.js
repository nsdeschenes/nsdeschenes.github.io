import React from 'react'
import { Center, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HomePageCard = ({ link, children }) => {
  return (
    <Link to={link}>
      <Center
        border="2px solid"
        borderColor="gray.200"
        py="5em"
        px="2em"
        cursor="pointer"
        boxShadow="md"
        _hover={{ boxShadow: '2xl', transitionDuration: '0.5s' }}
      >
        <Heading>{children}</Heading>
      </Center>
    </Link>
  )
}

HomePageCard.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
}

export default HomePageCard
