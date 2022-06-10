import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaRegHandPointLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const JoinUs = () => {
    const navigate = useNavigate();
    const log=()=>{
        navigate("/login")
    }
    const business=()=>{
        navigate("/addbusiness")
    }
    const persnal=()=>{
        navigate("/addpersonal")
    }
  return (
      <>
      <Nav/>
      <Box h={"300"}>
    <VStack  gap={"2"} display={"flex"} flexDirection={"column"} alignItems="center" justifyContent={"center"}>
        <Text className='text-4xl font-bold text-blue-700'>Join Us</Text>
        <Text className=' font-semibold'>To being this journey,tell us what type of account</Text>
            <Text className=' font-semibold'>you'd be opening
        </Text>
        <VStack>
            <Box className=' shadow-xl cursor-pointer'  m={"4"} p={"8"} height={"140"} w={"auto"}>
                <HStack gap={"2"} onClick={persnal} >
                    <FaRegHandPointLeft size={"65"} className={" text-blue-700"} />
                    <VStack display={"flex"} flexDirection={"column"}>
                        <Text className=' font-bold  text-blue-700' alignSelf={"flex-start"}>individual</Text>
                        <Text className=' ' alignSelf={"flex-start"}>Personal account to manage all you
                        
                        <Spacer/>
                            activities
                            </Text>  
                    </VStack>

                </HStack>
            </Box>
            <Box className=' shadow-xl cursor-pointer' onClick={business} m={"4"} p={"8"} height={"140"} w={"auto"}>
                <HStack gap={"2"}>
                    <FaRegHandPointLeft size={"65"} className={" text-blue-700"}/>
                    <VStack  display={"flex"} flexDirection={"column"}>
                        <Text className=' font-bold text-blue-700 ' alignSelf={"flex-start"}>Business</Text>
                        <Text alignSelf={"flex-start"}>Own belong to a company,this is
                            <Spacer/>
                            for you
                        </Text>
                    </VStack>

                </HStack>
            </Box>
        </VStack>
        <Text>Already have an account?<span onClick={log}  className={"text-blue-700 cursor-pointer"}>Sign In</span></Text>

    </VStack>
    </Box>
    </>
  )
}

export default JoinUs