import React from 'react'
import { Flex, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react"

import background from "@/assets/img/Background.jpg"
import airplane from "@/assets/img/Airplane.png"

export default function Banner() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Flex
      direction='row'
      bgImage={`url(${background})`}
      w="100%"
      h={isLargerThan800 ? '260px' : '160px'}
      p={isLargerThan800 ? 12 : 6}
    >
      <Flex direction='row' justifyContent='space-between' width="100%">
        <Flex direction='column' justifyContent='center'>
          <Heading
            as='h3'
            color='#F5F8FA'
            size='lg'
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color='#DADADA'
            fontSize='sm'
            mt={2}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        { isLargerThan800 && <Image src={airplane} width={400} height={260} marginTop='10px'/> }
      </Flex>
    </Flex>
  )
}
