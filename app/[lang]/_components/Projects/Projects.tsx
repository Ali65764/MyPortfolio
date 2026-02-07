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
import { getDictionary } from '../../dictionaries'

interface ProjectsProps {
  lang: "en" | "az" | "ru"
}

const Projects = async ({ lang }: ProjectsProps) => {
  const dict = await getDictionary(lang)
  return (
    <div className='container mx-auto select-none' id='projects'>
      <h2 className='text-3xl lg:text-4xl dark:text-[#f0f1ef] text-center font-bold'>{dict.portfolio.myprojects}</h2>
      <div className='flex items-stretch lg:flex-row flex-col gap-5 mt-10 lg:mx-0 mx-2'>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-white dark:bg-[#272730] dark:text-white border-[#33412f] dark:border-2 border-0 shadow-lg">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img loading='lazy'
            src="/product.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>{dict.portfolio.productsapp}</CardTitle>
            <CardDescription className='h-24'>
              <div className='mt-3'>
                {dict.portfolio.descriptionp}
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://product-reducer.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />{dict.portfolio.live}</Link>
            <Link href='https://github.com/Ali65764/ProductReducer' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />{dict.portfolio.view}</Link>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0 dark:bg-[#272730] bg-white dark:text-white border-[#33412f] dark:border-2 border-0 shadow-lg">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img loading='lazy'
            src="/movie.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>{dict.portfolio.movieapp}</CardTitle>
            <CardDescription className='h-24'>
              <div className='mt-3'>
                {dict.portfolio.descriptionm}
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://movie-virid-alpha.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />{dict.portfolio.live}</Link>
            <Link href='https://github.com/Ali65764/Movie' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />{dict.portfolio.view}</Link>
          </CardFooter>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm pt-0 dark:bg-[#272730] bg-white dark:text-white border-[#33412f] dark:border-2 border-0 shadow-lg">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img loading='lazy'
            src="/image.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle className='text-xl'>{dict.portfolio.crudsystem}</CardTitle>
            <CardDescription className='h-24 mt-3'>
              <div className='mt-3'>
                {dict.portfolio.descriptionc}
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-between mt-4'>
            <Link href="https://crud-fire-base-eta.vercel.app" className="w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500">
              <Eye />{dict.portfolio.live}</Link>
            <Link href='https://github.com/Ali65764/Crud-FireBase' className='w-full flex items-center gap-1 hover:text-[#a2f549] transition duration-500'>
              <Github />{dict.portfolio.view}</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Projects