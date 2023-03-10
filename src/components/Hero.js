import React from 'react'
import HeroImg from '../images/hero.png'

function Hero() {
  return (
    <>
    <section > 
      {/* className='relative h-screen' */}
        <div className='flex flex-col justify-center h-screen px-32'>
            <h1 className='text-indigo-900 font-bold text-6xl leading-snug w-1/2 mb-10'>
                <span className='text-yellow-400'>Home</span> is where your Wi-Fi connects automatically
            </h1>
            <p className='text-indigo-500'>Let's help you find a homely apartment! 🚀🔥</p>
        </div>

        <div className='absolute top-0 right-0'>
          <img src={HeroImg} alt="Hero" className='hero'/>
        </div>
    </section>
        
    </>
  )
}

export default Hero 