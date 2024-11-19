import React from 'react'
import linkIcon from '../assets/images/link-out.png'
import dashboard from '../assets/images/Dashboard.png'
import hrApp from '../assets/images/HrApp.png'
import stylecomp from '../assets/images/stylecomp.png'
import estate from '../assets/images/Estate.png'




const portfolios = [
    {
        id: 1,
        img: dashboard,
        smalltxt: 'ecommerce',
        guest: 'guest checkout ecommerce web and mobile application',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis magnis donec vitae eu vel volutpat leo mauris.'
    },
    {
        id: 2,
        img: hrApp,
        smalltxt: 'ecommerce',
        guest: 'guest checkout ecommerce web and mobile application',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis magnis donec vitae eu vel volutpat leo mauris.'
    },
    {
        id: 3,
        img: stylecomp,
        smalltxt: 'ecommerce',
        guest: 'guest checkout ecommerce web and mobile application',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis magnis donec vitae eu vel volutpat leo mauris.'
    },
    {
        id: 4,
        img: estate,
        smalltxt: 'ecommerce',
        guest: 'guest checkout ecommerce web and mobile application',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis magnis donec vitae eu vel volutpat leo mauris.'
    }
]

const Projects = () => {
    return (
        <div name='projects' className='bg-[#1e1e1e] h-full w-full py-4'>
            <div className='w-[80%] mx-auto'>
                <div className=' flex flex-col gap-10 -mt-[100px]'>
                    <div className='flex flex-col gap-4 pt-10'>
                        <p className='capitalize text-2xl text-white font-bold'>projects</p>
                        <p className='capitalize text-sm text-white font-normal'>products I have worked on</p>
                    </div>
                    <div className='grid grid-cols-1 gap-[120px] md:grid-cols-2'>
                        {portfolios.map(({ id, img, smalltxt, guest, desc }) => (
                            <div key={id} className='flex flex-col gap-[30px]'>
                                <div className=' max-w-[543px] flex items-end justify-end relative'>
                                    <img className='w-full rounded-[10px]' src={img} alt='project pictures' />
                                    <button className='bg-[#1e1e1e] text-white gap-[10px] absolute bottom-8 right-5 rounded-[10px] flex items-center justify-center py-[15px] px-[30px] '>
                                        <span>view case study</span>
                                        <img src={linkIcon} />
                                    </button>

                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-[#5A5A5A] text-sm font-normal capitalize leading-[17.64px]'><li>{smalltxt}</li></span>
                                    <div className='max-w-[416px]'>
                                        <p className='text-white capitalize text-xl leading-[25.2px]'>{guest}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#C3C2C2] text-base leading-[20.16px] max-w-[548px]'>
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
