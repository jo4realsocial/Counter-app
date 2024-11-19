import React from 'react'

const skills = [
    {
        id: 1,
        skill: 'UX Research',
    },
    {
        id: 2,
        skill: 'UI Design',
    },
    {
        id: 3,
        skill: 'Prototyping',
    },
    {
        id: 4,
        skill: 'Interactive Design',
    },
    {
        id: 5,
        skill: 'Mockups & Presentations',
    },
    {
        id: 6,
        skill: 'Wireframing',
    },
    {
        id: 7,
        skill: 'Information Architecture',
    },
    {
        id: 8,
        skill: 'Artificial Intelligence',
    },
    {
        id: 9,
        skill: 'booking'
    }
]

const Skills = () => {
    return (
        <div name='skills' className=''>
            <div className='flex flex-col gap-[30px] '>
                <div className='flex flex-col gap-4 justify-center items-center align-center'>
                    <h2 className='text-white text-2xl capitalize font-bold'>Skills</h2>
                    <p className='text-[#C3C2C2] text-sm capitalize'>Where I have worked in</p>
                </div>
                <div className='max-w-[643px] flex-wrap flex gap-[10px] 
                hover:border-blue-400 hover:border-2 place-content-center'>
                    {skills.map(({ id, skill }) => (
                        <div key={id} className='flex py-[15px] place-items-center px-[30px] rounded-[10px] border-dashed text-[#959595] border-2 border-[#404040] bg-[#191A1D] '>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills

