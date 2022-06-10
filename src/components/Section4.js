import {  HStack,   Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Tv from "../images/tv.png"

const Section4 = () => {
  return (
    // <HStack h={"600"}>
    //     <Stack className='flex flex-row justify-center items-center m-auto'>
    //     <Box>
    //     <Img height={"250"} width={"auto"}  src={Tv}/>
    //     </Box>
    //     </Stack>
    //     <VStack className='flex flex-col' gap={"4"}>
    //         <Text alignSelf={"flex-start"} className='text-4xl font-bold'>How it works</Text>
    //         <HStack  alignSelf={"flex-start"} >
    //         <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>1</Tag>
    //         <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
    //         <Text className='text-xl font-bold'>Sign Up</Text>
    //         <Text className='text-x-sm'>Click on the sign up button Choose business account to set up a shop</Text>
    //         </VStack>
    //         </HStack>
    //         <HStack alignSelf={"flex-start"}>
    //         <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>2</Tag>
    //         <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
    //         <Text className='text-xl font-bold'>Create Business Account</Text>
    //         <Text className='text-x-sm'>Enter All Details and Varify Account</Text>
    //         </VStack>
    //         </HStack>
    //         <HStack alignSelf={"flex-start"}>
    //         <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>3</Tag>
    //         <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
    //         <Text className='text-xl font-bold'>Start Uploading Videos</Text>
    //         <Text className='text-x-sm'>Go the profile and choose the upload videos.Start Showcasing your products</Text>
    //         </VStack>
    //         </HStack>
    //     </VStack>
    // </HStack>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Tv}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How it works</h1>
      <HStack gap={"2"} mt={"4"}>
             <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>1</Tag>
             <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
             <Text className='text-xl font-bold'>Sign Up</Text>
             <Text className='text-x-sm'>Click on the sign up button Choose business account to set up a shop</Text>
             </VStack>
             </HStack>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
        <HStack gap={"2"} mt={"4"}>
             <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>2</Tag>
             <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
             <Text className='text-xl font-bold'>Create Business Account</Text>
             <Text className='text-x-sm'>Enter All Details and Varify Account</Text>
             </VStack>
             </HStack>
        </div>
        {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </div>
      {/* <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
      <div class="flex lg:flex-row md:flex-col">
      <HStack gap={"2"} mt={"4"}>
            <Tag bgColor={"blue.700"} color={"white"} rounded={"full"} textAlign={"center"} fontSize={"20"} h={"10"} w={"8"}>3</Tag>
           <VStack justifyContent={"flex-start"} alignItems={"flex-start"} display={"flex"} flexDirection={"column"}>
           <Text className='text-xl font-bold'>Start Uploading Videos</Text>
            <Text className='text-x-sm'>Go the profile and choose the upload videos.Start Showcasing your products</Text>
            </VStack>
            </HStack>
      </div>
    </div>
  </div>
</section>
  )
}

export default Section4