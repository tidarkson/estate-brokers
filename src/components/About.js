import React, { useState } from 'react'
import data from '../data/about'

function About() {
    // eslint-disable-next-line
    const [aboutData, setAboutData] = useState(data)
    return (
        <>
            <div className='pt-32 px-32'>
                <h1 className='text-6xl text-indigo-900 font-bold pb-10'>About Estate Brokers</h1>

                <section className='grid grid-cols-2 gap-10'>

                    <div className="grid grid-cols-2 gap-5">
                        {aboutData.map((data) => {
                            const { id, image } = data

                            return (
                                <div key={id} className=" ">
                                    <img src={image} alt="aboutImage" />
                                </div>
                            )
                        })}


                    </div>
                    <div>
                        <p className='mt-8 text-indigo-900 text-lg'>Estate Brokers is a real estate and property website in Nigeria with property listings for sale. We offer Nigerian property seekers an easy way to find details of property like homes, houses, lands, shops, office spaces and other commercial properties to rent or buy. Estate Brokers provides a platform for advertising property from organisations and Nigerian private property owners.</p>

                        <p className='mt-8 text-indigo-900 text-lg'>Estate brokers is the clear leading property website with lots of users, advertising members and properties. Our advertisers are property professionals such as estate agents, letting(rental) agents, new homes developers and Nigerian property owners who offer property within Nigeria for property hunters.</p>

                        <div className='mt-10 flex gap-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='font-bold text-6xl text-indigo-900'>345</h1>
                                <p className='text-indigo-900'>Areas covered</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='font-bold text-6xl text-indigo-900'>4,656</h1>
                                <p className='text-indigo-900'>Property listings</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='font-bold text-6xl text-indigo-900'>45</h1>
                                <p className='text-indigo-900'>Agents</p>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}

export default About