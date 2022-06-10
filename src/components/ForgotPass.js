import { Button, FormControl, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

const ForgotPass = () => {
    const [allValues, setAllValues] = useState({
        email:"",
         
    });
    const forgotPass = ()=>{
      let payload = allValues;
    
    }
    
    const changeHandler = e =>{
      setAllValues({...allValues, [e.target.name]: e.target.value})
    }
  return (
    // <div>
    //      <VStack className='flex flex-col'  p={"12"}>
    //     <Text alignSelf={"flex-start"} className='text-4xl font-bold'>Log in</Text>
    //     <Text alignSelf={"flex-start"} className=' font-bold'>please login using account detail below</Text>
    //      <VStack  >
    //         <FormControl isRequired >
                
                
    //             <Input id='email-address' mt={"4"} placeholder='Email Your address' name='email' onChange={changeHandler} />
            
    //             {/* <Input id='password' mt={"4"} placeholder='Enter  Password' name='password' onChange={changeHandler} /> */}
                
    //             <Button colorScheme='blue'mt={"4"} w={"100%"} onClick={forgotPass}>Submit</Button>
    //         </FormControl>
    //         </VStack>
    //         </VStack>
    // </div>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div class="text-center lg:w-2/3 w-full">
    <Text alignSelf={"flex-start"} className='text-4xl font-bold'>Forgot Password</Text>
    <Text alignSelf={"flex-start"} className=' font-bold'>please Enter Your Email  below</Text>
      <div class="flex justify-center">
      <VStack  >
             <FormControl isRequired >
                
                
                 <Input id='email-address' mt={"4"} placeholder='Email Your address' name='email' onChange={changeHandler} />
            
                 {/* <Input id='password' mt={"4"} placeholder='Enter  Password' name='password' onChange={changeHandler} /> */}
                   
                 <Button colorScheme='blue'mt={"4"} w={"100%"} onClick={forgotPass}>Submit</Button>
             </FormControl>
             </VStack>
      </div>
    </div>
  </div>
</section>
  )
}

export default ForgotPass