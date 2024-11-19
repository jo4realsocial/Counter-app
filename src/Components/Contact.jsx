import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='bg-[#1e1e1e] max-h-[955px] w-full py-4'>
            <div className='w-[80%] mx-auto'>
                <form action='https://getform.io/f/mepN1NbM' method="POST" className='flex flex-col max-w-[800px] mx-auto py-8'>
                    <div className='pb-8 flex flex-col justify-center items-center'>
                        <p className='text-4xl font-bold text-white capitalize  '>contact</p>
                        <p className='text-gray-300 py-4 '>Fill and submit the form below to send me an email, thanks</p>
                    </div>
                    <input className='focus:outline-0 bg-transparent border-2 rounded-md p-2 text-white' type="text" placeholder='Name' name='name' />
                    <input className=' focus:outline-0 my-4 bg-transparent border-2 rounded-md p-2 text-white' type="email" placeholder='Email' name='email' />
                    <textarea className='focus:outline-0 bg-transparent border-2 rounded-md p-2 text-white' type="email" placeholder='Message' rows='10' name='message' />
                    <button className='text-gray-900 py-3 px-8 border-2 rounded bg-white my-6 mx-auto hover:bg-[#1e1e1e] cursor-pointer hover:text-gray-300'>Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Contact
