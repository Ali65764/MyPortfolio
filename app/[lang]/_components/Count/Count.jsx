"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'


const Count = ({ dict }) => {
    const stats = [
        { label: dict.portfolio.years, end: 2, suffix: "+" },
        { label: dict.portfolio.github, end: 15, suffix: "+" },
        { label: dict.portfolio.techonology, end: 12, suffix: "+" }
    ]

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4
    })
    return (
        <div className='container mx-auto text-center select-none'>
            <div className='mx-2'>
                <div ref={ref} className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                    {stats.map((stat, index) => (
                        <div key={index} className='bg-white dark:bg-[#272730] p-8 shadow-lg rounded-lg flex flex-col items-center dark:border border-[#33412f]'>
                            <h3 className='text-4xl lg:text-6xl font-bold dark:text-[#f5f5f5]'>
                                {inView ?
                                    (
                                        <CountUp start={0} end={stat.end} suffix={stat.suffix} duration={3} />
                                    ) :
                                    ("0")
                                }
                                <p className='text-lg dark:text-[#f5f5f5] mt-2'>{stat.label}</p>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Count