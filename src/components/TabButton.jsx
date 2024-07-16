import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    
    return (
        <button onClick={selectTab} className={`mr-3 cursor-pointer ${active ? 'border-b border-[#fe98b8]' : 'border-none'}`}>
            <p className={`font-semibold hover:text-[#f9004d] ${active ? 'border-b text-[#fe98b8]' : 'text-white'}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton