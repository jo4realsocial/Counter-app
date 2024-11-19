import React from 'react'

const tools = [
    {
        id: 1,
        tool: 'UX Research',
    },
    {
        id: 2,
        tool: 'UI Design',
    },
    {
        id: 3,
        tool: 'Prototyping',
    },
    {
        id: 4,
        tool: 'Interactive Design',
    },
    {
        id: 5,
        tool: 'Mockups & Presentations',
    },
    {
        id: 6,
        tool: 'Wireframing',
    },
    {
        id: 7,
        tool: 'Information Architecture',
    },
    {
        id: 8,
        tool: 'Artificial Intelligence',
    },
    {
        id: 9,
        tool: 'Booking'
    }
]


const Tools = () => {
    return (
        <div name='tools' className=''>
            <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-4 justify-center items-center align-center'>
                    <h2 className='text-white text-2xl capitalize font-bold'>Tools</h2>
                    <p className='text-[#C3C2C2] text-sm capitalize'>Where I have worked in</p>
                </div>
                <div className='max-w-[643px] items-center flex-wrap flex gap-[10px] 
                hover:border-blue-400 hover:border-2 place-content-center'>
                    {tools.map(({ id, tool }) => (
                        <div key={id} className='flex py-[15px] px-[30px] rounded-[10px] border-dashed text-[#959595] border-2 border-[#404040] bg-[#191A1D] '>
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tools
