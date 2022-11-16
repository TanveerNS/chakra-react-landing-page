import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../common/Footer/Logo';
import FooterListHeader from '../common/Footer/FooterListHeader';
import FooterLinks from '../common/Footer/FooterLinks';

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <FooterListHeader>Product</FooterListHeader>
            <Link href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <FooterLinks index={"Product"} />
          </Stack>
          <Stack align={'flex-start'}>
            <FooterListHeader>Company</FooterListHeader>
            <FooterLinks index={"Company"} />
          </Stack>
          <Stack align={'flex-start'}>
            <FooterListHeader>Legal</FooterListHeader>
            <FooterLinks index={"Legal"} />
          </Stack>
          <Stack align={'flex-start'}>
            <FooterListHeader>Follow Us</FooterListHeader>
            <FooterLinks index={"Follow Us"} />
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Chakra Templates. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer