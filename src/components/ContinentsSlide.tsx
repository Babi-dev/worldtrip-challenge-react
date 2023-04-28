import React, { CSSProperties } from 'react'
import { Flex, Text, useMediaQuery } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import { Link } from 'react-router-dom'

type Continent = {
  id: number;
  title: string;
  subtitle: string;
  background: string;
}

type ContinentsSlideProps = {
  continents: Continent[];
}


export default function ContinentsSlide({ continents }: ContinentsSlideProps) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Flex p={isLargerThan800 ? 12 : 6} pt={0}>
        <Swiper
          cssMode={true}
          style={{
            "--swiper-navigation-color": "#FFBA08",
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-navigation-size": "24px",
          }  as CSSProperties }
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          { continents?.map((continent: Continent) => (
            <SwiperSlide key={continent?.id} style={{ height: '250px' }}>
              <Link key={continent.id} to={`/continents/${continent.id}`} >
                <Flex
                  direction='column'
                  bgImage={`url(${continent.background})`}
                  bgSize='cover'
                  bgPosition='center'
                  justifyContent='center'
                  w="100%"
                  h="100%"
                >
                  <Text fontSize='3xl' fontWeight='bold' color='#F5F8FA'>{continent.title}</Text>
                  <Text fontSize='md' fontWeight='bold' color='#F5F8FA'>{continent.subtitle}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )) }
        </Swiper>
      </Flex>
  )
}
