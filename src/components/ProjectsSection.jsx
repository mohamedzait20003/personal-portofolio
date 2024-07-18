// Libraries
"use client";
import React, { useState, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'

// Components
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'NextJS Portoflio Website',
        Tag: 'Web',
        image: '/projects/Project 01.png',
        icons: [
            'NextJS', 
            'ReactJS', 
            'JavaScript', 
            'TailwindCSS',
            'Git'
        ],
        GithubUrl: 'https://github.com/mohamedzait20003/personal-portofolio',
        DeployUrl: '',
    },
    {
        id: 1,
        title: 'ReactJS Code Rooms Website',
        Tag: 'Web',
        image: '/projects/Project 02.png',
        icons: [
            'ReactJS', 
            'JavaScript', 
            'TailwindCSS', 
            'WebSockets',
            'Git'
        ],
        GithubUrl: 'https://github.com/mohamedzait20003/realtime-code-collobaration',
        DeployUrl: '',
    },
]

const FilterTags = [
    'All',
    'Web',
    'Desktop',
    'Mobile'
]

const getBorderClasses = (projectsDataLength, index) => {
    let borderClasses = 'border-2 sm:border-8 border-white ';

    if (projectsDataLength === 1) {
        borderClasses += 'lg:border-t-8 lg:border-b-8 lg:border-l-8 lg:border-r-8';
    } else if (projectsDataLength === 2) {
        if (index === 0) {
            borderClasses += 'lg:border-t-8 lg:border-l-8 lg:border-b-8 lg:border-r-0';
        } else {
            borderClasses += 'lg:border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0';
        }
    } else {
        if (index === 0) {
            borderClasses += 'lg:border-t-8 lg:border-l-8 lg:border-b-0 lg:border-r-0';
        } else if (index === 1) {
            borderClasses += 'lg:border-t-8 lg:border-r-8 lg:border-b-0 lg:border-l-0';
        } else if (index % 2 === 0) {
            if (index === projectsDataLength - 1 || index === projectsDataLength - 2) {
                borderClasses += 'lg:border-b-8 lg:border-l-8 lg:border-r-0 lg:border-t-0';
            } else {
                borderClasses += 'lg:border-l-8 lg:border-t-0 lg:border-b-0 lg:border-r-0';
            }
        } else {
            if (index === projectsDataLength - 1) {
                borderClasses += 'lg:border-b-8 lg:border-r-8 lg:border-l-0 lg:border-t-0';
            } else {
                borderClasses += 'lg:border-r-8 lg:border-t-0 lg:border-b-0 lg:border-l-0';
            }
        }
    }

    return borderClasses;
};

const ProjectsSection = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setSelectedTag(newTag);
    };
    const filteredprojects = projectsData.filter((project) => {
        return selectedTag === 'All' || project.Tag === selectedTag;
    });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    return (
        <section className='w-full flex flex-col mt-5' id='projects'>
            <h2 className='text-white text-3xl text-center font-bold'>My Projects</h2>
            <div className='flex sm:flex-row items-center justify-center gap-5 text-white mt-7 mb-10'>
                {FilterTags.map((tag, index) => (
                    <ProjectTag key={index} name={tag} onClick={() => handleTagChange(tag)} isSelected={selectedTag === tag} />
                ))}
            </div>
            <div className='w-full flex items-center justify-center mt-10 mb-10'>
                {filteredprojects.length > 0 ? (
                    <div ref={ref} className='grid lg:grid-cols-2 gap-8 md:gap-12 mt-10'>
                        {filteredprojects.map((project, index) => {
                            const borderClasses = getBorderClasses(filteredprojects.length, index);

                            return (
                                <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index*0.4 }}>
                                    <ProjectCard 
                                        key={project.id} 
                                        title={project.title} 
                                        icons={project.icons} 
                                        imgUrl={project.image} 
                                        borderClasses={borderClasses}
                                        Tag={project.Tag} 
                                        gitUrl={project.GithubUrl} 
                                        ViewUrl={project.DeployUrl} 
                                    />
                                </motion.li>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-white text-center text-xl font-bold">No Projects</p>
                )}
            </div>
        </section>
    )
}

export default ProjectsSection