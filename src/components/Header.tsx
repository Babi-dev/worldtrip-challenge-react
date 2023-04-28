import { Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import LogoImg from '../assets/img/Logo.png'

const Header = () => {
  return (
    <Flex as='header' direction='row' justify='center'>
      <Link to='/' >
        <Image src={LogoImg} alt="Logo" p={4} />
      </Link>
    </Flex>
  )
}

export default Header