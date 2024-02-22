import { Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { Box} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import AuthForm from '../../Components/AuthForm/AuthForm';




const AuthPage = () => {
  return (
    <div>
  <Flex maxH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>

    <Container  maxW={"container.md"}  padding={0}  >
    <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
    <Box display={{base: "none", md:"block"}}>
        <Image src = 'auth.png' alt = 'phon image' />
      </Box>
      <VStack spacing={4} align={'stretch'}>
        <AuthForm />

       <Box textAlign={'center'}>Get the app.</Box>
       <Flex gap={5} justifyContent={'center'}>
        <Image src='/playstore.png' h ={"10"} alt = "playstore logo"></Image>
        <Image src='/microsoft.png' h ={"10"} alt = "microsoft logo"></Image>
       </Flex>
      </VStack>

    </Flex>
      

      
    </Container>
  </Flex>
    </div>
  )
}

export default AuthPage;