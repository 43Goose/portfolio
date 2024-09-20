import { faCircleInfo, faFile, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Navlinks({ isOpen }: { isOpen: boolean }) {
    return (
        <div className={`w-full h-full flex flex-col justify-evenly text-lg transition-colors md:w-1/2 md:flex-row ${!isOpen && 'text-transparent'}`}>
            <Link href="#about" className='text-center shadow-black hover:scale-110 hover:text-shadow-sm'>
                <h2 className='hidden md:block'>About</h2>
                <div className='block md:hidden'>
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        className='text-3xl'
                    />
                </div>
            </Link>
            <Link href="#experience" className='text-center shadow-black hover:scale-110 hover:text-shadow-sm'>
                <h2 className='hidden md:block'>Experience</h2>
                <div className='block md:hidden'>
                    <FontAwesomeIcon
                        icon={faWrench}
                        className='text-3xl'
                    />
                </div>
            </Link>
            <Link href="#projects" className='text-center shadow-black hover:scale-110 hover:text-shadow-sm'>
                <h2 className='hidden md:block'>Projects</h2>
                <div className='block md:hidden'>
                    <FontAwesomeIcon
                        icon={faFile}
                        className='text-3xl'
                    />
                </div>
            </Link>
        </div>
    )
}
