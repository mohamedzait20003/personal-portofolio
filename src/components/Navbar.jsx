// Libraries
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

// Components
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-10 bg-black bg-opacity-70'>
      <div className='flex flex-wrap flex-row items-center justify-between mx-auto px-4 py-6'>
        <Link className='flex flex-row items-center space-x-4' href={"/"}>
            <Image
                src='/Logo.png'
                alt='hero image'
                width={50}
                height={50} 
            />
            <h1 className='text-4xl font-bold text-white'>
              MZ
            </h1>
        </Link>
        <div className='mobile-menu block sm:hidden'>
          {
            !navbarOpen ? ( 
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5' />
              </button> 
            ):( 
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5' />
              </button> 
            )}
        </div>
        <div className='menu hidden sm:block w-auto rounded-full bg-white px-1 py-1' id='navbar'>
          <div className='bg-[#003434] px-1 py-1 rounded-full'>
            <ul className='flex p-2 md:p-0 md:flex-row md:space-x-8'>
              {navLinks.map((link, index) => (
                <li key={index} className='hover:bg-gradient-to-r hover:from-purple-400 hover:to-[#f9004d] px-2 py-2 rounded-full'>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks} /> : null
      }
    </nav>
  )
}

export default Navbar