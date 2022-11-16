import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FeaturestatsData } from '../../../mockData/data'

const FeaturesStats = () => FeaturestatsData.map((stat, i) =>
    <Box key={stat.title}>
        <Text
            fontFamily={'heading'}
            fontSize={'3xl'}
            color={'white'}
            mb={3}>
            {stat.title}
        </Text>
        <Text fontSize={'xl'} color={'gray.400'}>
            <Text as={'span'} fontWeight={700} color={'white'}>
                {stat?.content?.split(',')[0]}
            </Text>{stat?.content?.split(',')[1]}
        </Text>
    </Box>

)

export default FeaturesStats