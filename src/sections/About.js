import React, { useState, useEffect } from 'react';
import '../styles/about.css';
import MyImage from '../assets/headshot.jpeg';
import { getAbout } from '../tools/api';

export default function About() {
    const [aboutData, setAboutData] = useState({
        description: '',
        description2: '',
        hobbies: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                setLoading(true);
                let data = await getAbout();
                data = data[0];
                setAboutData({
                    description: data.description || '',
                    description2: data.description2 || '',
                    hobbies: data.hobbies || ''
                });
            } catch (error) {
                console.error('Error fetching about:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAbout();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-white">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-white">
                Error: {error}
            </div>
        );
    }

    return (
        <>
            <div className='flex justify-center z-[1]'>
                <div className='about-line mt-[12rem] text-white p-3 z-[1]'>
                    Based in Toronto, Ontario
                </div>
            </div>
            <div id="about" className='flex justify-left z-[1]'>
                <div className='text-white p-3 z-[1] ml-[8vw] scale-[3] mt-[5vh]'>
                    About
                </div>
            </div>
            <div className="flex flex-row w-[80%] z-[1] text-right">
                <div className="flex-1 flex flex-col justify-start z-[1] ml-[50vw] -mt-[12vh]">
                    <p className="leading-relaxed text-white scale-[1.5] w-[32vw] mt-[5rem]">
                        {aboutData.description}
                    </p>
                    <p className="leading-relaxed text-white scale-[1.5] w-[32vw] mt-[5rem]">
                        {aboutData.description2}
                    </p>
                </div>
            </div>
            <div className='contact z-[1]'>
                <div className='contact-line mt-[15vh] text-white p-3 z-[1]'>
                </div>
            </div>
            <div className="flex justify-left items-center z-[1] mt-[14vh] ml-[10vw]">
                <div className="w-[25rem] h-[25rem] rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.1]">
                    <img 
                        src={MyImage}
                        alt="Gaurav headshot" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="leading-relaxed text-white scale-[1.5] w-[25rem] mt-[5rem] ml-[15vw]">
                    {aboutData.hobbies}
                </p>
            </div>
        </>
    );
}