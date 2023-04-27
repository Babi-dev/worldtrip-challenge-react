import { Flex, Image } from '@chakra-ui/react'

import LogoImg from '../assets/img/Logo.png'

const Header = () => {
  return (
    <Flex as='header' direction='row' justify='center'>
      <Image src={LogoImg} alt="Logo" p={4} />
    </Flex>
  )
}

export default Header