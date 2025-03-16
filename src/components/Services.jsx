import React from 'react'

const Services = () => {
  return (

    <div className='w-[90%] mx-auto rounded-lg overflow-hidden shadow-black shadow-lg sm:w-[100%] sm:mx-0 sm:rounded-none  sm:h-[12vh]  bg-black text-white flex flex-col gap-5 sm:gap-0 sm:flex-row justify-evenly items-center'>
    <div className='hover:bg-gray-800 text-center transition-colors duration-500   w-full sm:w-auto py-3 sm:py-0 ' >
      <h1 className='text-[1.8rem] font-medium cursor-pointer '>Branding</h1>
    </div>
    <div className='hover:bg-gray-800 text-center transition-colors duration-500   w-full sm:w-auto py-3 sm:py-0  '>
      <h1 className='text-[1.8rem] font-medium cursor-pointer '>Website</h1>
    </div>
    <div className='hover:bg-gray-800 text-center transition-colors duration-500   w-full sm:w-auto py-3 sm:py-0  '>
      <h1 className='text-[1.8rem] font-medium cursor-pointer'>Digital Marketing</h1>
    </div>
    <div className=' hover:bg-gray-800 text-center transition-colors duration-500   w-full sm:w-auto py-3 sm:py-0 '>
      <h1 className='text-[1.8rem] font-medium cursor-pointer'>App</h1>
    </div>
  </div>
  )
}

export default Services
