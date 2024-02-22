import { Button, Flex, Image, Input, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const [isLogin, setisLogin] = useState(true);
  const  navigate =  useNavigate();
  const [input, setInput] = useState({
    email: '',
    Password: '',
    confirmPassword:''
  
  });

  const handleAuth = () =>{
    if(!input.email || !input.Password){
      alert("Fill all the fields")
      return;
    }
    navigate('/');
    
  };
  return (
    <div>
     <Box border = {"1px solid grey"} borderRadius = {4} padding = {5}  >
        <VStack spacing={4}>
          <Image src='/logo.png' h = {24} cursor={'pointer'} alt='insta logo' />
          <Input placeholder='Email'fontSize={14} type='email'
          
          value = {input.email}
          onChange={(e) => setInput({...input, email:e.target.value})}
          />
           <Input  placeholder='Password'fontSize={14} type='Password' 
            value = {input.Password}
            onChange={(e) => setInput({...input, Password:e.target.value})}
           
           />
           {!isLogin ? (<Input    placeholder='Confirm password' 
           value = {input.confirmPassword}
           onChange={(e) => setInput({...input, confirmPassword:e.target.value})}
           fontSize={14}  type='Confirm password' />) : null}
           <Button w={'full'} colorScheme='blue' fontSize={14} size={'sm'} onClick={handleAuth}>
            {isLogin ? 'Log in' : "Sign up"}
           </Button>
           <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
             OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />           
           </Flex>
           <Flex>
            <Image src='/google.png' w={5} alt='Googl logo' />
            <Text mx='2' color={'blue.500'}>Log in with google</Text>
           </Flex>
           
        </VStack>
     </Box>
     <Box border = {"1px solid grey"} borderRadius = {4} padding = {5} >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
          {isLogin ? 'Dont have account?': "Already have account?"}
        </Box>
        <Box onClick={() =>setisLogin(!isLogin)} color={'blue.500'} cursor={"pointer"}>
          {isLogin ? "Sign up" : "Log in"}
        </Box>
      </Flex>
     </Box>
     


    </div>
  )
}

export default AuthForm
