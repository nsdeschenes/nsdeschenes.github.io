import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

theme.styles = styles

export default theme
