'use client';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Navmenu from './Navmenu';

export default function Navbar() {
    return (
        <div className='fixed top-0 w-14 h-full p-4 z-50 md:h-14 md:w-full'>
            <Navmenu />
            <div className='fixed right-0 top-6 h-14 pr-8 flex flex-row items-center gap-4 md:top-4'>
                <Link href="https://github.com/43Goose" target='_blank' className='flex items-center'>
                    <FontAwesomeIcon
                        icon={faGithub}
                        className='text-4xl'
                    />
                </Link>
                <Link href="mailto: goose.dvlpr@gmail.com" target='_blank' className='flex items-center'>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className='text-4xl'
                    />
                </Link>
            </div>
        </div>
    )
}
