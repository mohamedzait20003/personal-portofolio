import React from 'react'

// components
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='w-full sm:hidden flex flex-row py-4 items-center justify-center space-x-4 bg-[]'>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink key={index} href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay