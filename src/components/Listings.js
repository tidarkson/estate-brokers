import React, {useState} from 'react'
import data from '../data/listings'
import {FaPhone} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {BsHeart} from 'react-icons/bs'

function Listings() {
    const [cards, setCards] = useState(data)

  return (
    <>
    <div className='flex pt-56 items-center justify-between px-32 mb-5'>
        <h2 className='font-bold text-3xl text-indigo-900'>View Listings</h2>
        <p className='underline text-sm text-indigo-900 cursor-pointer'>View all listings</p>
    </div>
        <section className='px-32 gap-10 grid grid-cols-2'>
            {cards.map((card) => {
            const {id, image, tag1, tag2, tag3, tag4, title, details, location, phone} = card
            return (
                <div key={id} className="border rounded p-5 relative">
                    <img src={image} alt={title} className="w-full rounded-lg mb-2"/>
                    <div className='mb-4'>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag1}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag2}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag3}</small>
                        <small className='bg-gray-300 mx-2 px-1 rounded-lg text-xs'>{tag4}</small>
                    </div>
                    <div className='flex items-center justify-between'>
                    <h3 className='font-bold mb-3'>{title}</h3>
                    <p className='underline cursor-pointer'>{details}</p>
                    </div>
                    <p><HiLocationMarker/> {location}</p>
                    <p><FaPhone/> {phone}</p>
                </div>
            )
            }
            
            )}
        </section>
    </>
  )
}

export default Listings