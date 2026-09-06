import React from 'react'

export default function About({
    aboutText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,

voluptatem quam. Eligendi veniam necessitatibus minima? Soluta asperiores dolores dicta sequi, neque animi esse ipsum nobis repudiandae reprehenderit dolorem voluptate ratione! Asperiores a alias quam repellendus! Facere debitis totam itaque corrupti perferendis illo? Voluptate inventore perspiciatis ea accusantium voluptatibus culpa, quam laudantium voluptates repudiandae suscipit alias, maxime eaque minus non consequatur. Earum, veniam voluptatibus explicabo saepe omnis voluptates pariatur eveniet eaque cupiditate obcaecati magni quisquam voluptate aspernatur, doloremque quibusdam! Harum sapiente beatae molestiae earum ullam distinctio aliquid voluptas exercitationem eius maxime.

Iste dolorum blanditiis distinctio animi iusto quidem laborum? Voluptas expedita eaque autem facilis sapiente, repellat aperiam cupiditate, assumenda officia, odit recusandae commodi eligendi? Cupiditate perspiciatis reiciendis sint alias, consequuntur assumenda! Sapiente ea debitis quam alias obcaecati eius vitae laborum qui voluptatum, aut, nemo cumque vel voluptatibus vero a nisi molestiae pariatur eos officia, totam numquam enim dicta aliquam. Accusamus, ipsa.`,
    profileData = {
        "Name / Alias": "Usman",
        "Age": "20 y.o.",
        "Height": "180 cm",
        "Favorite Food": "Burger / Pizza",
        "Favorite Game": "Ultrakill / Cyberpunk 2077",
        "Main Achievement": "1,000,000 Views on Twitch"
    },
    artUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeNkNEtN5x68o6YfEBJtahYatfw7YXx1T2eA_j1eDnA&s=10"
}) {

    return (
        <div className='border-t-2 border-cyan-500/30 p-4 md:p-12 flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-10 w-full max-w-[1600px] mx-auto'>
            <div className='w-full lg:w-2/5 bg-zinc-900 backdrop-blur-xl border-4 md:border-8 border-cyan-500/40 p-5 md:p-12 rounded-2xl shadow-purple-500/50 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:border-cyan-500 shadow-2xl flex flex-col items-center justify-between'>
                <div className='relative group mb-6 md:mb-8 w-full flex justify-center'>
                    <img
                        src={artUrl}
                        alt="Streamer Art"
                        className='w-full max-w-70 h-48 sm:h-64 md:max-w-none md:w-96 md:h-96 object-cover rounded-xl border-4 border-cyan-400 shadow-lg group-hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div className='w-full text-white'>
                    <h2 className='text-center text-3xl md:text-5xl text-cyan-400 font-[glitch] mb-6'>Profile Info</h2>
                    <div className='grid grid-cols-1 gap-3 md:gap-4'>
                        {Object.entries(profileData).map(([key, value], index) => (
                            <div key={index} className='bg-zinc-800/60 p-3 px-4 md:p-4 md:px-6 rounded-xl border border-cyan-500/30 flex justify-between items-center text-sm sm:text-base md:text-xl gap-2'>
                                <span className='text-cyan-300 font-semibold shrink-0'>{key}:</span>
                                <span className='text-white font-medium text-right truncate'>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-3/5 bg-zinc-900 backdrop-blur-xl border-4 md:border-8 border-cyan-500/40 p-5 md:p-12 rounded-2xl shadow-purple-500/50 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:border-cyan-500 shadow-2xl flex flex-col justify-between'>
                <div>
                    <h1 className='text-center text-4xl sm:text-6xl md:text-8xl text-cyan-400 font-[glitch] mb-6 md:mb-8'>About Me</h1>
                    <p className='text-center text-white text-sm sm:text-base md:text-2xl leading-relaxed whitespace-pre-line'>
                        {aboutText}
                    </p>
                </div>
            </div>

        </div>
    )
}