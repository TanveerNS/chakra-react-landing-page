import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { TestimonialBubbleData } from '../../mockData/data';
import TestimonialAvatar from '../common/Testimonials/TestimonialAvatar';
import TestimonialContent from '../common/Testimonials/TestimonialContent';
import TestimonialHeading from '../common/Testimonials/TestimonialHeading';
import TestimonialText from '../common/Testimonials/TestimonialText';

const TestimonialBubble = ()  => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          {TestimonialBubbleData.map((data)=>
            <Box>
            <TestimonialContent>
              <TestimonialHeading>{data.heading}</TestimonialHeading>
              <TestimonialText>{data.text}</TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={data.image}
              name={data.name}
              title={data.title}
            />
          </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default TestimonialBubble