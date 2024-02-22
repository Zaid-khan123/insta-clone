import React from 'react'
import { Avatar } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { CreatePostLogo,InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/Constants';
const Sidebar = () => {
  const sidebarItems = [
  {

      icons: <AiFillHome /> ,
      text: "Home",
      link: "/",
  },
  
  {

    icons:<SearchLogo />  ,
    text: " Search",
    
},
{

  icons:< NotificationsLogo />  ,
  text: "Notification ",
  
},

{
  icons:<CreatePostLogo/>,
  text:"Create",

},

{
  icons:<Avatar  size = {"sm"}    name='Dan Abrahmov' src='/profilepic.png' />,
  text: "Profile",
  link:"/asaprogrammer"

}
]
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<InstagramLogo />
				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<InstagramMobileLogo />
				</Link>
        <Flex
           direction={'column'} gap={5} cursor='pointer'>
             {sidebarItems.map((item, index) => (
               <Tooltip 
               key={index}
               hasArrow
               label={item.text}
               placement='right'
               ml={1}
				      openDelay={500}
              display={{ base: "block", md: "none" }}
               >
                <Link   display={'flex'}  
                  to ={item.link || null}
                  as={RouterLink}
                  alignItems={'center'}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
						       borderRadius={6}
                   p={2}
						      w={{base:10, md:'full'}}
						     justifyContent={{ base: "center", md: "flex-start" }}
                >
                {item.icons}
                <Box display={{base:'none', md:'block'}}>
                  {item.text}
                </Box>
                </Link>
               </Tooltip>
             ))}

           </Flex>

				{/* LOGOUT */}
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
					
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;