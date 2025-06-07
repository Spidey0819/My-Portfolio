// src/components/Contact.jsx
const Contact = () => {
    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-4xl mx-auto">
                <div className="bg-black/60 backdrop-blur-sm border border-[#e62429]/30 rounded-lg p-8">
                    <h1 className="text-5xl font-bangers text-[#e62429] mb-6">
                        Stark Communications
                    </h1>
                    <p className="text-[#fdd835] mb-8 text-center">Direct Communication Channels</p>

                    {/* Direct Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a
                            href="mailto:goswamidhruv01@gmail.com"
                            className="bg-black/50 p-6 rounded-lg border border-[#e62429]/30 hover:border-[#e62429]
                                     transition-all duration-300 text-center transform hover:scale-105"
                        >
                            <svg className="w-12 h-12 mx-auto mb-4 text-[#e62429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-[#fdd835] font-bangers text-xl mb-2">Email</p>
                            <p className="text-gray-300">goswamidhruv01@gmail.com</p>
                        </a>

                        <a
                            href="tel:+19024789990"
                            className="bg-black/50 p-6 rounded-lg border border-[#e62429]/30 hover:border-[#e62429]
                                     transition-all duration-300 text-center transform hover:scale-105"
                        >
                            <svg className="w-12 h-12 mx-auto mb-4 text-[#e62429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="text-[#fdd835] font-bangers text-xl mb-2">Phone</p>
                            <p className="text-gray-300">(902) 478-9990</p>
                        </a>

                        <a
                            href="https://linkedin.com/in/dhruvgoswami3020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/50 p-6 rounded-lg border border-[#e62429]/30 hover:border-[#e62429]
                                     transition-all duration-300 text-center transform hover:scale-105"
                        >
                            <svg className="w-12 h-12 mx-auto mb-4 text-[#e62429]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <p className="text-[#fdd835] font-bangers text-xl mb-2">LinkedIn</p>
                            <p className="text-gray-300">dhruvgoswami3020</p>
                        </a>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            Ready for new opportunities and collaborations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;