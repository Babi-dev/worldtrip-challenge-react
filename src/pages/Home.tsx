import { useEffect, useState } from "react"
import { Flex, Text, Divider, useBreakpoint } from "@chakra-ui/react"


import { api } from "@/services/api"

import Header from "@/components/Header"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Banner from "@/components/Banner"
import TravelTypes from "@/components/TravelTypes"
import ContinentsSlide from "@/components/ContinentsSlide"

type Continent = {
  id: number;
  title: string;
  subtitle: string;
  background: string;
}

const Home = () => {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    api.get('/continents')
      .then(res => setContinents(res.data?.continents))
  }, [])

  return (
    <Flex direction='column' justify='center'>
      <Header />

      <Banner />

      <TravelTypes />

      <Flex justifyContent='center' pt={4}>
        <Divider borderColor='#47585B' w='60px' />
      </Flex>

      <Flex direction='column' p={6}>
        <Text
          fontSize='2xl'
          color='#47585B'
          textAlign='center'
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize='2xl'
          color='#47585B'
          textAlign='center'
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <ContinentsSlide continents={continents} />
    </Flex>
  )
}

export default Home