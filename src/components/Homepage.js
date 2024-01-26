// Homepage.js
import React, { useState, useEffect } from "react";
import '../styles/Homepage.css';

const Homepage = () => {
    const sentences = ["Full Stack Web Developer", "DSA Problem Solver", ];
    const speed = 80; // Adjust the interval (50ms) as needed
    const [dynamicText, setDynamicText] = useState("");

    useEffect(() => {
        const animateText = async (text) => {
            for (let i = 0; i <= text.length; i++) {
                setDynamicText(text.slice(0, i));
                await new Promise(resolve => setTimeout(resolve, speed));
            }

            await new Promise(resolve => setTimeout(resolve, speed * 2));

            for (let i = text.length; i >= 0; i--) {
                setDynamicText(text.slice(0, i));
                await new Promise(resolve => setTimeout(resolve, speed));
            }

            await new Promise(resolve => setTimeout(resolve, speed * 2));
        };

        const loopSentences = async () => {
            while (true) {
                for (const sentence of sentences) {
                    await animateText(sentence);
                }
            }
        };

        loopSentences();

        return () => setDynamicText(""); // Clean up on component unmount
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="homepage">
            <div className="user-title">
                
                <h1 className="user-name">Debidutta Acharya</h1>
                <h3 className="user-skillset">A {dynamicText}|</h3>
            </div>
            <div className="user-photo">
                <div className="circle"></div>
                world
            </div>
        </div>
    );
}

export default Homepage;
