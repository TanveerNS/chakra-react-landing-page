import { Box, Button, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';
import './testimonials.css'
import TestimonialBubble from './TestimonialBubble';
import TestimonialBlurredBackdrop from './TestimonialBlurredBackdrop';

const Testimonials = () => {
    const [testChange, setTestChange] = useState(true)
    return (
        <>
        <Box className='testimonial' display={'flex'} alignContent={'center'} justifyContent={'space-around'} mb={'3rem'}  >
            <h1 className={'heading'} >Testimonials</h1>
            <Stack display={'flex'} flexDirection={'row'}>
                <Button className='testimonial-btn-prev' onClick={(e) => { setTestChange(!testChange) }}>
                    {testChange ? <><ChevronLeftIcon /></> : <><ChevronLeftIcon /></>}
                </Button>
            
                <Button className='testimonial-btn-next' onClick={(e) => { setTestChange(!testChange) }}>
                    {testChange ? <><ChevronRightIcon /></> : <><ChevronRightIcon /></>}
                </Button>
            </Stack>
        </Box>
        {testChange ? <TestimonialBubble /> : <TestimonialBlurredBackdrop />}
        </>
    )
}

export default Testimonials