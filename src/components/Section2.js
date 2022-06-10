import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Section2 = () => {
  return (
    // <Box className='flex flex-col justify-center mt-12 items-center' gap={"20"}>
    //     <VStack gap={"4"}>
    //         <Text className='text-5xl  font-bold'>Happy to Showcase</Text>
    //         <Text className=''>All the local stores are now on showcase.Grow your business by <Spacer/>
    //         <Text className=''>Show casing your products online</Text>
    //         </Text>
    //         <HStack gap={"12"}>
    //             <VStack gap={"2"}>
    //                 <Text className='text-6xl font-bold'>5K</Text>
    //                 <Text  className='text-xl font-semi-bold'>New Visitors</Text>
    //             </VStack>
    //             <VStack gap={"2"}>
    //                 <Text className='text-6xl font-bold'>270</Text>
    //                 <Text className='text-xl font-semi-bold'>Accounts</Text>
    //             </VStack>
    //             <VStack gap={"2"}>
    //                 <Text className='text-6xl font-bold'>100%</Text>
    //                 <Text className='text-xl font-semi-bold'>Business Growth</Text>
    //             </VStack>
    //         </HStack>
    //     </VStack>
    //     <VStack gap={"3"}>
    //     <Text className='text-4xl font-bold'>New Stores on Showcase</Text>
    //     <Text className='text-xl'>checkout the stores that recently joined</Text>
    //     </VStack>
    // </Box>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/3 w-1/2">
          <VStack gap={"4"}>
            <Text className='text-5xl  font-bold'>Happy to Showcase</Text>
            <Text className='text-xl font-semi-bold'>All the local stores are now on showcase.</Text> 
           <Text className='text-xl font-semi-bold'> Grow your business by</Text>
            <Text className='text-xl font-semi-bold'>Show casing your products online</Text>
            
            </VStack>
      </div>
      <div class="p-4 sm:w-1/3 w-1/2">
                <VStack gap={"4"}>
                 <VStack gap={"2"}>
                    <Text className='text-6xl font-bold'>5K</Text>
                    <Text  className='text-xl font-semi-bold'>New Visitors</Text>
                </VStack>
                 <VStack gap={"2"}>
                     <Text className='text-6xl font-bold'>270</Text>
                     <Text className='text-xl font-semi-bold'>Accounts</Text>
                 </VStack>
                 <VStack gap={"2"}>
                   <Text className='text-6xl font-bold'>100%</Text>
                     <Text className='text-xl font-semi-bold'>Business Growth</Text>
                 </VStack>
                 </VStack>
             
      </div>
      <div class="p-4 sm:w-1/3 w-1/2">
      
         <VStack gap={"6"}>
         <Text className='text-4xl font-bold'>New Stores on Showcase</Text>
         <Text className='text-xl'>checkout the stores that recently joined</Text>
         </VStack>
      </div>
      {/* <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div> */}
    </div>
  </div>
</section>
  )
}

export default Section2