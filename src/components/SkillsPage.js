import React from "react";
import '../styles/SkillsPage.css';

const SkillsPage = () => {
    const languageSkills = ["C++", "React", "NodeJS", "ExpressJS", "MongoDB", "OOPS", "DBMS", "Operating System"];
    const domainSkills = ["Web Development", "MERN Stack", "Android Development"];

    return (
        <div id="skills" className="skills-page">
            <h1 className="name-heading">My Skills</h1>

            <div className="skill-container">
                <div className="language-section">
                    <div className="language">
                        <h1>Programming Skills:</h1>
                        <ul>
                            {languageSkills.map((skill, index) => (
                                <button className='btn' key={index}>{skill}</button>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="domain-section">
                    <div className="domain">
                        <h1>Domain Skills:</h1>
                        <ul>
                            {domainSkills.map((skill, index) => (
                                <button className="btn" key={index}>{skill}</button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;
