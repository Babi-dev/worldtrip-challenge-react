import { createServer, Response, ActiveModelSerializer } from 'miragejs'

import europaContinent from "@/assets/img/europa/ContinentImage.jpg"
import europa from "@/assets/img/europa/Background.jpg"
import londres from "@/assets/img/europa/londres.jpg"
import paris from "@/assets/img/europa/paris.jpg"
import roma from "@/assets/img/europa/roma.jpg"
import praga from "@/assets/img/europa/praga.jpg"
import amsterda from "@/assets/img/europa/amsterda.jpg"
import reinoUnido from "@/assets/img/europa/reinoUnido.png"
import franca from "@/assets/img/europa/franca.png"
import italia from "@/assets/img/europa/italia.png"
import republicaTcheca from "@/assets/img/europa/republicaTcheca.png"
import holanda from "@/assets/img/europa/holanda.png"

import asiaContinent from "@/assets/img/asia/ContinentImage.jpg"
import asia from "@/assets/img/asia/Background.jpg"
import bangkok from "@/assets/img/asia/bangkok.jpg"
import cingapura from "@/assets/img/asia/cingapura.jpg"
import toquio from "@/assets/img/asia/toquio.jpg"
import hongKong from "@/assets/img/asia/hongKong.jpg"
import seul from "@/assets/img/asia/seul.jpg"
import tailandia from "@/assets/img/asia/tailandia.png"
import singapura from "@/assets/img/asia/singapura.png"
import japao from "@/assets/img/asia/japao.png"
import china from "@/assets/img/asia/china.png"
import coreiaSul from "@/assets/img/asia/coreiaSul.png"

type Continent = {
  id: number;
  title: string;
  subtitle: string;
  background: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
        application: ActiveModelSerializer,
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/continents', () => {
        const continents: Continent[] = [
          {
            id: 1,
            title: 'Europa',
            subtitle: 'O continente mais antigo.',
            background: europaContinent,
          },
          {
            id: 2,
            title: 'Ásia',
            subtitle: 'O continente mais populoso.',
            background: asiaContinent,
          }
        ]

        return new Response(200, {},{ continents })
      })

      this.get('/continents/:id', (schema, request) => {
        let id = Number(request.params.id)

        const continents: any = [
          {
            id: 1,
            name: 'Europa',
            subtitle: 'O continente mais antigo.',
            description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            background: europa,
            countries: 50,
            languages: 60,
            cities: 27,
            citiesList: [
              { id: 1, flag: reinoUnido, image: londres, city: 'Londres', country: 'Reino Unido' },
              { id: 2, flag: franca, image: paris, city: 'Paris', country: 'França' },
              { id: 3, flag: italia, image: roma, city: 'Roma', country: 'Itália' },
              { id: 4, flag: republicaTcheca, image: praga, city: 'Praga', country: 'República Tcheca' },
              { id: 5, flag: holanda, image: amsterda, city: 'Amsterdã', country: 'Holanda' },
            ],
          },
          {
            id: 2,
            name: 'Ásia',
            subtitle: 'O continente mais populoso.',
            description: 'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.',
            background: asia,
            countries: 49,
            languages: 2300,
            cities: 41,
            citiesList: [
              { id: 1, flag: tailandia, image: bangkok, city: 'Bangkok', country: 'Tailândia' },
              { id: 2, flag: singapura, image: cingapura, city: 'Cingapura', country: 'Singapura' },
              { id: 3, flag: japao, image: toquio, city: 'Tóquio', country: 'Japão' },
              { id: 4, flag: china, image: hongKong, city: 'Hong Kong', country: 'China' },
              { id: 5, flag: coreiaSul, image: seul, city: 'Seul', country: 'Coreia do Sul' },
            ],
          }
        ]

        const continent = continents.find((e: any) => e.id === id)

        return new Response(200, {},{ continent })
      })

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}