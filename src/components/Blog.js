import React, { useState } from 'react'
import data from '../data/blog'

function Blog() {
    // eslint-disable-next-line
    const [blogData, setBlogData] = useState(data)
    return (
        <>
            <div className='pt-96 px-32'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-4xl text-indigo-900'>Blog posts</h1>
                    <p className='text-indigo-900 underline cursor-pointer font-bold'>View all blog posts</p>
                </div>

                <div className='pt-10 grid grid-cols-3 gap-5'>
                    {blogData.map((data) => {
                        const { id, image, desc, tag, date } = data

                        return (
                            <div key={id} className="border rounded-lg p-3">
                                <img src={image} alt="" className='rounded-lg'/>
                                <h3 className='font-bold pt-2 text-indigo-900'>{desc}</h3>
                                <div className='flex items-center justify-between pt-3'>
                                    <p className='bg-gray-200 p-1 text-sm rounded text-indigo-900'>{tag}</p>
                                    <p className='text-sm text-indigo-900'>{date}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Blog