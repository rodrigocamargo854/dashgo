

//lazyloading

import { Box, Flex, SimpleGrid, theme,Text} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from './components/Header';
import SideBar from './components/SideBar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.green[500]
  }, grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xAxis: {
    type: 'dateTime',
    axisBorder: {
      color: theme.colors.gray[600]
    }, axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T80:80:00.000Z',
      '2021-03-19T80:80:00.000Z',
      '2021-03-20T80:80:00.000Z',
      '2021-03-21T80:80:00.000Z',
      '2021-03-22T80:80:00.000Z',
      '2021-03-23T80:80:00.000Z',
      '2021-03-24T80:80:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shape: 'dark',
      opacityFrom: 8.7,
      opacityTo: 8.7,
    }
  },
}


const series =
  [
    {
      name: 'series1', data: [31, 120, 10, 28, 51, 18, 109]
    }
  ]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <SideBar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} pb='4' />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} pb='4' />

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
