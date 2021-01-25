import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <Box width="fit-content" mx="auto">
      <SimpleGrid columns="3" spacing="60px" mx="auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects
