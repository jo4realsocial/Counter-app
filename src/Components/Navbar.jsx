import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'


const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'projects'
    },
    {
        id: 3,
        link: 'industry'
    },
    {
        id: 4,
        link: 'skills'
    },
    {
        id: 5,
        link: 'others'
    },
    {
        id: 5,
        link: 'contact'
    }
]


const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='fixed bg-[#1e1e1e] text-white z-10 w-full'>
            <div className='w-[80%] mx-auto flex justify-between items-center h-[66px]'>
                <div className='text-base font-bold'>
                    MY LOGO
                </div>
                <ul className='hidden md:flex gap-[40px] pr-8'>
                    {links.map(({ id, link }) => (
                        <li key={id}
                            className='cursor-pointer flex capitalize 
                            hover:scale-105 duration-200 text-[#C3C2C2]'
                        >
                            {<Link to={link}
                                smooth duration={500}>
                                {link}
                            </Link>}
                        </li>
                    ))}
                </ul>
                <div onClick={() => setNav((nav) => !nav)}
                    className='pr-4 z-10 cursor-pointer text-gray-400 md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center h-screen
                w-full absolute top-0 right-0 cursor-pointer bg-gradient-to-b from-black to-gray-900'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='py-6 text-3xl text-gray-400 capitalize 
                            hover:scale-105 duration-200'
                            >
                                <Link onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar