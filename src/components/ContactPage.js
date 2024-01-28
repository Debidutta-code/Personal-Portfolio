// ContactPage.jsx

import React, { useState } from "react";
import '../styles/ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        senderEmail: '',
        message: '',
    });

    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(formData.senderEmail));
    };

    const handleMailto = () => {
        validateEmail();

        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }

        const { senderEmail, message } = formData;
        const subject = encodeURIComponent("Ask me Anything");

        const mailtoLink = `mailto:debiduttaacharya2002@gmail.com?subject=${subject}&body=${encodeURIComponent(`From: ${senderEmail}\n\n${message}`)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="contact-page">
            <h1 className="name-heading">Contact Me</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>
                        <strong>Email:</strong> <a href="mailto:debiduttaacharya2002@gmail.com">debiduttaacharya2002@gmail.com</a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/debidutta-acharya-638595286" target="_blank" rel="noopener noreferrer">Debidutta-Acharya</a>
                    </p>
                    <p>
                        <strong>Github:</strong> <a href="https://github.com/debidutta-code" target="_blank" rel="noopener noreferrer">Debidutta-Code</a>
                    </p>
                    <p>
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/_.d_3_v._/" target="_blank" rel="noopener noreferrer">_.d_3_v._</a>
                    </p>
                    <p>
                        <strong>Mobile:</strong> <a href="tel:+91 6371875968">+91-6371875968</a>
                    </p>
                </div>
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="senderEmail">Your Email:</label>
                            <input
                                type="email"
                                id="senderEmail"
                                name="senderEmail"
                                placeholder="Your email"
                                value={formData.senderEmail}
                                onChange={handleChange}
                                onBlur={validateEmail}
                                required
                            />
                            {!isValidEmail && <p className="error-message" style={{color:"red"}}>Please enter a valid email address.</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="button" onClick={handleMailto}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
