import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { getDictionary } from '../../dictionaries'

interface AboutProps {
    lang: "en" | "az" | "ru"
}

const About = async ({ lang }: AboutProps) => {
    const dict = await getDictionary(lang)
    const logos = [
        { src: "/React.png", alt: "React logo" },
        { src: "/Next.png", alt: "Next.js logo" },
        { src: "/Js.png", alt: "JavaScript logo" },
        { src: "/Tailwind.png", alt: "Tailwind CSS logo" }
    ]
    return (
        <main className='container mx-auto select-none' id="about">
            <div className='bg-[#ffffff] dark:bg-[#272730] rounded-md mx-2 border-[#33412f] dark:border '>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='text-center md:text-left md:px-20 md:py-16 p-8'>
                        <Image
                            width={1200}
                            height={1600}
                            src="/me3.jpg"
                            alt='me'
                            className='w-auto md:h-[500px] h-[280px] sm:h-[480px] rounded-[20px] object-cover'
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 480px, 500px"
                        />
                    </div>
                    <div className='lg:w-1/2  w-full dark:text-white text-center lg:text-left mt-4 md:mt-0'>
                        <p className='text-xl'><code className='text-green-600 dark:text-[#a2f552]'>&lt;div&gt;</code>{dict.portfolio.header}<code className='text-green-600 dark:text-[#a2f552]'> &lt;/div&gt;</code></p>
                        <div className='mt-9'>
                            <h2 className='md:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-100'>Web Developer</h2>
                            <p className='mt-4 px-8 lg:px-0'>
                                <code className='text-green-600 dark:text-[#a2f552]'>&lt;span&gt;</code> {dict.portfolio.description}
                                <code className='text-green-600 dark:text-[#a2f552]'>&lt;/span&gt;</code>
                            </p>
                        </div>
                        <div className='md:w-96 mt-10 lg:mx-0 mx-auto lg:mb-0 mb-5'>
                            <Marquee speed={50}>
                                {logos.map((logo, index) => (
                                    <div key={index} className='mx-5 flex items-center justify-center border-2 border-[#33412f] p-2'>
                                        <Image width={50} height={50} src={logo.src} alt={logo.alt}
                                            className=' object-contain' />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About