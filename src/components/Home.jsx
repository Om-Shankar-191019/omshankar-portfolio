import React from 'react'
import HeroImage from '../assets/heroImage.png';
import {MdKeyboardArrowRight} from 'react-icons/md';
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    A student of front end development having deep passion for creating engaging user experiences that connect with audiences. I am
                    eager to expand my knowledge of emerging technologies and work collaboratively with others to solve complex problems.
                </p>
                <div>
                    <button className='group text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md px-6 py-3 my-2 w-fit'>
                        projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="" className='rounded-2xl mx-auto md:w-full'/>
            </div>
        </div> 
    </div>
  )
}

export default Home