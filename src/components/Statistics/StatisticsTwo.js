import { Box, chakra, SimpleGrid } from '@chakra-ui/react';
import { StatsCardTwoData } from '../../mockData/data';
import StatsCardTwo from '../common/Statistics/StatsCardTwo';
  
function StatisticsTwo() {
    return (
      <Box maxW="7xl" mx={'auto'}  mb={'6rem'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          What is our company doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {StatsCardTwoData.map((stats)=>
            <StatsCardTwo title={stats.title} stat={stats.stat} />
          )}
        </SimpleGrid>
      </Box>
    );
  }

export default StatisticsTwo