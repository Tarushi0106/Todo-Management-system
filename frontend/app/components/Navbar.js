"use client"
import React, { useState } from 'react'
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
    const [navMenu,setNavMenu] = useState('hidden');
    const [navMenuFlag , setNavMenuFlag] = useState(false);
    return (
        //-right-36  variable
        <>
            <div className='flex justify-center  flex-row md:justify-between items-center rounded-b border-b-2 border-y-gray-300  p-5 '  >
                <h1 className=' text-primary text-3xl' >Task <span className='text-gray-500 font-bold'>Management</span></h1>
                <div className={`
                ${navMenu}
                flex-col 
                fixed 
                top-0 
                right-0 
                bg-white 
                h-screen 
                z-10 
                p-10
                
                gap-10 
                 
                md:w-auto 
                md:h-auto 
                md:relative 
                md:right-0 
                md:flex 
                md:flex-row  
                md:mr-8
                md:bg-transparent
                md:p-0
                `}>
                    {navMenuFlag && <CloseIcon className='cursor-pointer' onClick={()=>{setNavMenu("hidden"); setNavMenuFlag(false)}}/>}
                    <Link className='p-3 bg-primary rounded text-gray-800 text-lg hover:bg-primaryDark hover:text-white'  href="/tasks/create">Add Task</Link>
                    <Link className='p-3 bg-primary rounded text-gray-800 text-lg  hover:bg-primaryDark hover:text-white'  href="/">Tasks</Link>
                </div>
                <div className='block md:hidden absolute right-3 font-bold cursor-pointer' onClick={()=>{
                    setNavMenu("flex") ; 
                    setNavMenuFlag(true);
                    }}>
                    <MenuIcon className='text-3xl' />
                </div>
                
            </div>
        </>

    )
}
