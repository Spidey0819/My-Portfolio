// src/components/About.jsx
const About = () => {
    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
                <div className="bg-black/60 backdrop-blur-sm border border-[#e62429]/30 rounded-lg p-8">
                    <h1 className="text-5xl font-bangers text-[#e62429] mb-8">
                        S.H.I.E.L.D. Personnel File
                    </h1>

                    {/* Profile Header */}
                    <div className="text-white space-y-6">
                        <div className="border-l-4 border-[#e62429] pl-4">
                            <p className="text-[#fdd835] text-3xl font-bangers">Agent: Dhruvgiri Goswami</p>
                            <p className="text-gray-400">Status: Active</p>
                            <p className="text-gray-400">Clearance Level: Master's Candidate</p>
                        </div>

                        {/* Education Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bangers text-[#fdd835] mb-4">Educational Intel</h2>
                            <div className="bg-black/50 p-6 rounded-lg border border-[#e62429]/30">
                                <h3 className="text-xl font-bold text-white">Dalhousie University</h3>
                                <p className="text-[#fdd835]">Master of Applied Computer Science</p>
                                <p className="text-gray-400">Halifax, NS, Canada | Expected: Winter 2025</p>
                                <p className="text-gray-300 mt-2">
                                    Specializing in: Advanced Software Development, Deep Learning Applications,
                                    Database Management Warehousing and Analytics, Advanced Cloud Computing
                                </p>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bangers text-[#fdd835] mb-4">Mission Experience</h2>
                            <div className="bg-black/50 p-6 rounded-lg border border-[#e62429]/30">
                                <h3 className="text-xl font-bold text-white">
                                    Bhaskaracharya Institute for Space Applications and Geoinformatics
                                </h3>
                                <p className="text-[#fdd835]">Machine Learning Intern</p>
                                <p className="text-gray-400">Gandhinagar, India | Jan 2023 – May 2023</p>
                                <ul className="text-gray-300 mt-3 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-[#e62429] mr-2">•</span>
                                        Engineered and deployed a comprehensive storage monitoring system using Python and Docker that reduced resource wastage by 25%
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#e62429] mr-2">•</span>
                                        Designed data analysis features to identify storage patterns and trends, enabling data-driven decisions that improved storage efficiency by 30%
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#e62429] mr-2">•</span>
                                        Created visualization dashboards using Tailwind CSS and ReactJs that decreased system monitoring time by 40% for a team of 6 developers
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#e62429] mr-2">•</span>
                                        Collaborated with two other developers through GitHub pull requests and code reviews, achieving 85%+ on automated functional tests across 15 different test scenarios
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30">
                                <h3 className="text-[#fdd835] font-bangers mb-2">Communication Channel</h3>
                                <a href="mailto:goswamidhruv01@gmail.com" className="text-gray-300 hover:text-[#e62429]">
                                    goswamidhruv01@gmail.com
                                </a>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30">
                                <h3 className="text-[#fdd835] font-bangers mb-2">Direct Line</h3>
                                <a href="tel:+19024789990" className="text-gray-300 hover:text-[#e62429]">
                                    (902) 478-9990
                                </a>
                            </div>
                            <div className="bg-black/50 p-4 rounded-lg border border-[#e62429]/30">
                                <h3 className="text-[#fdd835] font-bangers mb-2">Network Profile</h3>
                                <a
                                    href="https://linkedin.com/in/dhruvgoswami3020"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#e62429]"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;