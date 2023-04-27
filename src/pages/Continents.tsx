import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex, Text, useBreakpoint, Image } from '@chakra-ui/react';

import { api } from '@/services/api'
import Header from '@/components/Header';

export default function Continents() {
  const breakpoint = useBreakpoint({ ssr: false })
  const [continent, setContinent] = useState<any>(null)
  const { id } = useParams();

  useEffect(() => {
    api.get(`/continents/${id}`)
      .then(res => setContinent(res.data?.continent))
  }, [id])

  return (
    <Flex direction='column'>
      <Header />

      <Flex
        direction='row'
        justifyContent={breakpoint === 'lg' ? 'start' : 'center'}
        alignItems={breakpoint === 'lg' ? 'end' : 'center'}
        bgImage={`url(${continent?.background})`}
        bgSize='cover'
        bgPosition='center'
        w="100%"
        h={breakpoint === 'lg' ? '300px' : '160px'}
        p={breakpoint === 'lg' ? 12 : 6}
      >
        <Text fontSize='3xl' fontWeight='bold' color='#F5F8FA'>{continent?.name}</Text>
      </Flex>

      <Flex
        direction={breakpoint === 'lg' ? 'row' : 'column'}
        p={breakpoint === 'lg' ? 12 : 6}
      >
        <Flex direction='row' mr={6} w={breakpoint === 'lg' ? '50%' : '100%'}>
          <Text color='#47585B'>
            {continent?.description}
          </Text>
        </Flex>

        <Flex
          direction='row'
          justifyContent='space-evenly'
          mt={breakpoint === 'lg' ? 0 : 6}
          w={breakpoint === 'lg' ? '50%' : '100%'}
        >
          <Flex direction='column' alignItems='center'>
            <Text fontSize='3xl' fontWeight='bold' color='#FFBA08'>
              {continent?.countries}
            </Text>
            <Text fontSize='sm' fontWeight='bold' color='#47585B'>países</Text>
          </Flex>

          <Flex direction='column' alignItems='center'>
            <Text fontSize='3xl' fontWeight='bold' color='#FFBA08'>
              {continent?.languages}
            </Text>
            <Text fontSize='sm' fontWeight='bold' color='#47585B'>línguas</Text>
          </Flex>

          <Flex direction='column' alignItems='center'>
            <Text fontSize='3xl' fontWeight='bold' color='#FFBA08'>
              {continent?.cities}
            </Text>
            <Text fontSize='sm' fontWeight='bold' color='#47585B'>cidades +100</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction='column'
        alignItems={breakpoint === 'lg' ? 'start' : 'center'}
        pb={breakpoint === 'lg' ? 12 : 6}
        pl={breakpoint === 'lg' ? 6 : 3}
        pr={breakpoint === 'lg' ? 6 : 3}
      >
        <Text fontSize='2xl' fontWeight='bold' color='#47585B' p={3}>cidades +100</Text>

        <Flex
          direction={breakpoint === 'lg' ? 'row' : 'column'}
        >
          {continent?.citiesList.map((city:any) => (
            <Flex key={city?.id} p={3}>
              <Flex
                direction='column'
                border='1px solid #FFBA0880'
                borderRadius='4px'
              >
                <Image src={city?.image} h='170px' borderRadius='4px 4px 0px 0px'/>

                <Flex
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  p={3}
                  w='100%'
                >
                  <Flex direction='column'>
                    <Text fontSize='sm' fontWeight='bold' color='#47585B'>{city?.city}</Text>
                    <Text fontSize='sm' color='#47585B'>{city?.country}</Text>
                  </Flex>
                  <Image src={city?.flag} w='30px' h='30px' borderRadius='50%' bgSize='cover' bgPosition='center'/>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
