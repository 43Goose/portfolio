'use client';
import React from 'react';

export default function Button({
    text,
    clickFn,
}: {
    text: string;
    clickFn: () => void;
}) {
    return (
        <button
            className='bg-accent text-xl px-4 py-2 rounded-xl hover:drop-shadow-lg active:bg-cyan-800 active:scale-90'
            onClick={() => clickFn()}
        >
            {text}
        </button>
    )
}
