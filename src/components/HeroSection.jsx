"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className='mt-28'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1 }} className='w-full col-span-7 place-self-center place-items-center text-center lg:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#f9004d]'>Hello, I'm{" "}</span> 
                        <br></br>
                        <span className='inline-block'>
                            <TypeAnimation
                                sequence={[
                                    "Mohamed Zaitoun",
                                    1000,
                                    "Fullstack Developer",
                                    1000,
                                    "Software Engineer",
                                    1000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <div className='mt-8'>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-8 bg-gradient-to-br from-blue-500 via-purple-500 to-[#f9004d] text-white hero-hover-1'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mt-4 bg-gradient-to-br from-blue-500 via-purple-500 to-[#f9004d] text-white hero-hover-1' 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = 'https://drive.google.com/uc?export=download&id=1Y7LPZrAXXbS1qTW6ldFZhWaDxEHOP43s';
                                link.download = 'CV.pdf'; 
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <span className='block bg-[#003434] rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </motion.div>
                <div className='col-span-5 place-self-center place-content-center mt-16 lg:mt-0'>
                    <div className='rounded-full bg-[#005a5a] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image 
                            src='/Hero.png'
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;