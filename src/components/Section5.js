import { Box, Button, Text, } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section5 = () => {
  const nevigate = useNavigate();
  const register = () => {
    nevigate("/signup")
  }
  return (
     <Box h={"800"}  display={"flex"} alignItems={"center"}  justifyContent={"center"}>
    <section class="text-gray-600 body-font" >
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

        <div class="text-center lg:w-2/3 w-full">
          <span class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Set Up Your Account for</span>

          <div class="flex justify-center">
            <Text className='text-9xl font-bold text-slate-800'>FREE</Text>

          </div>
          <Button rounded={"full"} w={"100%"} mt={"8"} onClick={register} colorScheme={"blue"}>Sign Up</Button>
        </div>
      </div>
    </section>
    </Box>
  )
}

export default Section5