import { Box, Button, Stack } from '@chakra-ui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';
import './statistics.css'
import StatisticsOne from './StatisticsOne';
import StatisticsTwo from './StatisticsTwo';


const Statistics = () => {
    const [testChange, setTestChange] = useState(true)

  return (
    <>
    <Box className='statistics' display={'flex'} alignContent={'center'} justifyContent={'space-around'} mb={'1rem'} mt={'5rem'} pb={'1rem'} borderBottom={'1px solid gray'} >
        <h1 className={'heading'} >Statistics</h1>
        <Stack display={'flex'} flexDirection={'row'}>
            <Button className='statistics-btn-prev' onClick={(e) => { setTestChange(!testChange) }}>
                {testChange ? <><ChevronLeftIcon /></> : <><ChevronLeftIcon /></>}
            </Button>
        
            <Button className='statistics-btn-next' onClick={(e) => { setTestChange(!testChange) }}>
                {testChange ? <><ChevronRightIcon /></> : <><ChevronRightIcon /></>}
            </Button>
        </Stack>
    </Box>
    {testChange ? <StatisticsOne /> : <StatisticsTwo />}
    </>
  )
}

export default Statistics