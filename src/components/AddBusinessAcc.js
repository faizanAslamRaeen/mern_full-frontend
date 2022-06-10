import React from 'react'
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddBusinessAcc = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  



  return (
    <>
    <Box h={"600"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <VStack>
            <Text alignSelf={"flex-start"} className={"text-4xl text-bold text-blue-700"}>Register Business Account!</Text>
            <Text alignSelf={"flex-start"} className={"text-xl"}>For the purpose of Industry regulation,your details <Spacer/>are required.</Text>
            <Divider />
            <VStack >
            <form  onSubmit={handleSubmit((data)=>{
              
              axios.post("http://localhost:4000/api/v1/user",data,{userType:"Business"}).then((res)=>{
                const dat = res.data
                 console.log(dat,"hello")
               }).catch((err)=>{
                 console.log(err);
               })
            })}  >
                <FormLabel htmlFor='first-name' mt={"4"}>Your fullname</FormLabel>
                <Input id='your-name' placeholder='First name'   {...register("name", {required:"This is required"})}  />
                <p className='text-red-600'>{errors.name?.message}</p>
                <FormLabel htmlFor='email-address' mt={"4"}>Enter email adderess</FormLabel>
                <Input id='email-address' placeholder='Email Your address'   {...register("email", {required:"This is required"})}/>
                <p className='text-red-600'>{errors.name?.message}</p>
                <FormLabel htmlFor='password' mt={"4"}>Create Password</FormLabel>
                <Input id='password' placeholder='Enter  Password' type={"password"}   {...register("password", { required: "This is Required",minLength:{required:"This is Required",value:8,message:"min Length 8 character"} })}  />
                <p className='text-red-600'>{errors.name?.message}</p>
                <Checkbox defaultChecked mt={"4"}>I agree to term & conditions</Checkbox>
                
                <Input bgColor={"blue"} mt={"4"} color={"white"} type="submit"  value={"Save & Continue"}  />
             </form>
          
            </VStack>
        </VStack>
    </Box>
    
    </>
  )
}

export default AddBusinessAcc