import React from "react";
import '../styles/ProjectPage.css';

const ProjectPage = () => {
    const projects = [
        {
            projectName: "Courseware CUTM:",
            projectDes: "An educational app facilitates students with course details, empowers teachers for course management",
            projectLink: "https://dev-courseware-cutm.netlify.app"
        },
        {
            projectName: "Crop Recomm-endation System:",
            projectDes: "A GUI based Crop Recomm-endation System using Python",
            projectLink: "https://github.com/Debidutta-code/Crop_Recommendation_System_For_Precission_Agriculture.git"
        },
        {
            projectName: "ERP Management System:",
            projectDes: "A C++ student ERP which help to manage all academic information",
            projectLink: "https://github.com/Debidutta-code/ERP-MANAGEMENT-SYSTEM-DSA.git"
        },
        {
            projectName: "Personal Portfolio Website:",
            projectDes: "A Portfolio Website giving details about my skills and projects",
            projectLink: "https://dev-my-portfolio-website.netlify.app"
        },
        {
            projectName: "News Pulse:",
            projectDes: "AN API based Android App for refreshed stories and categorized updates from sports to entert-ainment.",
            projectLink: "https://en.wikipedia.org/wiki/HTTP_404"
        },
    ];

    const handleButtonClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div id="projects" className="project-page">
            <h1 className="name-heading">Personal Project</h1>

            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h1>{project.projectName}</h1>
                        <h3>{project.projectDes}</h3>
                        <button onClick={() => handleButtonClick(project.projectLink)}>Visit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
