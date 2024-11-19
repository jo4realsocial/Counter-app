import React from 'react'
import Skills from './Skills'
import Tools from './Tools'

const industries = [
    {
        id: 1,
        jobs: 'saas'
    },
    {
        id: 2,
        jobs: 'edtech'
    },
    {
        id: 3,
        jobs: 'fintech'
    },
    {
        id: 4,
        jobs: 'productivity'
    },
    {
        id: 5,
        jobs: 'vod'
    },
    {
        id: 6,
        jobs: 'real estate'
    },
    {
        id: 7,
        jobs: 'hospitality'
    },
    {
        id: 8,
        jobs: 'artificial intelligence'
    },
    {
        id: 9,
        jobs: 'booking'
    },
    {
        id: 10,
        jobs: 'e-commerce'
    }

]
const Industry = () => {
    return (
        <div name='industry' className='bg-[#1e1e1e] h-full w-full py-[60px]'>
            <div className='h-full w-[80%] mx-auto flex flex-col md:gap-[200px] gap-6'>
                <div className='flex flex-col justify-center items-center mx-auto gap-[30px]'>
                    <div className='flex flex-col gap-4 justify-center items-center align-center'>
                        <h2 className='text-white text-2xl capitalize font-bold'>industry</h2>
                        <p className='text-[#C3C2C2] text-sm capitalize'>Where I have worked in</p>
                    </div>

                    <div className='max-w-[643px] items-center flex-wrap justify-center mx-auto flex gap-[14px] 
                    hover:border-blue-400 hover:border-2 hover:border-1'>
                        {industries.map(({ id, jobs }) => (
                            <div key={id} className='flex py-[15px] px-[30px] rounded-[10px] border-dashed text-[#959595] border-2 border-[#404040] bg-[#191A1D] '>
                                {jobs}
                            </div>

                        ))}
                    </div>

                </div>
                <div className='md:flex mx-auto'>
                    <div className='py-4'>
                        <Skills />
                    </div>
                    <div className='py-4'>
                        <Tools />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industry;