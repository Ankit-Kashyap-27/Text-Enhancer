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
        <nav className={` ${isDarkmode ? "text-white bg-[#232323]":"bg-green-100 "} py-2 h-[10vh] flex items-center  justify-between px-8`}>
            <div className=' gap-7  flex items-center '>
                <span className='text-3xl'>{props.title}</span>
                <ul>
                    <li className='text-lg  '>
                    <a className='mx-3  duration-100 hover:border-b-2 hover:border-b-black' href="/">home</a>  <a className='mx-3  duration-100 hover:border-b-2 hover:border-b-black' href="/">About</a>

                      
                    </li>
                </ul>
            </div>
            <div className="">
                <div className='bg-[#36454F] rounded-full h-[6vh] w-[9vw] flex items-center'>
                    <div onClick={handleSlide} className={ `transition-transform duration-500 bg-[#e4e4e3] h-[6vh] w-[3vw] rounded-full flex justify-center items-center ${!isDarkmode ? ' translate-x-0' : 'translate-x-[6vw]'}`}>
                        <img className='size-6' src={isDarkmode ? moon : sun} alt="" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar






