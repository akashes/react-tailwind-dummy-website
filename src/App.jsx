import { useEffect, useState } from 'react'

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
import Card from './components/Card'
import Footer from './components/Footer'
function App() {
  const[isHovered,setIsHovered]=useState(false)

  const cardData = [
    {
        "id": 1,
        "img":client,
        "title":"Client Centric Approach",
        "description":"We believe in understanding our clients' needs and delivering solutions that meet their expectations.",
    },
    {
      "id":2,
      "img":strategy,
      "title":"Strategic Thinking",
      "description":"Our team of experts will work with you to develop a customized strategy that meets your"
    },
    {
      "id":3,
      "img":creative,
      "title":"Creative Solutions",
      "description":"We believe in thinking outside the box and delivering innovative solutions that exceed our clients"
    },
    {
      "id":4,
      "img":calendar,
      "title":"Timely Delivery",
      "description":"We understand the importance of meeting deadlines and delivering projects on time."
    }
]


  return (
    <>
    <main>
<Header/> 
<Hero/>  
<Services/>


  {/* cta section  */}
      <div className='w-[100%] sm:h-[45vh] my-10 text-center sm:text-left  px-[10px] sm:px-[50px] flex flex-col gap-5 sm:gap-0 sm:flex-row'>
        <div className=' w-full sm:w-[50%] h-[100%] flex justify-center items-center sm:justify-start '>
          <h1 className='text-[2rem] font-semibold'>MirroSoft Design <br /> SuperPassed Our <br /> Expectations</h1>
        </div>
        <div className='w-full sm:w-[50%] h-[100%]  flex flex-col justify-center items-center sm:items-start'>
          <p className='sm:w-[70%]  text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis eius, deserunt sunt provident dolores mollitia vel nulla molestiae, alias natus nihil, hic nam in!</p>
          <a href="" className='w-[160px] mt-2 text-center  block py-[7px] rounded-full border-[2px] border-[#c8c9cc] hover:bg-black hover:text-white transition-colors duration-300'>Get in Touch Now</a>

        </div>


      </div>

      
{/* cards section */}
      <div className='w-[100%] md:h-[80vh] flex flex-col gap-5 md:gap-0 justify-center items-center  md:flex-row sm:px-[50px] py-10 md:py-0 ' >

      <div className='w-full sm:w-[40%] h-[100%]  flex flex-col justify-center items-center text-center md:items-start md:text-left'>
        <h1 className=' text-[1.8rem] sm:text-[2.3rem] font-semibold'>Passionate <br /> creators,Innovators,  And Visionaries</h1>
        <p className='text-[0.8rem] text-gray-600 mt-2 md:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut placeat quibusdam id dolor nesciunt nostrum amet ex sed maxime, rem blanditiis et? Rem, hic?</p>

      </div>


    
     
     <div className='w-full sm:w-[60%] h-[100%]  grid gap-3 md:gap-0  place-items-center grid-cols-1 md:grid-cols-2'>

{
  cardData.map((card)=>{
    return(
      <Card img={card.img} title={card.title} description={card.description} key={card.id} />
    )
  })
}

 </div>

      </div>



{/* links section */}
<div className='w-[100%] sm:h-[80vh] px-[20px] sm:px-[50px] my-[50px]'>
  <div className='w-[100%] flex flex-col items-center  '>
    <h1 className='text-center font-semibold text-[1.5rem] sm:text-[2.2rem]'>Tailored Solution for <br /> Your Needs</h1>
    <p className='text-center text-[.9rem] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Officia, quasi?</p>


  </div>
  <div className='mt-[30px] w-[100%] flex flex-col gap-3'>
    <div className='flex flex-col  sm:flex-row pb-[10px] justify-center sm:justify-between items-start sm:items-center border-b-[2px] border-b-gray-400'>
    <h1 className=' sm:w-[40%] text-[1.8rem] font-semibold'>Mobile & Website Design</h1>
    <p className='sm:w-[45%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className=' h-[40px] sm:h-[70px]' />
    </div>
    
    <div className='flex flex-col  sm:flex-row pb-[10px] justify-center sm:justify-between items-start sm:items-center border-b-[2px] border-b-gray-400'>
    <h1 className=' sm:w-[40%] text-[1.8rem] font-semibold'>Website Development</h1>
    <p className='sm:w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className=' h-[40px] sm:h-[70px]' />
    </div>
    
    <div className='flex flex-col  sm:flex-row pb-[10px] justify-center sm:justify-between items-start sm:items-center border-b-[2px] border-b-gray-400'>
    <h1 className=' sm:w-[40%] text-[1.8rem] font-semibold'>Brand Guideline</h1>
    <p className='sm:w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className=' h-[40px] sm:h-[70px]' />
    </div>
    
    <div className='flex flex-col  sm:flex-row pb-[10px] justify-center sm:justify-between items-start sm:items-center border-b-[2px] border-b-gray-400'>
    <h1 className=' sm:w-[40%] text-[1.8rem] font-semibold'>Product Design</h1>
    <p className='sm:w-[45%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus quibusdam doloribus ad mollitia illum!</p>
    <img src={rightup} alt="" className=' h-[40px] sm:h-[70px]' />
    </div>
    

  </div>
</div>



<div className='w-[100%] sm:h-[80vh] py-10 sm:py-5  flex flex-col-reverse sm:flex-row gap-3 sm:gap-0'>
  <div className='w-full sm:w-[50%] h-[100%] flex flex-col justify-center items-center sm:items-start gap-2 sm:gap-0 px-[50px]'>
    <h1 className='text-[2.2rem]'>We Blend Beauty <br /> And Functionality <br /> Seamlessly</h1>
    <p className='text-[.9rem] text-gray-500 mt-2 w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, totam impedit. Aperiam quam reprehenderit architecto!</p>
    <a href="" className='w-[160px] mt-2 border-[2px] border-[#c8c9cc] py-[7px] block text-center rounded-full hover:bg-black hover:text-white transition-colors duration-300 hover:border-0'>Get In Touch</a>

  </div>
  <div className='w-full sm:w-[50%] h-[100%] flex justify-center items-center'>
    <img className='w-[80%] h-[70%] rounded-lg ring-1 ring-[#0056b3]' src={desktopTwo} alt="" />

  </div>


</div>

<div className='w-[100%] h-auto px-[20px] sm:px-[50px] my-[50px]'>
  <div className='w-[100%] flex justify-between flex-col  items-center my-10 '>
    <div className='w-full '>
      <h1 className=' text-[2.2rem] sm:text-[2.7rem] text-center font-semibold '>Witness Our <br /> Success Stories</h1>
    </div> 
    <div className=' w-full  sm:w-[50%]  flex '>
      
       <p className=' text-[0.9rem] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aut delectus at aliquam odit eveniet inventore rerum eligendi rem et.</p>
    </div>
      


  </div>
  <div className='flex mt-[25px] mx-auto w-[80%] flex-wrap sm:gap-10 gap-5 '>
    <div className='sm:w-[45%]  rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={heroImage} alt="" />

    </div>
    <div className='sm:w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={desktopTwo} alt="" />

    </div>
    <div className='sm:w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={heroImage} alt="" />

    </div>
    <div className='sm:w-[45%] rounded-lg overflow-hidden'>
      <img className='w-[100%] rounded-lg' src={desktopTwo} alt="" />

    </div>

  </div>

</div>
 
 <div style={{ background: isHovered ? "#292626" : "black" }} className='  w-[100%] sm:h-[80vh] py-20 sm:py-0 bg-black text-white flex flex-col justify-center items-center px-[20px] sm:px-[50px] transition-colors duration-500'>
  <h1 className='text-[2.2rem] sm:text-[4rem] font-semibold text-center'>Let's Create Together </h1>
  <p className='text-[0.9rem] mb-[12px] mt-[8px] text-gray-100 sm:w-[50%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente architecto id est! Debitis molestiae laboriosam fuga repellendus doloribus, officiis nihil? Necessitatibus assumenda dolores voluptatum?</p>
  <a         onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className='  w-[170px] py-[7px] block text-center rounded-full bg-white text-black' href="">Get Started</a>


 </div>

<Footer/>
    </main>

    
     
    </>
  )
}

export default App
