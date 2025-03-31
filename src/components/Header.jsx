import React, { useState } from 'react'
import moka from '../assets/Images/moka.jpg'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { HiMoon, HiSun } from 'react-icons/hi2'

const Header = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div className='flex justify-between items-center gap-2 p-2'>
        <img 
        src={moka}
        width={60}
        height={60}
        alt='logo'
        className='rounded'
        /> 

        <div className='flex w-full gap-2 mx-5 rounded-full items-center bg-slate-200 p-2'>
            <HiOutlineMagnifyingGlass />
            <input 
                type="text" 
                placeholder='Search for games...'
                className='px-2 bg-transparent outline-none' />
        </div>

        <div className='pr-2 cursor-pointer'>
            {toggle ? 
            <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded'
            onClick={handleToggle}/>
            : 
            <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded'
            onClick={handleToggle}/>}
        </div>
    </div>
  )
}

export default Header