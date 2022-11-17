import { Box, chakra, SimpleGrid } from '@chakra-ui/react';
import { StatsCardData } from '../../mockData/data';
import StatsCard from '../common/Statistics/StatsCard';

const StatisticsOne = () => {
  return (
    <Box maxW="7xl" mx={'auto'} mb={'6rem'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {StatsCardData.map((stats) =>
          <StatsCard
            title={stats.title}
            stat={stats.stat}
            icon={stats.icon}
          />
        )}
      </SimpleGrid>
    </Box>
  );
}
export default StatisticsOne