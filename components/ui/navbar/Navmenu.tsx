'use client';
import React, { useState } from 'react'
import Navlinks from './Navlinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navmenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col items-center py-4 rounded-full bg-opacity-90 md:flex-row md:px-4 ${isOpen ? 'w-14 h-1/2 bg-secondary animate-nav-open-mobile md:animate-nav-open md:w-full md:h-14' : 'w-14 h-14 bg-transparent animate-nav-close-mobile md:animate-nav-close'}`}>
      <div className='flex flex-col items-center md:flex-row'>
        <a onClick={() => setIsOpen(!isOpen)} className='flex items-center hover:cursor-pointer'>
          <FontAwesomeIcon
            icon={faBars}
            className='text-4xl'
          />
        </a>
        <div className={`h-0.5 w-8 my-4 transition-colors md:h-8 md:w-0.5 md:mx-4 ${isOpen ? 'bg-light' : 'bg-transparent'}`} />
      </div>
      <div className='grow w-full overflow-hidden md:w-auto'>
        <Navlinks isOpen={isOpen} />
      </div>
    </div>
  )
}
