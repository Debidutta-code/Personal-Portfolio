// AboutPage.js
import React from "react";
import '../styles/AboutPage.css';

const AboutPage = () => {
    return (
        <div id="about" className="about-page">
            <h1 className="name-heading">About Me</h1>
            <div className="about-section">
                <div className="image-container">
                    <div className="image">

                    </div>
                </div>
                <div className="about-container">

                    <div className="about">
                        <p>
                            I'm Debidutta Acharya, a results-driven professional in Bhubaneswar, Odisha, with a degree in Computer Science Engineering. Specializing in MERN stack web development and proficient in C++, I sharpen my problem-solving skills on platforms like LeetCode and GeeksforGeeks. Beyond coding, I enjoy strategic video gaming on PC and console. With a keen passion for technology and a commitment to learning, I'm ready to contribute to projects demanding attention to detail, creativity, and technical expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
