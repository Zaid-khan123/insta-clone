import { Avatar, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
function PostHeader({username, avatar}) {
  return (
    <div>
     <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={'2'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar  src={avatar} alt ='user profile' size={'sm'}  />
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>
          {username} 
          <Box color ={ 'gray.500' } > . 1W</Box>
        </Flex>
      </Flex>
      <Box>
        <Text
        fontSize ={12}
        color={'blue.500'}
        fontWeight ={'bold'}
        _hover ={{
          color:'white',
        }}
        transition ={'0.2s ease-in-out' }
        
        >Unfollow</Text>
      </Box>
     </Flex>
    </div>
  )
}

export default PostHeader

