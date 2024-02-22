import { Box,Text, Flex, VStack } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import SuggestedHeader from './SuggestedHeader';

const SuggestedUsers = () => {
  return (
   <VStack py={8} px={6} gap={4} >
    <SuggestedHeader />
    <Flex justifyContent={'space-between'} alignContent={'center'} w={'full'} >
        <Text fontSize = {'12'} fontWeight ={'bold'} color ={'gray.500'} _hover={{color:'gray.400'}}  cursor={'pointer'} >
            Suggested user
        </Text>
        <Text>see all user</Text>.git
    </Flex>
    <SuggestedUsers  name='Dan Abrahmov'   followers = {1195} src='https://bit.ly/dan-abramov' />
    <SuggestedUsers name='Kola Tioluwani'followers = {756}   src='https://bit.ly/tioluwani-kolawole'/>
    <SuggestedUsers name='Kent Dodds' followers = {556}  src='https://bit.ly/kent-c-dodds' />
    <SuggestedUsers name='Ryan Florence' followers = {685} src='https://bit.ly/ryan-florence' />

    <Box fontSize={12} color = {'gray.500'} mt ={5}  >
        &;C 2024 Built By{' '}
        <Link href = 'https://github.com/Zaid-khan123' target='_blank' color='blue.500' fontSize ={14}>
            Zaid khan
        </Link>
    </Box>

   </VStack>
  );
};

export default SuggestedUsers
