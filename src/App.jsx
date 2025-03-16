import { useState } from 'react'

import './App.css'
import heroImage from './images/desktop.jpg'
import Header from './components/Header'
import client from './icons/client.png'
import strategy from './icons/strategy.png'
import creative from './icons/creative.png'
import calendar from './icons/calendar.png'

import rightup from './icons/right-up.png'
import desktopTwo from './images/desktopTwo.jpg'
import Hero from './components/Hero'
import Services from './components/Services'
function App() {

  return (
    <>
    <main>
<Header/> 
<Hero/>  
<Services/>


    



      <div className='w-[100%] h-[45vh] bg-[#F5F5F5] px-[10px] flex'>
        <div className='w-[50%] h-[100%] flex justify-center items-center'>
          <h1 className='text-[2rem] font-semibold'>MirroSoft Design <br /> SuperPassed Our <br /> Expectations</h1>
        </div>
        <div className='w-[50%] h-[100%] bg-slate-300 flex flex-col justify-center'>
          <p className='w-[70%] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis eius, deserunt sunt provident dolores mollitia vel nulla molestiae, alias natus nihil, hic nam in!</p>
          <a href="" className='w-[160px] mt-2 text-center  block py-[7px] rounded-full border-[2px] border-[#c8c9cc]'>Get in Touch Now</a>

        </div>


      </div>

      <div className='w-[100%] h-[90vh] flex px-[50px] ' >

      <div className='w-[40%] h-[100%]  flex flex-col justify-center'>
        <h1 className='text-[2.2rem] font-semibold'>Passionate <br /> creators,Innovators, <br /> And Visionaries</h1>
        <p className='text-[0.8rem] text-gray-600 mt-2 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut placeat quibusdam id dolor nesciunt nostrum amet ex sed maxime, rem blanditiis et? Rem, hic?</p>

      </div>


      {/* <div className='w-[60%] h-[100%] bg-yellow-300 flex gap-2 items-center justify-center flex-wrap'>

     <div className='w-[250px]  bg-white '>
      <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={Client} alt="" />

      </div>
      <h1 className='text-[1.1rem] font-semibold mt-1'>Client Centric Approach</h1>
      <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

     </div>
     <div className='w-[250px]  bg-white '>
      <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={Client} alt="" />

      </div>
      <h1 className='text-[1.1rem] font-semibold mt-1'>Client Centric Approach</h1>
      <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

     </div>
     <div className='w-[250px]  bg-white '>
      <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={Client} alt="" />

      </div>
      <h1 className='text-[1.1rem] font-semibold mt-1'>Client Centric Approach</h1>
      <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

     </div>
     <div className='w-[250px]  bg-white '>
      <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={Client} alt="" />

      </div>
      <h1 className='text-[1.1rem] font-semibold mt-1'>Client Centric Approach</h1>
      <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

     </div>
      </div> */}
     
     <div className='w-[60%] h-[100%]  grid  place-items-center md:grid-cols-2'>

<div className='w-[250px]  bg-white '>
 <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={client} alt="" />

 </div>
 <h1 className='text-[1.1rem] font-semibold mt-1'>Client Centric Approach</h1>
 <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

</div>
<div className='w-[250px]  bg-white '>
 <div className='w-[50px]  h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={strategy} alt="" />

 </div>
 <h1 className='text-[1.1rem] font-semibold mt-1'>Strategic Thinking</h1>
 <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

</div>
<div className='w-[250px]  bg-white '>
 <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={creative} alt="" />

 </div>
 <h1 className='text-[1.1rem] font-semibold mt-1'>Creative Excellence</h1>
 <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

</div>
<div className='w-[250px]  bg-white '>
 <div className='w-[50px] h-[50px] bg-gray-200 rounded-md flex justify-center items-center'>
<img className='w-[25px]' src={calendar} alt="" />

 </div>
 <h1 className='text-[1.1rem] font-semibold mt-1'>Timely Delivery</h1>
 <p className='text-gray-500 text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa ab, doloribus accusamus ducimus quos!</p>

</div>
 </div>

      </div>
<div className='w-[100%] h-[100vh] px-[50px] my-[50px]'>
  <div className='w-[100%] flex flex-col items-center '>
    <h1 className='text-center font-semibold text-[2.2rem]'>Tailored Solution for <br /> Your Needs</h1>
    <p className='text-center text-[.9rem] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Officia, quasi?</p>


  </div>
  <div className='mt-[30px] w-[100%] flex flex-col gap-3'>
    <div className='flex pb-[10px] justify-between items-center border-b-[2px] border-b-gray-400'>
    <h1 className=' w-[40%] text-[1.8rem] font-semibold'>Mobile & Website Design</h1>
    <p className='w-[45%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className='h-[70px]' />
    </div>
    
    <div className='flex pb-[10px] justify-between items-center border-b-[2px] border-b-gray-400'>
    <h1 className='w-[40%] text-[1.8rem] font-semibold'>Website Development</h1>
    <p className='w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className='h-[70px]' />
    </div>
    
    <div className='flex pb-[10px] justify-between items-center border-b-[2px] border-b-gray-400'>
    <h1 className='w-[40%] text-[1.8rem] font-semibold'>Brand Guideline</h1>
    <p className='w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className='h-[70px]' />
    </div>
    
    <div className='flex pb-[10px] justify-between items-center border-b-[2px] border-b-gray-400'>
    <h1 className='w-[40%] text-[1.8rem] font-semibold'>Product Design</h1>
    <p className='w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className='h-[70px]' />
    </div>
    

  </div>
</div>

<div className='w-[100%] h-[90vh] bg-[#F5F5F5] flex'>
  <div className='w-[50%] h-[100%] flex flex-col justify-center px-[50px]'>
    <h1 className='text-[2.2rem]'>We Blend Beauty <br /> And Functionality <br /> Seamlessly</h1>
    <p className='text-[.9rem] text-gray-500 mt-2 w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, totam impedit. Aperiam quam reprehenderit architecto!</p>
    <a href="" className='w-[160px] mt-2 border-[2px] border-[#c8c9cc] py-[7px] block text-center rounded-full'>Get In Touch</a>

  </div>
  <div className='w-[50%] h-[100%] flex justify-center items-center'>
    <img className='w-[80%] h-[70%] rounded-lg' src={desktopTwo} alt="" />

  </div>


</div>

<div className='w-[100%] h-auto px-[50px] my-[50px]'>
  <div className='w-[100%] flex justify-between '>
    <div className='w-[50%]'>
      <h1 className='text-[2.2rem]'>Witness Our <br /> Success Stories</h1>
    </div> 
    <div className='w-[50%]  flex justify-end'>
      
       <p className='w-[65%] text-[0.9rem] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aut delectus at aliquam odit eveniet inventore rerum eligendi rem et.</p>
    </div>
      


  </div>
  <div className='flex mt-[25px] flex-wrap gap-4 justify-evenly '>
    <div className='w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={heroImage} alt="" />

    </div>
    <div className='w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={desktopTwo} alt="" />

    </div>
    <div className='w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={heroImage} alt="" />

    </div>
    <div className='w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={desktopTwo} alt="" />

    </div>

  </div>

</div>
 
 <div className='w-[100%] h-[80vh] bg-black text-white flex flex-col justify-center items-center'>
  <h1 className='text-[4rem] '>Let's Create Together </h1>
  <p className='text-[0.9rem] mb-[12px] mt-[8px] text-gray-300 w-[50%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente architecto id est! Debitis molestiae laboriosam fuga repellendus doloribus, officiis nihil? Necessitatibus assumenda dolores voluptatum?</p>
  <a className='w-[170px] py-[7px] block text-center rounded-full bg-white text-black' href="">Get Started</a>


 </div>

<footer className='w-[100%] h-[10vh] px-[50px] flex justify-between items-center '>
  <h1 className='text-[1.5rem] font-semibold'>MirrorSoft</h1>
  <ul className='flex gap-4'>
    <li><a className='text-gray-500'  href="">Home</a></li>
    <li><a  className='text-gray-500' href="">About</a></li>
    <li><a  className='text-gray-500' href="">Service</a></li>
    <li><a  className='text-gray-500' href=" ">Contact</a></li>
  </ul>

</footer>
    </main>

    
     
    </>
  )
}

export default App
