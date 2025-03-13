import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%] h-[12vh] bg-slate-200 flex justify-between items-center px-[30px] '>
        <h1 className='text-[2rem] font-semibold'>MirrorSoft</h1>
        <ul className='flex gap-4'>
            <li><a className='text-[1.1rem]' href="">Home</a></li>
            <li><a className='text-[1.1rem]' href="">About</a></li>
            <li><a className='text-[1.1rem]' href="">Service</a></li>
            <li><a className='text-[1.1rem]' href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default Header
