import React from 'react'

export default function Arts({
  title = "Arts & Fanarts",
  artsList = [
    {
      id: 1,
      title: "Main Character Art",
      author: "@artist_one",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeNkNEtN5x68o6YfEBJtahYatfw7YXx1T2eA_j1eDnA&s=10"
    },
    {
      id: 2,
      title: "Chibi Version",
      author: "@artist_two",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpgKhBIcY9yZHWEwStxYM_X8epj4Ta3QhRsUn8vuwkw&s=10"
    },
    {
      id: 3,
      title: "Emote / Badge Art",
      author: "@artist_three",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BzKpsdvZOzs-Xx1weoZHAq32X2scWwfLyRovi3xNoQ&s=10"
    },
    {
      id: 4,
      title: "Stream Overlay Design",
      author: "@artist_four",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkc_Puz6d-fjviCe8T8CZ-tMHrh-YIP4m3EAmvZHrr6Q&s=10"
    },
    {
      id: 5,
      title: "Stream Overlay Design 2",
      author: "@artist_five",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpzVCKdtS-REiwkDaG7Xw3AN1wvYRExpfNLD9S6jETQ&s=10"
    },
    {
      id: 6,
      title: "Stream Overlay Design 3",
      author: "@artist_six",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyunw66s3uruj1BP_8flRIo1EudYVRrAiz6Dj3zWT2GA&s=10"
    }
  ]
}) {
  return (
    <div className='w-full max-w-[1600px] mx-auto p-5 md:p-12'>
      <div className='bg-zinc-900 backdrop-blur-xl border-8 border-cyan-500/40 p-6 md:p-12 rounded-2xl shadow-2xl shadow-purple-500/50 w-full'>
        
        <h1 className='text-center text-5xl md:text-7xl text-cyan-400 font-[glitch] mb-10 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'>
          {title}
        </h1>

        {/* Сетка: 1-й большой арт слева, остальные красивой сеткой справа */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          
          {/* Главный арт (первый элемент массива) */}
          {artsList[0] && (
            <div className='md:col-span-2 relative group overflow-hidden rounded-xl border-4 border-cyan-400/80 shadow-lg min-h-87.5 md:min-h-125'>
              <img 
                src={artsList[0].url} 
                alt={artsList[0].title}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-cyan-500/30 flex justify-between items-center text-white'>
                <span className='font-bold text-lg text-cyan-300'>{artsList[0].title}</span>
                <span className='text-sm text-purple-200'>Art by {artsList[0].author}</span>
              </div>
            </div>
          )}

          {/* Все остальные арты (со 2-го и до конца массива) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 auto-rows-fr'>
            {/* .slice(1) берёт ВСЕ элементы начиная со 2-го (индекс 1) */}
            {artsList.slice(1).map((art) => (
              <div key={art.id} className='relative group overflow-hidden rounded-xl border-4 border-cyan-400/80 shadow-lg h-55'>
                <img 
                  src={art.url} 
                  alt={art.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-cyan-500/30 flex justify-between items-center text-white'>
                  <span className='font-semibold text-sm text-cyan-300'>{art.title}</span>
                  <span className='text-xs text-purple-200'>{art.author}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}