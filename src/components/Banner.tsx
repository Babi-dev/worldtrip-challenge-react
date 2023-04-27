import React from 'react'
import { Flex, Heading, Text, Image, useBreakpoint } from "@chakra-ui/react"

import background from "@/assets/img/Background.jpg"
import airplane from "@/assets/img/Airplane.png"

export default function Banner() {
  const breakpoint = useBreakpoint({ ssr: false })

  return (
    <Flex
      direction='row'
      bgImage={`url(${background})`}
      w="100%"
      h={breakpoint === 'lg' ? '260px' : '160px'}
      p={breakpoint === 'lg' ? 12 : 6}
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
        { breakpoint === 'lg' && <Image src={airplane} width={400} height={260} marginTop='10px'/> }
      </Flex>
    </Flex>
  )
}
