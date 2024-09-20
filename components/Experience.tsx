import React from 'react'
import ExperienceCard from './ui/ExperienceCard';

// Icons (most not available through fontawesome)
import react from '@/public/svg-icons/brand-react.svg';
import node from '@/public/svg-icons/brand-nodejs.svg';
import next from '@/public/svg-icons/brand-nextjs.svg';
import mongodb from '@/public/svg-icons/brand-mongodb.svg';
import javascript from '@/public/svg-icons/brand-javascript.svg';
import typescript from '@/public/svg-icons/brand-typescript.svg';
import python from '@/public/svg-icons/brand-python.svg';
import csharp from '@/public/svg-icons/brand-c-sharp.svg';

export default function Experience() {
    const expItems = [
        {
            name: 'React',
            icon: react
        },
        {
            name: 'NodeJS',
            icon: node
        },
        {
            name: 'NextJS',
            icon: next
        },
        {
            name: 'MongoDB',
            icon: mongodb
        },
        {
            name: 'Javascript',
            icon: javascript
        },
        {
            name: 'Typescript',
            icon: typescript
        },
        {
            name: 'Python',
            icon: python
        },
        {
            name: 'C Sharp',
            icon: csharp
        }
    ];

    return (
        <div className='px-8 mb-12 text-center md:text-left md:px-16'>
            <h1 className='text-3xl mb-8 md:text-6xl md:mb-12'>WHAT DO I KNOW<span className='text-accent text-shadow-lg shadow-secondary'>?</span></h1>
            <h2 className='hidden text-xl md:block md:text-3xl'>{"I would consider these to be my main strengths, however, I'm still learning new skills and concepts everyday to keep up with the rapidly changing landscape of web development and computer science."}</h2>
            <div className='w-4/5 grid grid-cols-1 gap-3 p-4 mt-8 mx-auto rounded-lg bg-accent md:grid-cols-4'>
                {expItems.map((item) => (
                    <ExperienceCard
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}
