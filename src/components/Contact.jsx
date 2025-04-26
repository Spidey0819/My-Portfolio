// src/components/Contact.jsx
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ show: false, success: false, message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ show: false, success: false, message: '' });

        try {
            const result = await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                form.current,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            if (result.text === 'OK') {
                setStatus({
                    show: true,
                    success: true,
                    message: 'Message transmission successful! I will respond shortly.'
                });
                form.current.reset();
            }
        } catch (error) {
            setStatus({
                show: true,
                success: false,
                message: 'Transmission failed. Please try alternative communication channels.'
            });
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-4xl mx-auto">
                <div className="bg-black/60 backdrop-blur-sm border border-[#e62429]/30 rounded-lg p-8">
                    <h1 className="text-5xl font-bangers text-[#e62429] mb-6">
                        Stark Communications
                    </h1>
                    <p className="text-[#fdd835] mb-8">Secure Channel for Mission Coordination</p>

                    {status.show && (
                        <div className={`p-4 mb-6 rounded-lg ${
                            status.success
                                ? 'bg-green-500/10 border-l-4 border-green-500 text-green-500'
                                : 'bg-red-500/10 border-l-4 border-red-500 text-red-500'
                        }`}>
                            {status.message}
                        </div>
                    )}

                    {/* Direct Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <a
                            href="mailto:goswamidhruv01@gmail.com"
                            className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30 hover:border-[#e62429] transition-colors duration-300 text-center"
                        >
                            <svg className="w-8 h-8 mx-auto mb-2 text-[#e62429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-[#fdd835] font-bangers">Email</p>
                            <p className="text-gray-300 text-sm">goswamidhruv01@gmail.com</p>
                        </a>

                        <a
                            href="tel:+19024789990"
                            className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30 hover:border-[#e62429] transition-colors duration-300 text-center"
                        >
                            <svg className="w-8 h-8 mx-auto mb-2 text-[#e62429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="text-[#fdd835] font-bangers">Phone</p>
                            <p className="text-gray-300 text-sm">(902) 478-9990</p>
                        </a>

                        <a
                            href="https://linkedin.com/in/dhruvgoswami3020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30 hover:border-[#e62429] transition-colors duration-300 text-center"
                        >
                            <svg className="w-8 h-8 mx-auto mb-2 text-[#e62429]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <p className="text-[#fdd835] font-bangers">LinkedIn</p>
                            <p className="text-gray-300 text-sm">dhruvgoswami3020</p>
                        </a>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#fdd835] font-bangers mb-2">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-black/50 border border-[#e62429]/30 rounded-md px-4 py-2 text-white
                         focus:outline-none focus:border-[#e62429] transition-colors duration-300"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-[#fdd835] font-bangers mb-2">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-black/50 border border-[#e62429]/30 rounded-md px-4 py-2 text-white
                         focus:outline-none focus:border-[#e62429] transition-colors duration-300"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-[#fdd835] font-bangers mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                className="w-full bg-black/50 border border-[#e62429]/30 rounded-md px-4 py-2 text-white
                         focus:outline-none focus:border-[#e62429] transition-colors duration-300"
                                placeholder="Enter subject"
                            />
                        </div>

                        <div>
                            <label className="block text-[#fdd835] font-bangers mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                className="w-full bg-black/50 border border-[#e62429]/30 rounded-md px-4 py-2 text-white
                         focus:outline-none focus:border-[#e62429] transition-colors duration-300 h-32"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#e62429] text-white font-bangers py-3 rounded-md
                       hover:bg-[#d41f24] transition-colors duration-300 disabled:opacity-50
                       flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Transmitting...
                                </>
                            ) : (
                                'Initiate Communication'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;