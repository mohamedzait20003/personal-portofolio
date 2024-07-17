// Libraries
"use client";
import React from 'react'
import Image from 'next/image';

// Icons
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='w-full flex flex-col items-center justify-center mt-8 pt-5'>
            <div className='flex w-1/2'>
                <button className='w-full rounded-t-xl bg-[#f9004d] py-4 hover:bg-[#135b5b]' onClick={handleClick}>
                    <p className='flex flex-row items-center justify-center gap-5 text-white text-2xl text-bold'>Go up<span className='text-xl border-2 border-white rounded-full px-1 py-1'><FaArrowUp /></span></p>
                </button>
            </div>
            <div className='w-full flex flex-row items-center justify-between bg-[#191919] p-10'>
                <div className='w-full flex flex-row items-center space-x-4'>
                    <Image
                        src='/Logo.png'
                        alt='hero image'
                        width={50}
                        height={50} 
                    />
                    <h1 className='text-2xl font-bold text-white'>
                        MZ
                    </h1>
                </div>
                <p className='w-full flex items-end justify-end text-white text-lg text-bold'>
                    All Rights Reserved &copy; 2024 to Mohammed Zaitoun
                </p>
            </div>
        </footer>
    )
}

export default Footer