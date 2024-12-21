import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(0);

    const projects = [
        {
            title: 'Co-Director of Consulting',
            description: 'Educating younger students in the field of consulting, while expanding the club\'s pro-bono consulting services.',
            organization: 'MSBN Consulting',
            duration: 'May 2023 - May 2024',
        },
        {
            title: 'Project Manager',
            description: 'Led a team of 4 consultants on a strategy project for a local Fintech non-profit organization in Montreal.',
            organization: 'MSBN Consulting',
            duration: 'Aug 2022 - May 2023',
        },
        {
            title: 'Consultant',
            description: 'Worked on a 6-month project to deliver solutions for a global NPO specializing in study abroad programs.',
            organization: 'MSBN Consulting',
            duration: 'Sep 2021 - Aug 2022',
        },
        {
            title: 'Meal Server',
            description: 'Coordinating logistics and collaborating with a team of volunteers while actively contributing to meal-prepping activities to serve those in need.',
            organization: 'Out of the Cold Soup Kitchen, Milton Parc Food Hub',
            duration: 'Jan 2017 - Present'
        },
        {
            title: 'Co-Club President',
            description: 'Led weekly club meetings of 50-100 students and headed our delegation team.',
            organization: 'Ontario Model United Nations',
            duration: 'May 2019 - Apr 2020'
        },
        {
            title: 'Event Volunteer and Photographer',
            description: 'Helped out at the September festival, assisting attendees and documenting the volunteer and festival experience through photography.',
            organization: 'Toronto International Film Festival',
            duration: 'Jan 2017 - Feb 2021'
        },
        {
            title: 'Fundraising',
            description: 'Conducted a school-wide used shoe collection drive and amassed over 200 donations in 1 week.',
            organization: 'Shoes That Fit',
            duration: 'Jan 2020 - Apr 2020'
        },
    ];

    const handleNext = () => {
        if (selectedProject < projects.length - 1) {
            setSelectedProject(selectedProject + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedProject > 0) {
            setSelectedProject(selectedProject - 1);
        }
    };

    return (
        <div>
            <div className="flex justify-left z-[1]" id="projects">
                <div className="experience-line mt-[6rem] ml-[5vw] text-white p-3 z-[1]">
                    Leadership & Projects
                </div>
            </div>
            <div className="flex mt-[17vh] z-[1]">
                <button 
                    className="arrow-btn left-arrow" 
                    onClick={handlePrevious}
                    disabled={selectedProject === 0}>
                    <FaArrowLeft />
                </button>
                <button 
                    className="arrow-btn right-arrow" 
                    onClick={handleNext}
                    disabled={selectedProject === projects.length - 1}
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className="project-container relative flex justify-center h-[30vh] ml-[5vw] items-center">
                <div className="project-info text-white">
                    <h3>{projects[selectedProject].title}</h3>
                    <h4>{projects[selectedProject].organization}</h4>
                    <p>{projects[selectedProject].description}</p>
                    <small>{projects[selectedProject].duration}</small>
                </div>
            </div>
            
            <style jsx>{`
                .arrow-btn {
                    background: none;
                    border: 2px solid white;
                    color: white;
                    padding: 10px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10; 
                }
                .arrow-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .left-arrow {
                    position: absolute;
                    left: 5vw;
                    margin-top: 10vh;
                }
                .right-arrow {
                    position: absolute;
                    right: 5vw;
                    margin-top: 10vh;
                }
                .right-arrow:hover, .left-arrow:hover {
                    background-color: white;
                    color: black;
                }
                .project-info {
                    text-align: center;
                    max-width: 50vw;
                }
                .project-info h3 {
                    font-size: 1.5rem;
                    color: white;
                    margin-bottom: 10px;
                }
                .project-info h4 {
                    font-size: 1.2rem;
                    color: white;
                    margin-bottom: 8px;
                }
                .project-info p {
                    color: white;
                    margin-bottom: 8px;
                }
                .project-info small {
                    color: white;
                    font-size: 0.9rem;
                    display: block;
                }
            `}</style>
        </div>
    );
}

export default Projects;
