import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
    const logos = [
        "/React.png",
        "/Next.png",
        "/Js.png",
        "/Tailwind.png"
    ]
    return (
        <main className='container mx-auto select-none' id="about">
            <div className='bg-[#272730] rounded-md mx-2 border-[#33412f]'>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='text-center md:text-left md:px-20 md:py-16 p-8'>
                        <Image width={500} height={100} src="/me3.jpg" alt='me' className='md:h-[500px] h-[280px] sm:h-[480px] rounded-[20px] object-cover' />
                    </div>
                    <div className='lg:w-1/2  w-full text-white text-center lg:text-left mt-4 md:mt-0'>
                        <p className='text-xl'><code className='text-[#a2f552]'>&lt;div&gt;</code> Hi! I'm Ali Mammadli <code className='text-[#a2f552]'> &lt;/div&gt;</code></p>
                        <div className='mt-9'>
                            <h2 className='md:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-100'>Web Developer</h2>
                            <p className='mt-4 px-8 lg:px-0'>
                                <code className='text-[#a2f552]'>&lt;span&gt;</code> A passionate Frontend Developer dedicated to crafting
                                modern, fast, and user-friendly web applications that deliver exceptional user
                                experiences. I specialize in React and Next.js, leveraging their powerful features
                                to build scalable and performant solutions. My expertise extends to JavaScript and
                                TypeScript, where I continuously refine my skills to write clean, maintainable code.
                                I'm deeply invested in UI/UX design principles, ensuring that every project I work
                                on not only functions flawlessly but also looks beautiful and intuitive. I believe
                                in creating digital experiences that make a real difference, combining technical
                                excellence with creative problem-solving to bring ideas to life.
                                <code className='text-[#a2f552]'>&lt;/span&gt;</code>
                            </p>
                        </div>
                        <div className='md:w-96 mt-10 lg:mx-0 mx-auto'>
                            <Marquee speed={50}>
                                {logos.map((logo, index) => (
                                    <div key={index} className='mx-5 flex items-center justify-center border-2 border-[#33412f] p-2'>
                                        <Image width={50} height={50} src={logo} alt={`Logo ${index + 1}`}
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