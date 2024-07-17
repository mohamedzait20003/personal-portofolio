// Libraries
import React from 'react'

// Icons
import { FaGlobe, FaDesktop, FaMobileAlt, FaList } from 'react-icons/fa';

// Filter Tags
const FilterTags = {
    'All': <FaList />,
    'Web': <FaGlobe />,
    'Desktop': <FaDesktop />,
    'Mobile': <FaMobileAlt />
};

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button className={`flex flex-row items-center justify-center gap-5 rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${isSelected ? 'text-white bg-[#f9004d]' : 'text-slate-200 border-slate-200 hover:border-white'}`} onClick={onClick}>
        {FilterTags[name]}
        <span className='hidden md:flex'>{name}</span>
    </button>
  )
}

export default ProjectTag