// const url = '216.24.60.0/24';
const url = 'https://portfolio-cms-ncqv.onrender.com';

export const getExperiences = async () => {
    const response = await fetch(`${url}/experiences`);
    const data = await response.json();
    return data;
}

export const getProjects = async () => {
    const response = await fetch(`${url}/projects`);
    const data = await response.json();
    return data;
}

export const getAbout = async () => {
    const response = await fetch(`${url}/about`);
    const data = await response.json();
    return data;
}
