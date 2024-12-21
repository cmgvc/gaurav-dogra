import React from 'react';
import '../styles/about.css';
import MyImage from '../assets/headshot.jpeg';

const textContent = {
   line1: "Based in Toronto, Ontario",
   paragraph1: `Hi, I'm Gaurav from Toronto. I attended Upper Canada College for high school before earning 
   a Bachelor of Commerce in Finance and a Minor in Computer Science from McGill University. At McGill, I co-led 
   the Social Business Network and participated in initiatives that combined business strategies with social impact.`,
   paragraph2: `I now work as a Business Development Associate at ISN, helping clients integrate software 
     that improves performance, benchmarking, and data insights. This role lets me collaborate 
     across teams and deepen my understanding of market trends.`,
   paragraph3: `Outside of work, I stay active through volunteering, professional development, and 
     hobbies like watching sports, playing tennis, skiing, and traveling, which help me stay 
     balanced and inspired.`,
};

export default function About() {
   return (
      <>
         <div className='flex justify-center z-[1]' >
            <div className='about-line mt-[12rem] text-white p-3 z-[1]'>
               {textContent.line1}
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
                    {textContent.paragraph1}
                </p>
                <p className="leading-relaxed text-white scale-[1.5] w-[32vw] mt-[5rem]">
                    {textContent.paragraph2}
                </p>
                
            </div>
        </div>
        <div id="contact" className='contact z-[1]' >
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
            <p className="leading-relaxed text-white scale-[1.5] w-[25rem] mt-[5rem ml-[15vw]">
                    {textContent.paragraph3}
            </p>
         </div>
      </>
   );
}
