import React from 'react'
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
const AddBusinessAcc = () => {
  const [allValues, setAllValues] = useState({
    name:"",
    email:"",
    password:"", 
    accountType:"Business"
});
const businessUser = ()=>{
  let payload = allValues;
  axios.post("http://localhost:4000/api/v1/user",payload).then((res)=>{
    const dat = res.data
     console.log(dat,"hello")
   }).catch((err)=>{
     console.log(err);
   })

}

const changeHandler = e =>{
  setAllValues({...allValues, [e.target.name]: e.target.value})
}
  return (
    <>
    <Box h={"600"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <VStack>
            <Text alignSelf={"flex-start"} className={"text-4xl text-bold text-blue-700"}>Register Business Account!</Text>
            <Text alignSelf={"flex-start"} className={"text-xl"}>For the purpose of Industry regulation,your details <Spacer/>are required.</Text>
            <Divider />
            <VStack >
            <FormControl isRequired >
                <FormLabel htmlFor='first-name' mt={"4"}>Your fullname</FormLabel>
                <Input id='your-name' placeholder='First name' name='name' onChange={changeHandler} />
                <FormLabel htmlFor='email-address' mt={"4"}>Enter email adderess</FormLabel>
                <Input id='email-address' placeholder='Email Your address' name='email' onChange={changeHandler}/>
                <FormLabel htmlFor='password' mt={"4"}>Create Password</FormLabel>
                <Input id='password' placeholder='Enter  Password' type={"password"} name='password' onChange={changeHandler} />
                <Checkbox defaultChecked mt={"4"}>I agree to term & conditions</Checkbox>
                <Button colorScheme='blue'mt={"4"} w={"100%"} onClick={businessUser}>Save & Continue</Button>
            </FormControl>
            </VStack>
        </VStack>
    </Box>
    
    </>
  )
}

export default AddBusinessAcc