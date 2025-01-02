import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getProjects } from '../tools/api';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(0);
    const [allProjects, setAllProjects] = useState([]);

    const getEndDate = (duration) => {
        const endDate = duration.split(' - ')[1];
        if (endDate === 'Present') {
            return new Date('9999-12-31');
        }
        
        const [month, year] = endDate.split(' ');
        const monthIndex = new Date(Date.parse(month + " 1, 2000")).getMonth();
        return new Date(year, monthIndex);
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                const sortedProjects = [...data].sort((a, b) => {
                    const dateA = getEndDate(a.duration);
                    const dateB = getEndDate(b.duration);
                    return dateB - dateA; 
                });
                setAllProjects(sortedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    const handleNext = () => {
        if (selectedProject < allProjects.length - 1) {
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
            <div className="flex justify-left z-[1] " id="projects">
                <div className="experience-line mt-[6rem] ml-[5vw] text-[var(--text-color)] p-3 z-[1]">
                    Leadership & Projects
                </div>
            </div>
            <div className="flex mt-[17vh] z-[1]">
                <button 
                    className="arrow-btn left-arrow" 
                    onClick={handlePrevious}
                    disabled={selectedProject === 0}
                >
                    <FaArrowLeft />
                </button>
                <button 
                    className="arrow-btn right-arrow" 
                    onClick={handleNext}
                    disabled={selectedProject === allProjects.length - 1}
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className="project-container relative flex  justify-center h-[30vh] ml-[5vw] items-center">
                {allProjects.length > 0 ? (
                    <div className="project-info ">
                        <h3 className='text-[var(--text-color)]'>{allProjects[selectedProject]?.title}</h3>
                        <h4>{allProjects[selectedProject]?.organization}</h4>
                        <p>{allProjects[selectedProject]?.description}</p>
                        <small>{allProjects[selectedProject]?.duration}</small>
                    </div>
                ) : (
                    <p className="text-[var(--text-color)]">No Projects</p>
                )}
            </div>
            
            <style jsx>{`
                .arrow-btn {
                    background: none;
                    border: 2px solid var(--text-color);
                    color: var(--text-color);
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
                    color: var(--text-color);
                    margin-bottom: 10px;
                }
                .project-info h4 {
                    font-size: 1.2rem;
                    color: var(--text-color);
                    margin-bottom: 8px;
                }
                .project-info p {
                    color: var(--text-color);
                    margin-bottom: 8px;
                }
                .project-info small {
                    color: var(--text-color);
                    font-size: 0.9rem;
                    display: block;
                }
            `}</style>
        </div>
    );
}

export default Projects;
