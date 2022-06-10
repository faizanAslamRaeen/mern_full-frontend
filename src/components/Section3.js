import { Avatar } from '@chakra-ui/react'
import React from 'react'

const Section3 = () => {
  return (
  //   <Grid templateColumns='repeat(4, 1fr)'
  //   templateRows='repeat(4, 1fr)'
  //   gap={6}>
  //   <GridItem w='100%' h='200' bg='blue.500' />
  //   <GridItem w='100%' h='400' bg='blue.500' />
  //   <GridItem w='100%' h='500' bg='blue.500' />
  //   <GridItem w='100%' rowSpan={"auto"} h='600' bg='blue.500' />
  //   <GridItem w='100%' h='600' bg='blue.500' />
  //   <GridItem w='100%' h='500' bg='blue.500' />
  //   <GridItem w='100%' h='400' bg='blue.500' />
  //   <GridItem w='100%' h='200' bg='blue.500' />
  // </Grid>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 gap-3">
      <div class="lg:w-1/4 rounded-lg hover:translate-x-3 md:w-1/2 p-4 w-full   bg-slate-200">
        <a class="block relative h-48 rounded overflow-hidden">
          <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg md:w-1/2 p-4 w-full bg-slate-200">
        <a class="block relative h-48 rounded overflow-hidden">
        <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
           <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
           <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
           <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
           <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 rounded-lg bg-slate-200 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
           <center>
          <Avatar />
          </center>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Section3