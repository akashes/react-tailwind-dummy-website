import { useState } from 'react'

import './App.css'
import heroImage from './images/desktop.jpg'
import Header from './components/Header'

function App() {

  return (
    <>
    <main>
      {/* header and hero section */}
      <div className='w-[100%] h-[100vh]'>
    <Header/>

    <div className='w-[100%] h-[88vh] flex'>
      <div className='w-[50%] h-[100%] bg-gray-300 flex flex-col justify-center px-[50px]'>
      <h1 className='text-[2.2rem] font-semibold '>Elevate Your Brand <br /> With Stunning App And <br /> Website Design</h1>
        <p className='w-[70%] text-[0.9rem] text-gray-500 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt iste error! Architecto dolorem qui, odio possimus corporis unde natus laborum amet ipsam deleniti, voluptates iste eum, nulla dolorum nisi?</p>
        <div className='mt-[10px] flex gap-2'>
          <button className='px-[30px] rounded-full bg-black text-white py-[7px] '>Get Started</button>
          <button className='rounded-full px-[30px] py-[7px] border-[1.5px] border-[#F5F5F5]'>View Project</button> 
        </div>
      </div>
      {/* image section */}
      <div className='w-[50%] h-[100%] flex justify-center items-center '>

      <div  className='w-[60%] h-[70%]  rounded-lg overflow-hidden relative p-[10px] ' >
        <div className='bg-white rounded-lg absolute
          top-[0px] left-[0px] 
         w-[200px] p-[10px]'>

            <div className='p-[10px] bg-[#F5F5F5] rounded-lg'>
              <h1 className='text-[2.5rem] font-medium '>285+</h1>
              <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tenetur!</p>
            </div>

            
        </div>
        <img className='w-[100%] h-[100%] rounded-lg ' src={heroImage} alt="" />

        <div className='bottom-0 right-0 w-[150px] bg-white absolute rounded-lg p-[10px]'>
         <div className='bg-black text-white rounded-lg p-[10px]' >
         <h2 className='text-[2.5rem] font-medium'>200+</h2>
         <p className='text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nihil!</p>
         </div>
        </div>
      </div>

      </div>

    </div>
    

      </div>
      {/* services section */}
      <div className='w-[100%]  h-[12vh] bg-black text-white'></div>
    </main>

    
     
    </>
  )
}

export default App
