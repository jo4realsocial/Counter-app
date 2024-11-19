import React from 'react'
import insta from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import tweet from '../assets/images/twitter.png'
import sam from '../assets/images/sam-nerdy.png'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <div name='home' className='bg-[#1e1e1e] w-full max-h-[955px] pt-[68px]'>
            <div style={{ backgroundImage: `url(${sam})` }} className='w-[80%] bg-no-repeat h-screen mx-auto bg-center bg-cover md:bg-top '>
                <div className='flex flex-col-reverse py-8 md:flex-row  md:pt-[200px]'>
                    <div className='flex gap-5 flex-1 py-4 md:py-4 md:flex-col'>
                        <div className='bg-[#27292D] size-[50px] rounded-full flex justify-center items-center'>
                            <img src={insta} />
                        </div>
                        <div className='bg-[#27292D] size-[50px] rounded-full flex justify-center items-center'>
                            <img src={linkedin} />
                        </div>
                        <div className='bg-[#27292D] size-[50px] rounded-full flex justify-center items-center'>
                            <img src={tweet} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] flex-1'>
                        <div className='max-w-[411px] flex flex-col gap-[10px]'>
                            <h1 className='text-white text-[40px] md:text-[50px] font-bold leading-[50.4px] capitalize'>I'm chidi igweomoke</h1>
                            <div className='flex items-center gap-[14px]'>
                                <p
                                    className='text-white text-lg md:text-xl capitalize font-bold'>
                                    Frontend Developer
                                </p>
                                <li className='font-normal text-[#5A5A5A] text-[14px]' >2years+Experience</li><br />
                            </div>
                            <ReactTyped
                                className='text-gray-400 text-lg font-bold md:text-xl capitalize'
                                strings={[
                                    "React", "Javascript", "Typescript", "UI/UX", "Tailwind.CSS", "Git"
                                ]}
                                typeSpeed={120}
                                backSpeed={140}
                                loop
                            >
                            </ReactTyped>

                        </div>
                        <div className='max-w-[661px]'>
                            <p className='text-[#AAAAAA] leading-[20.16px] font-normal'>I’m an all round PRODUCT guy, focussed on building <span className='uppercase text-white'>SAAS</span> related products.
                                I'm a user centric <span className='uppercase text-white'>product</span> designer with <span className=' text-white'>wealth of experience</span>
                                working with developers and the entire product team. If you want to
                                launch an MVP, <span className=' text-white'>startup</span>, build saas, enhance the experience & aesthetics
                                of an existing products or <span className=' text-white'>prototype</span> an idea then I’m your guy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
