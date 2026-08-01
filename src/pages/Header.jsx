import React from 'react'

export default function Header({ streamerSlug = 'Usman' }) {
    return (
        <header className="relative flex flex-col items-center justify-center py-12 overflow-hidden bg-zinc-900">
            <div className="absolute -z-10 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center text-center">
                <h1
                    className="relative text-5xl sm:text-8xl md:text-9xl font-[cyber] tracking-widest uppercase
                     bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent
                     drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]
                     hover:scale-105 transition-transform duration-300 ease-out selection:bg-cyan-500 selection:text-black"
                >
                    {streamerSlug}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                    <span className="h-0.5 w-8 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    <p className="text-[10px] md:text-2xl font-[cyber] tracking-widest uppercase text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
                        <span className='animate-[flicker_3s_ease-in-out_infinite]'>Very</span> <span className='animate-[flicker_4s_ease-in-out_infinite]'>Important</span> <span className='animate-[flicker_5s_ease-in-out_infinite]'>Text</span>
                    </p>
                    <span className="h-0.5 w-8 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </div>
            </div>
        </header>
    )
}