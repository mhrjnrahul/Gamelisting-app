import React, { useState, useContext, useEffect } from 'react'
import moka from '../assets/Images/moka.jpg'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { ThemeContext } from '../Context/ThemeContext'

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
         
    }, [])

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
            {theme==="light" ? 
            <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded'
            onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}/>
            : 
            <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded'
            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}/>}
        </div>
    </div>
  )
}

export default Header