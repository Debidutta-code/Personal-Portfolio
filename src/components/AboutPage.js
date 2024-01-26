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
                        m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
