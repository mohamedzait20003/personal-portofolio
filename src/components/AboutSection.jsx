// Librairies
"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'

// Icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaPython, FaLaravel, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMysql, SiCsharp, SiCplusplus } from 'react-icons/si';

// Components
import TabButton from './TabButton'

// TAB_DATA
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc grid grid-cols-2 text-xl mt-5 space-y-1'>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaHtml5 /></span>HTML5</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaCss3 /></span>CSS</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaJs /></span>Javascript</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaReact /></span>ReactJS</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><SiNextdotjs /></span>NextJS</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaPhp /></span>PHP</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaPython /></span>Python</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaLaravel /></span>Laravel</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><SiDjango /></span>Django</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><SiMysql /></span>MySQL</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><SiCsharp /></span>C#</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaJava /></span>Java</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><SiCplusplus /></span>C/C++</li>
                <li className='flex flex-row before:content-["•"] before:mr-3 before:mt-1'><span className='mr-3 mt-1'><FaGitAlt /></span>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className='list-disc flex text-xl pl-5 items-start'>
                <li>Egypt University Of Informatics</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content:(
            <ul className='list-disc flex flex-col text-xl pl-5 items-start space-y-2'>
                <li>ITI FullStack Training using Php</li>
                <li>IBM SkillsBuild in Cybersecurity</li>
                <li>CompTIA CySA+ Cybersecurity Analyst</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const[tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='h-full text-white bg-[#191919]' id='about'>
            <div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/About.jpeg" className='min-w-full' width={500} height={500} />
                <div className='h-full flex flex-col text-center text-balance lg:text-left lg:text-wrap'>
                    <div className='flex flex-col mt-10 lg:mt-4'>
                        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                        <h3 className='text-lg text-[#a056e6]'>Engineer & Developper</h3>
                        <p className='text-base lg:text-lg mt-10'>
                            I am a fullstack developer with 3 years of expertise crafting immersive digital experiences, Proficient in PHP Laravel, Python Django, and React JS. I bring creativity and precision to every project. Let's turn your ideas into captivating web realities!
                        </p>
                        <div className='flex flex-row mt-10 items-center justify-center lg:items-start lg:justify-start gap-10 ml-10 lg:ml-0'>
                            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton> 
                            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> Certifications </TabButton>  
                        </div>
                    </div>
                    <div className='lg:h-72 mt-8 mb-6'>
                        {
                            TAB_DATA.find((t) => t.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection