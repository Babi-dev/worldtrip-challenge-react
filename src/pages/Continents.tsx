import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flex, Text, useMediaQuery, Image } from '@chakra-ui/react';

import { api } from '@/services/api'
import Header from '@/components/Header';

export default function Continents() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [continent, setContinent] = useState<any>(null)
  const { id } = useParams();

  useEffect(() => {
    api.get(`/continents/${id}`)
      .then(res => setContinent(res.data?.continent))
  }, [id])

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
    >
      <Flex direction='column' w='100%' maxW='1280px'>
        <Header />

        <Flex
          direction='row'
          justifyContent={isLargerThan800 ? 'start' : 'center'}
          alignItems={isLargerThan800 ? 'end' : 'center'}
          bgImage={`url(${continent?.background})`}
          bgSize='cover'
          bgPosition='center'
          w="100%"
          h={isLargerThan800 ? '300px' : '160px'}
          p={isLargerThan800 ? 12 : 6}
        >
          <Text fontSize='3xl' fontWeight='bold' color='#F5F8FA'>{continent?.name}</Text>
        </Flex>

        <Flex
          direction={isLargerThan800 ? 'row' : 'column'}
          p={isLargerThan800 ? 12 : 6}
        >
          <Flex direction='row' mr={6} w={isLargerThan800 ? '50%' : '100%'}>
            <Text color='#47585B'>
              {continent?.description}
            </Text>
          </Flex>

          <Flex
            direction='row'
            justifyContent='space-evenly'
            mt={isLargerThan800 ? 0 : 6}
            w={isLargerThan800 ? '50%' : '100%'}
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
          alignItems={isLargerThan800 ? 'start' : 'center'}
          pb={isLargerThan800 ? 12 : 6}
          pl={isLargerThan800 ? 6 : 3}
          pr={isLargerThan800 ? 6 : 3}
        >
          <Text fontSize='2xl' fontWeight='bold' color='#47585B' p={3}>cidades +100</Text>

          <Flex
            direction={isLargerThan800 ? 'row' : 'column'}
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
    </Flex>
  )
}
