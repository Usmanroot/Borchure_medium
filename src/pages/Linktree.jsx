import React from 'react'
import twitch from '../assets/twitch.svg'
import kick from '../assets/kick.svg'
import youtube from '../assets/youtube.svg'
import discord from '../assets/discord.svg'
import telegram from '../assets/telegram.svg'
import donate from '../assets/donate.svg'
import boosty from '../assets/boosty.svg'
import tiktok from '../assets/tiktok.svg'
import steam from '../assets/steam.svg'
import vk from '../assets/vk.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

export default function Linktree({
  title = "My Socials & Links",
  socials = [
    { name: 'Twitch', icon: twitch, url: 'https://twitch.tv', color: 'hover:border-purple-500 hover:shadow-purple-500/50 hover:text-purple-300' },
    { name: 'Kick', icon: kick, url: 'https://kick.com', color: 'hover:border-green-500 hover:shadow-green-500/50 hover:text-green-300' },
    { name: 'YouTube', icon: youtube, url: 'https://youtube.com', color: 'hover:border-red-500 hover:shadow-red-500/50 hover:text-red-300' },
    { name: 'Discord', icon: discord, url: 'https://discord.gg', color: 'hover:border-indigo-500 hover:shadow-indigo-500/50 hover:text-indigo-300' },
    { name: 'Telegram', icon: telegram, url: 'https://t.me', color: 'hover:border-sky-400 hover:shadow-sky-400/50 hover:text-sky-300' },
    { name: 'DonatePay / DA', icon: donate, url: 'https://donationalerts.com', color: 'hover:border-amber-400 hover:shadow-amber-400/50 hover:text-amber-300' },
    { name: 'Boosty', icon: boosty, url: 'https://boosty.to', color: 'hover:border-orange-500 hover:shadow-orange-500/50 hover:text-orange-300' },
    { name: 'TikTok', icon: tiktok, url: 'https://tiktok.com', color: 'hover:border-pink-500 hover:shadow-pink-500/50 hover:text-pink-300' },
    { name: 'Steam', icon: steam, url: 'https://store.steampowered.com', color: 'hover:border-blue-600 hover:shadow-blue-600/50 hover:text-blue-300' },
    { name: 'VK / VK Play', icon: vk, url: 'https://vk.com', color: 'hover:border-blue-400 hover:shadow-blue-400/50 hover:text-blue-200' },
    { name: 'X / Twitter', icon: twitter, url: 'https://x.com', color: 'hover:border-slate-300 hover:shadow-slate-300/50 hover:text-slate-200' },
    { name: 'Instagram', icon: instagram, url: 'https://instagram.com', color: 'hover:border-fuchsia-500 hover:shadow-fuchsia-500/50 hover:text-fuchsia-300' },
  ]
}) {
  return (
    <div className='w-full max-w-[1600px] mx-auto p-5 md:p-12'>
      <div className='bg-zinc-900/90 backdrop-blur-xl border-8 border-cyan-500/40 p-6 md:p-12 rounded-2xl shadow-2xl shadow-purple-500/50 w-full'>
        
        {/* Заголовок */}
        <h1 className='text-center text-5xl md:text-7xl text-cyan-400 font-[glitch] mb-10 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'>
          {title}
        </h1>

        {/* Сетка кнопок */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-5 px-6 bg-purple-600/80 border-2 border-cyan-500/40 rounded-xl flex items-center justify-center gap-3 text-white text-lg md:text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-purple-600 shadow-lg ${social.color}`}
            >
              {/* Рендерим иконку только если она передана */}
              {social.icon && (
                <img 
                  src={social.icon} 
                  alt={`${social.name} icon`} 
                  className='w-7 h-7 md:w-8 md:h-8 object-contain invert'
                />
              )}
              <span>{social.name}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}