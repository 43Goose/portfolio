'use client';
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { LampContainer } from './ui/Lamp';

export default function Landing() {
    const [showName, setShowName] = useState(false);

    return (
        <div className='absolute top-1/4 left-20 flex flex-col text-9xl font-bold'>
            <TypeAnimation
                sequence={[
                    '<GOOSE', // Types '<GOOSE'
                    300, // Waits 0.5s
                    '<GOOSE/>', // Types rest of <GOOSE/>
                    () => {
                        setShowName(true);
                    },
                ]}
                wrapper="span"
                cursor={false}
                className='inline-block text-transparent font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text code-font'
            />
            {showName && <h1 className='absolute text-5xl w-max h-max bottom-0 left-0 right-0 m-auto text-shadow-lg shadow-black animate-fade-in'>OWEN EDWARDS</h1>}
        </div>
    )
}

export function LandingMobile() {
    const [showName, setShowName] = useState(false);

    return (
        <div className='w-full h-dvh md:hidden'>
            <LampContainer bgColor='bg-primary'>
                <div className='absolute text-8xl -top-40'>
                    <TypeAnimation
                        sequence={[
                            '<GOOSE', // Types '<GOOSE'
                            300, // Waits 0.5s
                            '<GOOSE/>', // Types rest of <GOOSE/>
                            () => {
                                setShowName(true);
                            },
                        ]}
                        wrapper="span"
                        cursor={false}
                        className='inline-block w-full text-transparent font-bold bg-gradient-to-b from-accent to-secondary bg-clip-text code-font'
                    />
                    {showName && <h1 className='absolute text-4xl w-max h-max bottom-0 left-0 right-0 m-auto text-transparent bg-gradient-to-b from-light to-gray-300 bg-clip-text animate-fade-in'>OWEN EDWARDS</h1>}
                </div>
            </LampContainer>
        </div>
    )
}
