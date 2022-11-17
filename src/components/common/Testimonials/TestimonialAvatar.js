import {
    Flex,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
          <Avatar src={src} alt={name} mb={2} />
          <Stack spacing={-1} align={'center'}>
            <Text fontWeight={600}>{name}</Text>
            <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
              {title}
            </Text>
          </Stack>
        </Flex>
      );
}

export default TestimonialAvatar