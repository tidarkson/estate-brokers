import React from 'react'
import testImg from '../images/testimonial.png'

function Testimonials() {
  return (
    <>
            <h2 className='px-32 pt-32 pb-10 text-4xl font-bold text-indigo-900'>Word on the street</h2>

        <section className='relative'>

            <div className='bg-purple-300 w-2/3'>
                <p className='text-indigo-900 text-sm w-1/2 pl-32 pt-20 pb-5'><span className='font-bold'>Estate Brokers</span> has helped me find a good home. I have moved in with my family and I can say we are so happy. The process of finding a good home as so seamless and we didn't have to look to hard to get a place.</p>
                <h2 className='px-32 py-2 text-2xl text-indigo-900  font-bold'>Jejelaye Surulere </h2>
                <h2 className='uppercase text-indigo-900 px-32 pb-32'>Lagos, Nigeria</h2>
            </div>
            <div className='absolute top-10 right-0'>
                <div className='pl-96'>
                <button className='text-3xl text-indigo-400'>&larr;</button>
                <button className='text-6xl text-indigo-400'>&rarr;</button>
                </div>             
                <img src={testImg} alt="" className='' />
            </div>
            <div className='px-32 pt-20'>
                <button className='bg-purple-700 text-white uppercase font-bold px-10 py-4 rounded-full text-sm'>Read Story</button>
            </div>
        </section>
    </>
  )
}

export default Testimonials