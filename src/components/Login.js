import React from 'react'
import { Box, Button, Center, FormControl, HStack, Img, Input, Stack, Text, VStack } from '@chakra-ui/react'
import Tv from "../images/logo.jpg"  
import google from "../images/google.jpg"  
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'
import { useForm } from "react-hook-form";


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
 



  const createAcc = ()=>{
    navigate("/signup")
  }
  const Forgot = ()=>{
    navigate("/forgotpass")
  }
  return (

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
      <form  onSubmit={handleSubmit((data)=>{
              navigate("/user")
              axios.post("http://localhost:4000/api/v1/user",data).then((res)=>{
                const dat = res.data
                 console.log(dat)
               }).catch((err)=>{
                 console.log(err);
               })
            })}  >
                
                
                <Input id='email-address' mt={"4"} placeholder='Email Your address'   {...register("email", {required:"This is required"})}/>
                <p className='text-red-600'>{errors.name?.message}</p>
                
                <Input id='password' mt={"4"} placeholder='Enter  Password' type={"password"}   {...register("password", { required: "This is Required",minLength:{required:"This is Required",value:8,message:"min Length 8 character"} })}  />
                <p className='text-red-600'>{errors.name?.message}</p>
                
                
                <Input bgColor={"blue"} mt={"4"} color={"white"} type="submit"  value={"Save & Continue"}  />
             </form>
             </VStack>
             
            
      </div>
    </div>
    
  </div>
  
</section>
<center  >
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
    </center>
</>  
  )
}

export default Login