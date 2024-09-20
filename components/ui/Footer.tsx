import { faFreeCodeCamp, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full h-16 mt-16 bg-black border-t-2 border-accent'>
            <div className='w-full h-full flex items-center justify-evenly md:px-16 md:justify-between'>
                <p>Owen Edwards</p>
                <div className='flex items-center gap-4 text-2xl'>
                    <a href='https://github.com/43Goose' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='https://x.com/Owen_Edwards30' target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href='https://www.freecodecamp.org/GooseFCC' target='_blank'>
                        <FontAwesomeIcon icon={faFreeCodeCamp} />
                    </a>
                </div>
            </div>
        </div>
    )
}
