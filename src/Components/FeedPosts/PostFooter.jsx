import { Button, Flex, InputGroup } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { InputRightElement } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { CommentLogo, NotificationsLogo } from '../../assets/Constants';

function PostFooter({username}) {
  const[liked , setLiked] = useState('false');
  const[likes, setlikes] = useState('1000');
  const handleLike = () =>{
    if (liked) {
     setLiked(false)
     setlikes(likes-1)
    }
    else{
      setLiked(true)
      setlikes(likes + 1)
    }
  };
  
  return (
    <div>
      <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box   onClick = {handleLike}> {!liked ? <NotificationsLogo />: <UnlikeLogo /> }</Box>
        <Box cursor={'pointer'} fontSize={18}  ><CommentLogo /></Box>
      </Flex>
      
      <Text fontWeight ={600}     fontSize ={'sm'}>
        {likes} likes
      </Text>
      <Text  fontSize={'sm'} fontWeight={700}   >
        {username}{' '}
        <Text as={'span'}   fontSize ={'sm'} fontWeight ={700} >
        Feeling good
      </Text>
      </Text>
      
      <Text fontSize={'sm'} color={'gray'}>
        View all 1,000 commemnts
      </Text>
      <Flex alignItems={'center'} justifyContent={'space-between'} gap={2}>
        <InputGroup>
        <Input  variant ={'flush'} placeholder = 'add comments...' fontSize ={14}   />
        <InputRightElement>
         <Button  fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'}
           _hover={{color:'white'}}
           bg={'transparent'}
         >
          Post
         </Button>
       </InputRightElement>
        
        </InputGroup>
      </Flex>
      </Box>
    </div>
  )
}

export default PostFooter
