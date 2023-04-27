import React from 'react'
import { useBreakpoint, Grid, GridItem, Flex, Text, Image } from '@chakra-ui/react'

import building from '@/assets/img/building.png'
import cocktail from '@/assets/img/cocktail.png'
import earth from '@/assets/img/earth.png'
import museum from '@/assets/img/museum.png'
import surf from '@/assets/img/surf.png'

export default function TravelTypes() {
  const breakpoint = useBreakpoint({ ssr: false })

  return (
    <>{ breakpoint === 'lg'
        ? <Flex direction='row' justifyContent='center' w="100%" p={12}>
            <Flex direction='column' alignItems='center' marginRight='6rem'>
              <Image src={cocktail} w='60px' h='60px' />
              <Text fontSize='xl' color='#47585B'>Vida noturna</Text>
            </Flex>
            <Flex direction='column' alignItems='center' marginRight='6rem'>
              <Image src={surf} w='60px' h='60px' />
              <Text fontSize='xl' color='#47585B'>Praia</Text>
            </Flex>
            <Flex direction='column' alignItems='center' marginRight='6rem'>
              <Image src={building} w='60px' h='60px' />
              <Text fontSize='xl' color='#47585B'>Moderno</Text>
            </Flex>
            <Flex direction='column' alignItems='center' marginRight='6rem'>
              <Image src={museum} w='60px' h='60px' />
              <Text fontSize='xl' color='#47585B'>Clássico</Text>
            </Flex>
            <Flex direction='column' alignItems='center'>
              <Image src={earth} w='60px' h='60px' />
              <Text fontSize='xl' color='#47585B'>E mais...</Text>
            </Flex>
          </Flex>
        : <Grid
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(2, 1fr)'
            placeItems='center'
            gap={4}
            p={6}
          >
            <GridItem as='li' colSpan={1} color='#FFBA08'>
              <Text fontSize='xl' color='#47585B'>Vida noturna</Text>
            </GridItem>
            <GridItem as='li' colSpan={1} color='#FFBA08'>
              <Text fontSize='xl' color='#47585B'>Praia</Text>
            </GridItem>
            <GridItem as='li' colSpan={1} color='#FFBA08'>
              <Text fontSize='xl' color='#47585B'>Moderno</Text>
            </GridItem>
            <GridItem as='li' colSpan={1} color='#FFBA08'>
              <Text fontSize='xl' color='#47585B'>Clássico</Text>
            </GridItem>
            <GridItem as='li' colSpan={2} color='#FFBA08'>
              <Text fontSize='xl' color='#47585B'>E mais...</Text>
            </GridItem>
          </Grid>
    }</>
  )
}
