import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { NewsLetterNotificationIcon } from './NewsLetterNotificationIcon';

const NewsLetter = () =>
    <Flex
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('white', 'gray.700')}
    >
      <Stack
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}>
        <Icon as={NewsLetterNotificationIcon} w={24} h={24} />
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
            Subscribe
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Subscribe to our newsletter & stay up to date!
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Input
            type={'text'}
            placeholder={'john@doe.net'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}>
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Flex>


export default NewsLetter