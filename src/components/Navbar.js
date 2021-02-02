import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { node } from 'prop-types'

export const Navbar = ({ children, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('#fff', 'gray.800')

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ sm: '0.6rem', md: '0.80rem', lg: '1rem', xl: '1rem' }}
      py="4px"
      bg={bg}
      color="primary"
      borderBottom="2px solid"
      borderBottomColor="gray.300"
      display={{ base: 'flex', md: 'flex' }}
      {...props}
    >
      <Flex
        maxW={{ sm: 540, md: 768, lg: 960, xl: 1200 }}
        mx="auto"
        px={4}
        w="100%"
        align="center"
        direction="row"
      >
        <Stack
          isInline
          alignItems="center"
          flexWrap="wrap"
          spacing="6"
          w="100%"
        >
          {React.Children.map(children, (child) => {
            if (child !== null) {
              return React.cloneElement(child, {
                as: ReactRouterLink,
              })
            }
          })}
          <Box ml="auto">
            {colorMode === 'light' ? (
              <MoonIcon
                as="button"
                onClick={toggleColorMode}
                ml="auto"
                cursor="pointer"
              />
            ) : (
              <SunIcon
                as="button"
                onClick={toggleColorMode}
                ml="auto"
                cursor="pointer"
              />
            )}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  )
}

Navbar.propTypes = {
  children: node,
}
