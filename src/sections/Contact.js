import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    return (
        <>
            <div id="contact" className='contact z-[1]' >
                <div className='contact-line mt-[27vh] text-[var(--text-color)] p-3 z-[1]'>
                    Contact
                </div>
            </div>
            <div className='flex h-[30vh] mt-[12vh] justify-between'>
                <div className='text-[var(--text-color)] mt-[13vh] ml-[3vw] '>
                    <p>Connect with me on LinkedIn</p>
                    <a className='hover:text-gray-300' href='https://www.linkedin.com/in/gdogra1/' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                </div>
                <div className='contact-container flex flex-col mt-4 text-[var(--text-color)] z-[1] mr-[6vw]'>
                    <h3>Get in touch</h3>
                    <p>For any business inquiries or just to say hi, feel free to reach out to me.</p>
                    <a className='hover:text-gray-300' href="mailto:gaurav@dogra.ca">gaurav@dogra.ca</a>
                    <p className='mt-1'>(416) 388-8337</p>
                </div>
            </div>
        </>
    );
}