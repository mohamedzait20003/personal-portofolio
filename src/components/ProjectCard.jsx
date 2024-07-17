// Libraries
"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Icons 
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid';
import { FaJs, FaReact, FaPhp, FaPython, FaLaravel, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDjango, SiMysql, SiCsharp, SiCplusplus, SiWebrtc } from 'react-icons/si';

const iconComponents = {
    NextJS: <SiNextdotjs />,
    ReactJS: <FaReact />,
    JavaScript: <FaJs />,
    Git: <FaGitAlt />,
    TailwindCSS: <SiTailwindcss />,
    Php: <FaPhp />,
    Python: <FaPython />,
    Laravel: <FaLaravel />,
    Django: <SiDjango />,
    MySQL: <SiMysql />,
    Csharp: <SiCsharp />,
    Java: <FaJava />,
    Cplusplus: <SiCplusplus />,
    WebSockets: <SiWebrtc />
};


const ProjectCard = ({ imgUrl, title, icons, borderClasses, gitUrl, ViewUrl }) => {
    return (
        <div className={`w-full h-full bg-[#2f2f2f] px-10 py-5 rounded-md ${borderClasses}`}>
            <div className='mb-5 rounded-t-xl relative group'>
                <Image 
                    src={imgUrl} 
                    alt={title} 
                    width={700} 
                    height={450} 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-t-xl" 
                />
                <div className='overlay items-center justify-center absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500'>
                    <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#dcdcdc] hover:border-white group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-[#a8a8a8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link href={ViewUrl} className='h-14 w-14 ml-10 border-2 relative rounded-full border-[#dcdcdc] hover:border-white group/link'>
                        <EyeIcon className='h-10 w-10 text-[#a8a8a8] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            <h3 className='text-white text-lg text-center mb-5'>{title}</h3>
            <div className='flex flex-row items-start space-x-4 pt-4 border-t-2 border-t-white'>
                {icons.map((icon, index) => (
                    <div key={index} className='text-white text-4xl'>
                        {iconComponents[icon]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard