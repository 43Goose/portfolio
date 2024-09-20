'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function About() {
    const about = "I'm a self-taught, full-stack web and software developer from Vancouver, Canada. I take pride in the finer details and overall quality of my work. I mostly use Javascript, however, am knowledgeable in a plethora of programming languages. I'm always trying to learn something new skills and expand upon my current ones.";
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    const titleRef = useRef(null);
    const triggerRef = useRef(null);
    const contactRef = useRef(null);

    const setRef = (ref: HTMLSpanElement) => {
        lettersRef.current.push(ref);
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(
            titleRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: 'top bottom-=100px',
                    end: 'top bottom-=300px'
                },
                transform: 'translate(0, 0)'
            }
        );

        gsap.to(
            contactRef.current,
            {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top bottom",
                    toggleClass: 'animate-fade-in'
                },
            }
        );

        const aboutReveal = gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top bottom-=300px",
                    end: "center center"
                },
                color: '#FDFFFC',
                duration: 5,
                stagger: 1
            }
        );

        return () => {
            aboutReveal.kill();
        }
    });

    return (
        <div className="w-full px-8 md:px-16" ref={triggerRef}>
            <div className="w-max mx-auto mb-8 overflow-hidden md:mx-0 md:mb-12">
                <div className="text-3xl -translate-x-full md:text-6xl" ref={titleRef}>WHO AM I<span className="text-accent text-shadow-lg shadow-secondary">?</span></div>
            </div>
            <div className="text-center text-xl text-transparent md:text-left md:text-3xl md:max-w-[75%]">
                {about.split(" ").map((letter, i) => (
                    <span ref={setRef} key={i}>{letter + ' '}</span>
                ))}
                <div className="mt-24 md:mt-48">
                    <h2 className="text-light" ref={contactRef}>Feel free to contact me <a href="mailto: goose.dvlpr@gmail.com" className="text-accent hover:text-blue-500 hover:underline">here</a> if you like my work!</h2>
                </div>
            </div>
        </div>
    )
}