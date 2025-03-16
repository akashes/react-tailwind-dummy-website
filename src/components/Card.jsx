import React from 'react'

const Card = ({img,title,description,key}) => {
  return (
    <div className='w-[250px]  bg-white flex flex-col items-center md:items-start '>
      
     <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
    <img className='w-[25px]' src={img} alt="" />
    
     </div>
     <h1 className='text-[1.1rem] font-semibold mt-1'>{title}</h1>
     <p className='text-gray-500 text-[0.8rem] text-center md:text-left'>{description}</p>
    
    </div>
  )
}

export default Card
