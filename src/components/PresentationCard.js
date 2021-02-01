import React from 'react'
import { Box, AspectRatio, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const PresentationCard = ({ presentation }) => {
  const descriptionTextColor = useColorModeValue("gray.600", "gray.400")

  return (
    <Box
      maxH="lg"
      width="360px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: '2xl', transitionDuration: '0.5s' }}
      as="a"
      cursor="pointer"
      target="_blank"
      href={presentation.url}
    >
      <AspectRatio width="358px" height="217px">
        <iframe
          title={presentation.title}
          src={presentation.url}
          allowFullScreen="false"
        />
      </AspectRatio>
      <Box px="4" py="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {presentation.title}
        </Box>
        <Box color={descriptionTextColor} fontSize="sm">
          {presentation.description}
        </Box>
      </Box>
    </Box>
  )
}

export default PresentationCard

PresentationCard.propTypes = {
  presentation: PropTypes.object,
}
