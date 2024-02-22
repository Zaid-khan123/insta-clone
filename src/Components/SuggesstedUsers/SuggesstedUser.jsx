import { VStack } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import { useState } from 'react'

const SuggestedUser = ({name, followers , Avatar}) => {
  const[isFollowed, setIsFollowed] = useState(false)
  return (
   <>
   <Flex  justifyContent = {'center'} alignItems={'center'} w ={'full'}>
    <Flex alignItems={'center'} gap={2}>
      <Avatar  src ={Avatar} name ={name} size ={'md'}   />
      <VStack  spacing={2} alignItems={'flex-start'}   >
   <Box  fontSize = {12} fontWeight = {'bold'}   >
      {name}
   </Box>
   <Box  fontSize ={11} color = {'gray.500'} >
    {followers} followers
   </Box>

      </VStack>
    </Flex>
    <Box        
    
     fontSize ={12}
     p ={0}
     bg ={'transparent'}
     fontWeight={'bold'}
     color = {'blue.400'}
     _hover = {{color:"white"}}
     onClick = {() => setIsFollowed(!isFollowed) }

    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Box>

   </Flex>
   
   </>
  )
}

export default SuggestedUser
