import React, {useState} from 'react'
import data from '../data/listings'
import {FaPhone} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {BsHeart} from 'react-icons/bs'

function Listings() {
    // eslint-disable-next-line
    const [cards, setCards] = useState(data)

  return (
    <>
    <div className='flex pt-56 items-center justify-between px-32 mb-5'>
        <h2 className='font-bold text-3xl text-indigo-900'>View Listings</h2>
        <p className='underline text-sm text-indigo-900 cursor-pointer'>View all listings</p>
    </div>
        <section className='px-32 gap-10 grid grid-cols-2 sm:grid'>
            {cards.map((card) => {
            const {id, image, tag1, tag2, tag3, tag4, title, details, location, phone} = card
            return (
                <div key={id} className="border rounded p-5 relative">
                    <img src={image} alt={title} className="w-full rounded-lg mb-2"/>

                    <div className=' absolute bg-yellow-400 top-10 right-10 p-2 rounded-full'>
                    <BsHeart className=' '/>
                    </div>


                    <div className='mb-4'>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag1}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag2}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag3}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag4}</small>
                    </div>
                    <div className='flex items-center justify-between'>
                    <h3 className='font-bold mb-3 text-xl text-indigo-900 '>{title}</h3>
                    <p className='underline cursor-pointer text-sm text-indigo-900'>{details}</p>
                    </div>
                    <p className='flex items-center mb-2 text-indigo-900'><HiLocationMarker className='mr-2 text-yellow-400'/> {location}</p>
                    <p className='flex items-center text-indigo-900'><FaPhone className='mr-2 text-yellow-400'/> {phone}</p>
                </div>
            )
            }
            
            )}
        </section>
    </>
  )
}

export default Listings