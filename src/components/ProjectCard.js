import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ProjectCard = ({ project }) => {
  return (
    <Box
      maxH="lg"
      width="fit-content"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: '2xl', transitionDuration: '0.5s' }}
    >
      <Box as="a" cursor="pointer" target="_blank" href={project.projectUrl}>
        <Box backgroundColor={project.imageBackground} py="1">
          <Box width="fit-content" mx="auto">
            <Image
              objectFit="cover"
              src={project.image}
              alt={project.imageAlt}
            />
          </Box>
        </Box>
        <Box px="4" py="2">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {project.title}
          </Box>
          <Box color="gray.600" fontSize="sm">
            {project.description}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  project: PropTypes.object,
}
