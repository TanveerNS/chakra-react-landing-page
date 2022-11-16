import { Text } from '@chakra-ui/react'
import React from 'react'

const FooterListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default FooterListHeader