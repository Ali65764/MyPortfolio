"use client"
import React from 'react'
import { getDictionary } from '../../dictionaries'
type Dictionary = Awaited<ReturnType<typeof getDictionary>>

interface SkillsProps {
    dict: Dictionary
}

const Skills = ({ dict }: SkillsProps) => {
    return (
        <div className='container mx-auto select-none' id="skills">
            <div className='bg-white dark:bg-[#272730] rounded-md mx-2 border-[#33412f] dark:border p-10'>
                <h2 className='text-center text-3xl lg:text-4xl font-bold dark:text-white mt-8'>{dict.portfolio.myskills}</h2>
                <div className='flex items-center lg:flex-row flex-col'>
                    <div className='lg:w-1/2 space-y-6 lg:p-8 mt-5 w-full'>
                        <div>
                            <p className='dark:text-white mb-2'>HTML</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='dark:text-white mb-2'>CSS</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='dark:text-white mb-2'>JavaScript</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='dark:text-white mb-2'>React.js</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '83%' }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='dark:text-white mb-2'>Next.js</p>
                            <div className='w-full bg-gray-700 rounded-full h-2'>
                                <div className='bg-green-500 h-2 rounded-full' style={{ width: '82%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='dark:text-[#6b7280] mt-10 lg:p-8 lg:w-1/2'>
                        <ul className='text-lg space-y-4 list-inside list-disc'>
                            <li className='dark:text-gray-500'>
                                <span className='dark:text-white font-semibold'>Front-End: </span>
                                <span className='[word-spacing:4px]'>HTML , CSS ,  JavaScript , TypeScript , React.js , Next.js</span>
                            </li>
                            <li className='dark:text-gray-500'>
                                <span className='dark:text-white font-semibold'>{dict.portfolio.styling}: </span>
                                <span className='[word-spacing:4px]'> TailwindCSS , Bootstrap , ShadCn , MUI</span>
                            </li>
                            <li className='dark:text-gray-500'>
                                <span className='dark:text-white font-semibold'>{dict.portfolio.others}: </span>
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
