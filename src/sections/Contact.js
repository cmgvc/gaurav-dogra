import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return (
        <>
            <div id="contact" className='contact z-[1]' >
                <div className='contact-line mt-[27vh] text-white p-3 z-[1]'>
                    Contact
                </div>
            </div>
            <div className='flex h-[30vh] mt-[12vh] justify-between'>
                <div className='text-white mt-[13vh] ml-[3vw] '>
                    <p>Connect with me on LinkedIn</p>
                    <a className='hover:text-gray-300' href='https://www.linkedin.com/in/gdogra1/' ><LinkedInIcon /></a>
                </div>
                <div className='contact-container flex flex-col mt-4 text-white z-[1] mr-[6vw]'>
                    <h3>Get in touch</h3>
                    <p>For any business inquiries or just to say hi, feel free to reach out to me.</p>
                    <a className='hover:text-gray-300' href="mailto:gaurav@dogra.com">gaurav@dogra.com</a>
                    <p className='mt-1'>(416) 388-8337</p>
                </div>
            </div>
        </>
    );
}