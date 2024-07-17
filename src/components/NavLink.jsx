import React from 'react'
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link 
        href={href}
        className='block py-2 pl-3 pr-4 text-white hover:text-[#f9004d] sm:hover:text-white'
    >
        {title}
    </Link>
  )
}

export default NavLink