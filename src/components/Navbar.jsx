import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'projects'
        },
        {
            id:4,
            link:'skills'
        },
        {
            id:5,
            link:'contact'
        }
    ]

  return (
    <div className="py-3 bg-black text-white w-full px-4 fixed flex justify-between items-center">
        <div>
            <h1 className="text-5xl font-signature ml-2">Om</h1>
        </div>
        <ul className='hidden md:flex '>
            {links.map(({id,link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>{link}</li>
            ))}
        </ul>
        <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 text-gray-500 md:hidden z-10"
        >
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500 md:hidden'>
            {links.map(({id,link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200'>{link}</li>
            ))}
        </ul> 
        )}
    </div>
  )
}

export default Navbar