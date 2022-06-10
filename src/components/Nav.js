import { Avatar, Box, Button, Img, Stack } from '@chakra-ui/react'
import React from 'react'
import logo from '../images/logo.jpg'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const nevigate = useNavigate();
    const login=()=>{
        nevigate("/login")
    }
  return (
//     <Box className=" flex row  justify-between ">
//           <Box className='flex row pl-8 '>
//               <Img height={"50"}  width={"auto"} src ={logo}/><FaSearch className='mt-3'/>
//           </Box>

//     <Stack direction='row' spacing={4} pr={"8"}>
//   <Avatar mt={"3"} w={"5"} h={"5"}/>
//   <Button colorScheme={"blue"}  w={"20"}  mt={"auto"} onClick={login} className='  h-6 w-16'>login</Button>
  
// </Stack>
// </Box>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
           <Box className='flex row pl-8 '>
            <Img height={"50"}  width={"auto"} src ={logo}/><FaSearch className='mt-3'/>
          </Box>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <Stack direction='row' spacing={4} pr={"8"}>
   <Avatar mt={"3"} w={"5"} h={"5"}/>
   <Button colorScheme={"blue"}  w={"20"}  mt={"auto"} onClick={login} className='  h-6 w-16'>login</Button>
  
 </Stack>
  </div>
</header>
  )
}

export default Nav