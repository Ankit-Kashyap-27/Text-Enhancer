import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
    return (
        <nav className='bg-green-50 py-3 '>
            <div className='flex justify-between items-center '>
                <div className='flex gap-7 '>
                    <div className=" mx-2">
                        <span className='text-xl'>{props.title}</span>
                    </div>

                    <div>
                        <ul>
                            <li className='text-lg font-thin'>
                                <a className='mx-2' href="/">Home</a>
                                <a className='mx-2' href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-4 items-center '>
                    <input className='text-lg  p-2 rounded-sm border-2 border-slate-300' placeholder='   Search'   type="text" />
                    <button className=' mx-3 px-4 py-2 rounded-md  border-2 border-green-700 '>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

