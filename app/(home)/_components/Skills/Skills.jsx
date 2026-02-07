"use client"
import React from 'react'


const Skills = () => {
    return (
        <div className='container mx-auto select-none' id="skills">
            <div className='bg-[#272730] rounded-md mx-2 border-[#33412f] border p-10'>
                <h2 className='text-center text-4xl text-white mt-8'>My Skills</h2>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='lg:w-1/2 space-y-6 lg:p-8 mt-5 w-full'>
                        <div>
                            <p className='text-white mb-2'>HTML</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white mb-2'>CSS</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white mb-2'>JavaScript</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white mb-2'>React.js</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '83%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white mb-2'>Next.js</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '82%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#6b7280] mt-10 lg:p-8 lg:w-1/2'>
                        <ul className='text-lg space-y-4 list-inside list-disc'>
                            <li className='text-gray-500'>
                                <span className='text-white'>Front-End: </span>
                                <span className='[word-spacing:4px]'>HTML , CSS ,  JavaScript , TypeScript , React.js , Next.js</span>
                            </li>
                            <li className='text-gray-500'>
                                <span className='text-white'>Styling: </span>
                                <span className='[word-spacing:4px]'> TailwindCSS , Bootstrap , ShadCn , MUI</span>
                            </li>
                            <li className='text-gray-500'>
                                <span className='text-white'>Others: </span>
                                <span className='[word-spacing:4px]'>FireBase , GIT/GITHUB , Prisma , Clerk</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
