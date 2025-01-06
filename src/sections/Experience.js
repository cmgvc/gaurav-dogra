import React, { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getExperiences } from '../tools/api';

const TimelineItem = ({ year, title, subtitle, description, details, isLeft }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isSchoolExperience = title.includes('University') || title.includes('College');

    return (
        <div className="flex w-full relative justify-center">
            <div className={`w-[40%] ${isLeft ? 'pr-8' : 'pr-8 opacity-0'}`}>
                <div className="text-right transform transition-transform duration-300">
                    <div className="card bg-transparent border-t border-b border-[var(--text-color)] p-8 transition-all duration-300 hover:bg-[--exp-bkg-color] group hover:translate-y-[-10px]">
                        <h3 className={`text-xl font-bold ${isSchoolExperience ? 'text-[var(--exp-school-text-color)]' : 'text-[var(--exp-text-color)]'}`}>
                            {title}
                        </h3>
                        <div className="text-[var(--text-color)]  mb-1">{year}</div>
                        <div className="text-[var(--text-color)] font-medium mb-2">{subtitle}</div>
                        <p className="text-[var(--text-color)] ">{description}</p>
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="pt-4 text-[var(--text-color)] ">
                                {details}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center justify-end w-full"
                        >
                            {isExpanded ? (
                                <Minus className="w-5 h-5" />
                            ) : (
                                <Plus className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-blue-900 rounded-full transition-transform duration-300"></div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className={`w-[40%] ${!isLeft ? 'pl-8' : 'pl-8 opacity-0'}`}>
                <div className="text-left duration-300">
                    <div className="card bg-transparent border-t border-b border-[var(--text-color)] p-8 duration-300 hover:bg-[--exp-bkg-color] group hover:translate-y-[-10px]">
                        <h3 className={`text-xl font-bold ${isSchoolExperience ? 'text-[var(--exp-school-text-color)]' : 'text-[var(--exp-text-color)]'}`}>
                            {title}
                        </h3>
                        <div className="text-[var(--text-color)]  mb-1">{year}</div>
                        <div className="text-[var(--text-color)]  font-medium mb-2">{subtitle}</div>
                        <p className="text-[var(--text-color)] ">{description}</p>
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="pt-4 text-[var(--text-color)]">
                                {details}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center justify-start w-full"
                        >
                            {isExpanded ? (
                                <Minus className="w-5 h-5" />
                            ) : (
                                <Plus className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Experience() {
    const [allExperiences, setExperiences] = useState([]);

    useEffect(() => {
        const getAllExperiences = async () => {
            try {
                getExperiences().then((data) => {
                    setExperiences(data);
                });
            } catch (error) {
                console.error(error);
            }
        }
        getAllExperiences();
    }, []);

    const experiences = [
        {
        year: "September 2024 - Present",
        title: "Business Development Associate",
        subtitle: "ISN",
        description: "Business Development",
        details: "Provide support to a key set of contractors and suppliers, addressing their requests and proactively engaging to ensure compliance. Work with the Client Development Team to establish and nurture partnerships with major global companies, collaborating with business leaders to drive growth and manage projects that supported customer success.",
        isLeft: true
        },
        {
            year: "May 2023 - Aug 2023",
            title: "Associate Consultant Intern",
            subtitle: "Konrad Group",
            description: "Collaborating with cross-functional teams to create digital solutions for Fortune 500 companies.",
            details: "Contributed to the development of innovative solutions for major clients, working alongside diverse teams to ensure project success.",
            isLeft: false
        },
        {
            year: "May 2022 - Aug 2022",
            title: "Digital Performance Marketing Analyst",
            subtitle: "CIBC",
            description: "Recognized with the Exceptional Student Award for consistently delivering high-quality work.",
            details: "Contributed to digital marketing campaigns, analyzing performance metrics, and optimizing strategies. Collaborated with teams to enhance marketing efforts and achieve business objectives.",
            isLeft: true
        },
        {
            year: "Aug 2021 - Feb 2022",
            title: "Account Executive",
            subtitle: "FixMeStick Technologies, Inc.",
            description: "Helped shape client connections and delivered tailored cybersecurity solutions.",
            details: "Developed and maintained relationships with clients, providing customized cybersecurity solutions to address their specific needs. Collaborated with internal teams to ensure seamless service delivery, contributing to client satisfaction and retention.",
            isLeft: false
        },      
        {
            year: "Sep 2020 -  May 2024",
            title: "McGill University - Desautels Faculty of Management",
            subtitle: "Bachelor of Commerce - BCom, Finance",
            description: "Graduated with a Bachelor of Commerce from McGill University, with a Minor in Computer Science and in Finance.",
            details: "I was actively involved in several activities and societies, including serving as Co-Director of Consulting for the McGill Social Business Network, Director of Events for the McGill XR Club, and Vice-Chair for both of McGill's Model UN conferences, SSUNS and McMUN, from 2021 to 2022.",        
            isLeft: true
        },
        {
            year: "Dec 2019 - Sep 2020",
            title: "Business Development Intern",
            subtitle: "Scale Without Borders",
            description: "Led a marketing campaign to support newcomer entrepreneurs in Canada.",
            details: "Spearheaded a marketing initiative aimed at helping immigrant entrepreneurs transition to Canada. Collaborated with various stakeholders to create resources and strategies that assisted newcomers in establishing their businesses.",
            isLeft: false
        },      
        {
            year: "Mar 2018 - Jan 2019",
            title: "Youth Consultant",
            subtitle: "Parlay Ideas · Internship",
            description: "Expanded Parlay’s network through focus groups and outreach programs.",
            details: "Led focus groups to gather insights and designed a high school outreach program to increase engagement and expand Parlay’s network. Focused on connecting with younger audiences to build a strong community.",
            isLeft: true
        },
        {
            year: "Jun 2018 - Aug 2018",
            title: "Account Executive",
            subtitle: "Clik.ai",
            description: "Sold Clik.ai’s underwriting tool to real estate brokers and onboarded new clients.",
            details: "Successfully marketed and sold Clik.ai’s underwriting tool to real estate brokers. Managed client onboarding processes, ensuring smooth transitions and customer satisfaction during initial setup.",
            isLeft: false
        },         
        {
            year: "Jan 2017 - May 2018",
            title: "Student",
            subtitle: "The Knowledge Society (TKS)",
            description: "Developed skills in emerging technologies and innovation.",
            details: "Engaged in an advanced program that explored emerging technologies, including AI, biotech, and blockchain. Focused on innovation and problem-solving to prepare for future challenges in technology and business.",
            isLeft: true
        },
        {
            year: "Jul 2017 - Sep 2017",
            title: "Sales And Marketing Specialist",
            subtitle: "Embodia Inc",
            description: "Contributed to sales and marketing efforts for Embodia’s digital health platform.",
            details: "Assisted in the development and execution of marketing campaigns to promote Embodia’s digital health solutions. Supported the sales team in outreach efforts and customer engagement to grow the platform’s user base.",
            isLeft: false
        },
                
        {
            year: "Sep 2014 - Apr 2020",
            title: "Upper Canada College",
            subtitle: "High School",
            description: "International Baccalaureate (IB) and Ontario Secondary School Diploma (OSSD)",
            details: "Graduated with a grade of 95%. I was actively involved in extracurriculars, serving as Model UN Co-President, Tennis Team Captain, and volunteering as a Math Tutor, Skating Instructor, and in Model UN. I received the Harris Prize in Current Affairs and the Gold Service Tie for completing 200 volunteer hours.",
            isLeft: true
        }      
    ];


    const parseYear = (year) => {
        if (year.includes("Present")) {
            return new Date();
        }
        
        const yearParts = year.split(" - ");
        const endYear = yearParts[1] || yearParts[0]; 
    
        return new Date(endYear);
    };
    
    const sortedExperiences = allExperiences.sort((a, b) => {
        const dateA = parseYear(a.year);
        const dateB = parseYear(b.year);
        return dateB - dateA;
    });
    
    return (
        <>
        <div className='flex justify-left z-[1]' id='experience'>
            <div className='experience-line mt-[12rem] ml-[5vw] text-[var(--text-color)] p-3 z-[1]'>
                Experience
            </div>
        </div>
        <div className="min-h-screen py-12 mt-[10vh]">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
                    <div className="space-y-16">
                        {sortedExperiences.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                year={exp.year}
                                title={exp.title}
                                subtitle={exp.subtitle}
                                description={exp.description}
                                details={exp.details}
                                isLeft={index % 2 === 0} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}