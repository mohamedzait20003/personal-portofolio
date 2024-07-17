// Libraries
import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    default: { width: 0 },
    active: { width: "100%" },
  };

const TabButton = ({ active, selectTab, children }) => {
    
    return (
        <button onClick={selectTab} className={`mr-3 cursor-pointer ${active ? '' : 'border-none'}`}>
            <p className={`font-semibold hover:text-[#f9004d] ${active ? 'text-[#fe98b8]' : 'text-white'}`}>
                {children}
            </p>
            <motion.div animate={active ? "active" : "default"} variants={variants} className="h-1 bg-[#fe98b8] mt-2 mr-3"></motion.div>
        </button>
    )
}

export default TabButton