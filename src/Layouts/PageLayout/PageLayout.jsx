
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

function PageLayout({children}) {
   const {pathname} = useLocation();
  return (
    <Flex>
        {/* side bar on left*/}
        {pathname !== '/auth' ?(
            <Box w ={{base: "720px", md:"240px"}}>
                <Sidebar />

            </Box>
        ) : null}

        <Box flex ={1} w={{ base: 'calc(100% - 70px)', md: "calc(100% - 240px)"}}>
            {children}
        </Box>
        
    </Flex>
    
  )
}

export default PageLayout
