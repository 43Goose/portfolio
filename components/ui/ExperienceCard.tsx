import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function ExperienceCard({ name, icon }: { name: string; icon: StaticImageData }) {
    return (
        <div className='w-full flex items-center gap-2 text-3xl p-2 px-6 rounded-lg bg-primary'>
            <Image
                src={icon}
                alt={name}
                className='w-8 h-8'
            />
            <h1>{name}</h1>
        </div>
    )
}
