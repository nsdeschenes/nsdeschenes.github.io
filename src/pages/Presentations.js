import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

import presentations from '../data/presentations'
import ProjectCard from '../components/PresentationCard'

const Presentations = () => {
  return (
    <Box width="fit-content" mx="auto">
      <SimpleGrid columns={[1, null, 3]} spacing="60px" mx="auto">
        {presentations.map((presentation, index) => (
          <ProjectCard key={index} presentation={presentation} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Presentations
