import React from 'react'
import { node } from 'prop-types'
import { Box, SimpleGrid } from '@chakra-ui/react'

const Grid = ({ children }) => (
  <Box width="fit-content" mx="auto" mb="25">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="60px" mx="auto">
      {children}
    </SimpleGrid>
  </Box>
)

Grid.propTypes = { children: node }

export default Grid
