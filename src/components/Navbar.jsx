import React, { useState } from 'react'
import PropTypes from 'prop-types'
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"


const Navbar = (props) => {

    const [isDarkmode, setisDarkmode] = useState(false);

    const handleSlide = () => {
        setisDarkmode(!isDarkmode);
        document.body.classList.toggle('Darkmode', !isDarkmode)
    }
    return (
        <nav className='bg-green-100 py-2 h-[10vh] flex items-center  justify-between px-8'>
            <div className=' gap-7  flex  '>
                <span className='text-2xl'>{props.title}</span>
                <ul>
                    <li className='text-lg  font-thin'>
                        <a classNamre='mx-4 duration-200 hover:border-b-2 hover:boder-b-black' href="/">Home</a>

                        <a className='mx-4  duration-200 hover:border-b-2 hover:border-b-black' href="/">About</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <div className='bg-[#36454F] rounded-full h-[6vh] w-[9vw] flex items-center'>
                    <div onClick={handleSlide} className={ `transition-transform duration-500 bg-[#e4e4e3] h-[6vh] w-[3vw] rounded-full flex justify-center items-center ${!isDarkmode ? 'translate-x-[6vw]' : 'translate-x-0'}`}>
                        <img className='size-6' src={isDarkmode ? sun : moon} alt="" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar






