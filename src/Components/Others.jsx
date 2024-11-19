import React from 'react'

const Others = (embedId) => {
    return (
        <div name='others' className='bg-[#191A1D] w-full h-full'>
            <div className='w-[80%] mx-auto flex flex-col justify-center pt-[100px] gap-[30px]'>
                <div className='flex flex-col gap-4 justify-center'>
                    <h1 className='text-white text-[40px] text-center leading-[50.4px]'>Other things i do</h1>
                    <div className='flex text-[#5A5A5A] justify-center gap-[11px] capitalize'>
                        <li>Youtube </li>
                        <li>teaching</li>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px] md:flex-row'>
                    <div className='max-h-[480px] w-full flex-1'>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full  h-[400px]"
                                src={`https://www.youtube.com/embed/C2Gb-j39wTI?si=Aq0SmUfPw8fAB4PP/${embedId}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className='text-white py-4 text-5 font-normal leading-[25.2px] p-4'>Live Class explaining design principles <br /> for uI designers</p>
                    </div>
                    <div className='max-h-[480px] w-full flex-1'>
                        <div className="aspect-w-16 aspect-h-9 ">
                            <iframe
                                className="w-full  h-[400px]"
                                src={`https://www.youtube.com/embed/k7vDC4Iv0Ek?si=U2vwVWlasn1SgRFO/${embedId}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className='text-white text-5 font-normal leading-[25.2px] p-4'>Live Class explaining conditional statement <br /> in javascript for frontend developers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Others
