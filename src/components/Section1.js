import { Box, Button, Container, Img, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import { FaWhatsapp, FaLocationArrow } from 'react-icons/fa'
import React from 'react'


import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'

import p5 from '../images/p5.jpg'

import p1 from '../images/p1.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'






const Section1 = () => {
    const navigate = useNavigate();

    const initMap =()=>{
        navigate("/map")
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <>

            <Box className='flex  justify-center items-center'>
                <VStack gap={"8"} >
                    <Text className='text-4xl font-roboto font-bold text-blue-900'>Let's Showcase</Text>
                    <Text>Bring your product online in now easy and breezy <Spacer />
                        You have somthing to sell,show is online..
                    </Text>
                    <Button bgColor={"blue.500"} rounded={"full"} w={"36"} color={"white"}>Get Started</Button>
                </VStack>
            </Box>
            <Container className='mt-10'>
                <Slider {...settings}>
                    <Box boxSize='sm' >
                        <Img height={"350"} width={"auto"} src={p1} />
                    </Box>
                    <Box boxSize='sm'>
                        <Img height={"350"} width={"auto"} src={p2} />
                    </Box>
                    <Box boxSize='sm'>
                        <Img height={"350"} width={"auto"} src={p3} />
                    </Box>

                    <Box boxSize='sm'>
                        <Img height={"350"} width={"auto"} src={p5} />
                    </Box>

                </Slider>
            </Container>



            <header class="text-gray-600 w-full body-font bg-slate-200">
                <div class="container mx-auto flex flex-wrap p-5  flex-col justify-around md:flex-row items-center">

                    <VStack className=' mt-8' gap={"4"}>
                        <Text className='text-xl text-gray-600 '>Faizan</Text>
                        <Text className='text-2xl text-gray-600'>NIKE</Text>
                        <Text className='text-x-sm text-gray-600'>Good Shoes</Text>
                    </VStack>


                    <Box my={"8"} gap={"4"}>
                        <Text className=' text-xl text-gray-600'>Rs.1000.00</Text>
                        <Button alignSelf={"center"} justifySelf={"center"} my={"8"} width={"100%"}  colorScheme={"blackAlpha"} >Click to know more</Button></Box>
                    <VStack>
                        <Stack gap='4' mt={"4"} bgColor={"gray-300"}>
                            <Box>
                                <a href='https://wa.me/+919084632266?text=This%20is%20a%20test' target="_blank">
                                    <Button colorScheme={"whatsapp"} width={"100%"}   ><FaWhatsapp color='white' />
                                        whatsapp</Button>
                                </a>

                                <Text className='text-x-sm text-gray-600'>Connect on whatsapp</Text>
                            </Box>
                            <Box>
                                <Button width={"100%"} onClick={initMap} ><FaLocationArrow />Search Location</Button>

                                <Text className='text-x-sm text-gray-600'>Look for Direaction</Text>
                            </Box>
                        </Stack>
                    </VStack>
                </div>
            </header>
        </>
    )
}

export default Section1