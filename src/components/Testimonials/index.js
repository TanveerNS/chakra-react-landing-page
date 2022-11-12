import { Box, Button, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';
import './testimonials.css'

const Testimonials = () => {
    const [testChange, setTestChange] = useState(true)
    return (
        <Box className='testimonial' display={'flex'} alignContent={'center'} justifyContent={'space-around'}  >
            <h1 className={'heading'} >Testimonials</h1>
            <Stack
                
                spacing={6}>
                <Button onClick={(e) => { setTestChange(!testChange) }}>
                    {testChange ? <><ChevronLeftIcon /><ChevronRightIcon /></> : <><ChevronLeftIcon /><ChevronRightIcon /></>}
                </Button>
            </Stack>
        </Box>
    )
}

export default Testimonials