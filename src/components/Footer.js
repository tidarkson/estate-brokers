import React, { useState } from 'react'
import data from '../data/footer'
import logo from '../images/logo.png'


function Footer() {
    // eslint-disable-next-line
    const [footerLinks, setFooterLinks] = useState(data)
    return (
        <>
        
            <footer className="grid grid-cols-6 px-32 py-10 border border-slate-800">
            <div>
                    <img src={logo} alt="" />
                </div>

                {footerLinks.map((data) => {
                    const { id, links, title } = data

                    return (
                        <>
                            <div key={id}>
                                <h4 className='font-bold mb-3 text-xl text-indigo-900'>{title}</h4>
                                {links.map((link) =>
                                    <p className='text-sm text-indigo-900 my-3 cursor-pointer'>{link}</p>
                                )}
                            </div>

                        </>

                    )
                })}
            </footer>
        </>
    )
}

export default Footer