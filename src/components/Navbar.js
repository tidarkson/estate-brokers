import React, {useState} from 'react'
import data from '../data/navbar'
import logo from '../images/logo.png'

function Navbar() {
    // eslint-disable-next-line
    const [links, setLinks] = useState(data)
  return (
    <>
        <header className='absolute w-full z-50 flex items-center justify-between px-32 py-3'>
            <div>
                <img src={logo} alt="" />
            </div>
            
            <nav>
            <ul className='flex text-sm'>
            {links.map((link)=> {
                const {id, text} = link
                return <li key={id} className="mx-5 text-indigo-900 cursor-pointer hover:text-indigo-500">{text}</li>
            })}
            </ul>        
        </nav>

        <div>
            <button className='mx-3 text-sm text-purple-900 font-bold uppercase hover:text-indigo-500'>Log in</button>
            <button className='text-sm bg-white px-4 py-2 rounded-full text-purple-900 uppercase font-bold hover:bg-purple-900 hover:text-white'>Sign Up</button>
        </div>
        </header>    

    </>
  )
}

export default Navbar