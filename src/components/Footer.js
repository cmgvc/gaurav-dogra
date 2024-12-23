import React from 'react'

function Footer() {
    return (
        <div className='footer bg-[#112a4f] h-[22vh] z-[1] flex justify-between p-[5%]'> 
        <a href='#home' className='text-white hover:text-gray-300'>Back to top</a>
        <div className='flex'>
            <a href='#about' className='text-white hover:text-gray-300'>About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#experience' className='text-white hover:text-gray-300'>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#projects' className='text-white hover:text-gray-300'>Projects</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#Contact' className='text-white hover:text-gray-300'>Contact</a>
        </div>
            <p className='text-white'>© 2024 Gaurav Dogra</p>
        </div>
    )
}

export default Footer
