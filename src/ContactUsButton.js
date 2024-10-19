// src/ContactUsButton.js
import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';

const ContactUsButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="fixed bottom-5 left-5 z-50">
            <button 
                onClick={toggleOptions} 
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full py-3 px-6 shadow-lg transition duration-300 hover:shadow-xl transform hover:scale-105 flex items-center"
            >
                <span className="mr-2">Contact Us</span>
                <span className="text-lg">&#8594;</span> {/* Arrow icon for interaction */}
            </button>
            {isOpen && (
                <div className="flex flex-col mt-2 animate-fadeIn">
                    <a 
                        href="mailto:info@esipl.net" 
                        className="bg-white rounded-lg py-2 px-4 mb-2 flex items-center transition duration-300 hover:bg-gray-100 shadow hover:shadow-md transform hover:scale-105"
                    >
                        <FaEnvelope className="w-5 h-5 mr-2 text-blue-500" />
                        Gmail
                    </a>
                    <a 
                        href="https://www.facebook.com/esipldelhi/" 
                        className="bg-white rounded-lg py-2 px-4 mb-2 flex items-center transition duration-300 hover:bg-gray-100 shadow hover:shadow-md transform hover:scale-105"
                    >
                        <FaFacebook className="w-5 h-5 mr-2 text-blue-600" />
                        Facebook
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/earthcon-systems/" 
                        className="bg-white rounded-lg py-2 px-4 mb-2 flex items-center transition duration-300 hover:bg-gray-100 shadow hover:shadow-md transform hover:scale-105"
                    >
                        <FaLinkedin className="w-5 h-5 mr-2 text-blue-700" />
                        LinkedIn
                    </a>
                    <a 
                        href="tel:+919899222245" 
                        className="bg-white rounded-lg py-2 px-4 flex items-center transition duration-300 hover:bg-gray-100 shadow hover:shadow-md transform hover:scale-105"
                    >
                        <FaPhone className="w-5 h-5 mr-2 text-green-500" />
                        Call Us
                    </a>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease forwards;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .fixed {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ContactUsButton;
