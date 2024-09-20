import React from 'react'
import ProjectCards from './ui/ProjectCards'

export default function Projects() {
    return (
        <div>
            <div className='px-8 mb-10 text-center md:text-left md:px-16'>
                <h1 className='text-3xl mb-4 md:text-6xl'>WHAT HAVE I DONE<span className='text-accent text-shadow-lg shadow-secondary'>?</span></h1>
                <h2
                    className='text-xl md:text-3xl'
                >{'All projects below ( and more! ) are available on my '}
                    <a
                        className='text-accent hover:underline'
                        href='https://github.com/43Goose'
                        target='_blank'
                    >GitHub.</a>
                </h2>
            </div>
            <ProjectCards />
            <h3 className='px-8 mt-8 text-center md:text-left md:px-16'>
                {'Disclaimer: some projects are hosted using free services which may affect load times.'}
            </h3>
        </div>
    )
}
