import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@pages/components/ui/card"
import Link from 'next/link'
import { Eye, Github } from 'lucide-react'
const Projects = () => {
  return (
    <div className='container mx-auto' id='projects'>
      <h2 className='text-3xl text-[#f0f1ef] text-center'>My Projects</h2>
      <div className='flex items-stretch lg:flex-row flex-col gap-5 mt-10 lg:mx-0 mx-2'>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-[#272730] text-white border-[#33412f] border-2">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/product.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>Products App</CardTitle>
            <CardDescription className='h-24'>
              <div className='mt-3'>
               A user-oriented products platform where users can browse products, search items, add them to favorites, and simulate purchasing with a smooth and responsive interface.
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://product-reducer.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />Live Demo</Link>
            <Link href='https://github.com/Ali65764/ProductReducer' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />View on Github</Link>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-[#272730] text-white border-[#33412f] border-2 ">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/movie.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>Movie App</CardTitle>
            <CardDescription className='h-24'>
              <div className='mt-3'>
                A movie search application that fetches real-time data from an API, allowing users to browse, search, and view movie details with a clean and responsive UI.
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://movie-virid-alpha.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />Live Demo</Link>
            <Link href='https://github.com/Ali65764/Movie' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />View on Github</Link>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-[#272730] text-white border-[#33412f] border-2 ">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/image.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>Crud System</CardTitle>
            <CardDescription className='h-24 mt-3'>
              <div className='mt-3'>
               A CRUD management system that allows users to create, read, update, and delete data through a clean and interactive user interface.
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://crud-fire-base-eta.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />Live Demo</Link>
            <Link href='https://github.com/Ali65764/Crud-FireBase' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />View on Github</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Projects