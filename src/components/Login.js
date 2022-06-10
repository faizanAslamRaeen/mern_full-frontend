import React from 'react'
import { Box, Button, FormControl, HStack, Img, Input, Stack, Text, VStack } from '@chakra-ui/react'
import Tv from "../images/logo.jpg"  
import google from "../images/google.jpg"  
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'


const Login = () => {
  const navigate = useNavigate();
  const [allValues, setAllValues] = useState({
    email:"",
    password:"", 
});
const login = ()=>{
  navigate("/user")
  let payload = allValues;
  axios.post("http://localhost:4000/api/v1/login",payload).then((res)=>{
   const dat = res.data
    console.log(dat,"hello")
  }).catch((err)=>{
    console.log(err);
  })

}

const changeHandler = e =>{
  setAllValues({...allValues, [e.target.name]: e.target.value})
}
  const createAcc = ()=>{
    navigate("/signup")
  }
  const Forgot = ()=>{
    navigate("/forgotpass")
  }
  return (
//     <HStack h={"600"}>
//     <Stack className='flex flex-row justify-center items-center m-auto'>
//     <Box>
//     <Img height={"250"} width={"auto"}  src={Tv}/>
//     </Box>
//     </Stack>
//     <VStack className='flex flex-col'  p={"12"}>
//         <Text alignSelf={"flex-start"} className='text-4xl font-bold'>Log in</Text>
//         <Text alignSelf={"flex-start"} className=' font-bold'>please login using account detail below</Text>
//         <VStack  >
//             <FormControl isRequired >
                
                
//                 <Input id='email-address' mt={"4"} placeholder='Email Your address' name='email' onChange={changeHandler} />
            
//                 <Input id='password' mt={"4"} placeholder='Enter  Password' name='password' onChange={changeHandler} />
                
//                 <Button colorScheme='blue'mt={"4"} w={"100%"} onClick={login}>Sign In</Button>
//             </FormControl>
//             </VStack>
//             <Text className=' font-bold'>Or</Text>
//             <Box className=' shadow-xl' h={"8"} w={"35"}>
//                 <HStack  margin={"1"} >
//                  <Img src={google} h={"5"} w={"5"}/>
//                  <Text className=' text-sm'>Sign In</Text>
//                 </HStack>
//             </Box>
//             <Text className=' text-blue-700' onClick={Forgot}>Forgot Your Password</Text>
//             <Text >Don't have an account? <span className='cursor-pointer text-blue-700' onClick={createAcc}>Create Account</span></Text>
//     </VStack>
// </HStack>
<>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Tv}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Log in
      </h1>
      <p class="mb-8 leading-relaxed">please login using account detail below</p>
      <div class="flex justify-center">
      <VStack  >
             <FormControl isRequired >
                
                
                 <Input id='email-address' mt={"4"} placeholder='Email Your address' name='email' onChange={changeHandler} />
                             <Input id='password' mt={"4"} placeholder='Enter  Password' name='password' onChange={changeHandler} />
                
                 <Button colorScheme='blue'mt={"4"} w={"100%"} onClick={login}>Sign In</Button>
             </FormControl>
             </VStack>
             
            
      </div>
    </div>
    
  </div>
  <div  class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <Text className=' font-bold'>Or</Text>
             <Box className=' shadow-xl' h={"8"} w={"35"}>
                 <HStack  margin={"1"} >
                  <Img src={google} h={"5"} w={"5"}/>
                  <Text className=' text-sm'>Sign In</Text>
                 </HStack>
             </Box>
             <Text className=' text-blue-700 cursor-pointer' onClick={Forgot}>Forgot Your Password</Text>
             <Text >Don't have an account? <span className='cursor-pointer text-blue-700' onClick={createAcc}>Create Account</span></Text>
    </div>
</section>
</>  
  )
}

export default Login