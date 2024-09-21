'use client';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react'
import Button from './SiteButton';
import { project } from '@/lib/types';

// Images
import hlNHL from '@/public/images/projects/higher_lower_nhl.png';
import dealership from '@/public/images/projects/dealership.png';
import footprint from '@/public/images/projects/footprint.png';
import isoRoom from '@/public/images/projects/iso_room.png';
import steam from '@/public/images/projects/steam_engine.png';
import Image from 'next/image';

export default function ProjectCards() {
    const [projects] = useState<project[]>([
        {
            title: 'Steam Engine',
            url: 'https://github.com/43Goose/Steam-Engine',
            image: steam
        },
        {
            title: 'Isometric Room',
            url: 'https://isometric-room-eight.vercel.app/',
            image: isoRoom
        },
        {
            title: 'Footprint',
            url: 'https://footprint-v3w8.onrender.com',
            image: footprint
        },
        {
            title: 'Mock Car Dealership',
            url: 'https://car-dealership-olive.vercel.app/',
            image: dealership
        },
        {
            title: 'Higher / Lower NHL',
            url: 'https://higherlowernhl.com',
            image: hlNHL
        }
    ]);
    const [swiped, setSwiped] = useState<project[]>([]);


    return (
        <div className='relative w-full flex items-center justify-center'>
            <div className='relative w-80 h-96 rounded-3xl border-4 border-accent shadow-md shadow-accent overflow-hidden md:w-4/5 md:h-[650px] lg:w-2/3'>
                {projects.map((p, i) => (
                    <Card key={i} project={p} swiped={swiped} setSwiped={setSwiped} cardsLength={projects.length} />
                ))}
            </div>
        </div>
    )
}



function Card({ project, swiped, setSwiped, cardsLength }: { project: project; swiped: project[]; setSwiped: React.Dispatch<React.SetStateAction<project[]>>; cardsLength: number }) {
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }));

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: (window.innerWidth * 2) * -1,
            },
            onStart: () => {
                setSwiped((arr: project[]) => [...arr, project]);
            },
            onRest: () => {
                if (swiped.length === cardsLength - 1) setSwiped([]);
                api.start({
                    to: {
                        x: 0,
                    }
                })
            }
        });
    }

    return (
        <animated.div
            className={`absolute w-full h-full overflow-hidden ${swiped.includes(project) ? 'z-0 transition-[z-index] delay-300' : 'z-10'}`}
            style={{
                ...springs,
            }}
        >
            <div className='h-full w-full'>
                <Image
                    src={project.image}
                    alt={project.title}
                    className='h-full w-auto object-cover'
                />
            </div>
            <div className='absolute w-full bottom-0 text-center py-2 md:py-4 bg-primary bg-opacity-50 md:px-24 md:text-left'>
                <a
                    className='w-min flex justify-center items-center gap-2 mx-auto mb-4 md:mx-0 md:justify-start hover:cursor-pointer'
                    href={project.url}
                    target='_blank'
                >
                    <h1 className='text-2xl md:text-5xl text-nowrap hover:underline'>{project.title}</h1>
                    <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className='md:text-3xl'
                    />
                </a>
                <Button text='NEXT' clickFn={handleClick} />
            </div>
        </animated.div>
    )
}