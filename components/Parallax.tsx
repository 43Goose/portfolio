"use client";
import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import img1 from '@/public/images/landing/Seawall.png';
import img2 from '@/public/images/landing/Water.png';
import img3 from '@/public/images/landing/Close.png';
import img4 from '@/public/images/landing/Mid.png';
import img5 from '@/public/images/landing/Far.png';
import img6 from '@/public/images/landing/Sky.png';
import Image from 'next/image';
import Landing from './Landing';

export default function ParallaxContainer() {
    return (
        <div className='hidden relative w-full h-screen overflow-hidden -z-50 md:block'>
            <ParallaxBackground />
            <ParallaxForeground />
        </div>
    )
}

function ParallaxBackground() {
    return (
        <div className='fixed top-0 w-full h-screen overflow-hidden'>
            <ParallaxProvider>
                <ParallaxBanner className='sticky top-0 w-full h-full bg-slate-700 -z-30'>
                    <ParallaxBannerLayer speed={-2}>
                        <Image src={img6} alt='' className='h-full w-full object-cover' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer expanded={false} translateY={[0.5, 5]} shouldAlwaysCompleteAnimation>
                        <Image src={img5} alt='' className='h-full w-full object-cover' />
                    </ParallaxBannerLayer >
                    <ParallaxBannerLayer expanded={false} translateY={[0.5, 1]} shouldAlwaysCompleteAnimation>
                        <Image src={img4} alt='' className='h-full w-full object-cover' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer expanded={false} translateY={[0.5, -1]} shouldAlwaysCompleteAnimation>
                        <Image src={img3} alt='' className='h-full w-full object-cover' />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer speed={5} expanded={false}>
                        <Image src={img2} alt='' className='h-full w-full object-cover' />
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </ParallaxProvider>
            <div className='absolute top-0 w-full h-full bg-black bg-opacity-20 -z-20' />
            <Landing />
        </div>
    )
}

function ParallaxForeground() {
    return (
        <div className='absolute bottom-0 w-full h-full'>
            <div className='w-full h-full'>
                <Image src={img1} alt='' className='h-full w-full' />
            </div>
        </div>
    )
}