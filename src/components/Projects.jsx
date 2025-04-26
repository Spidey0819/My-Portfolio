// src/components/Projects.jsx
import { useState } from 'react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "FundFusion",
            codename: "FundFusion",
            description: "Constructed a responsive and intuitive expense-sharing platform using React and Spring Boot, creating real-time expense tracking features that served over 200 active users within the first month.",
            details: [
                "Architected RESTful APIs for core functionalities including expense splitting, group expense tracking, and debt simplification",
                "Real-time updates using WebSocket and secure user authentication using JWT tokens",
                "Managed a 4-member agile team as Scrum Master using JIRA",
                "Organized 12 one-week sprint cycles with 95% sprint goal completion rate",
                "Established a CI/CD pipeline that reduced deployment time by 65%"
            ],
            tech: ["React", "Spring Boot", "WebSocket", "JWT", "JIRA", "CI/CD"],
            image: "/api/placeholder/400/250",
            githubLink: "https://github.com/Spidey0819/FundFusion",
            status: "Completed",
            classification: "Level 5 Clearance",
            type: "Financial System"
        },
        {
            id: 2,
            title: "Kubernetes Microservices CI/CD Pipeline",
            codename: "Kubernetes Microservices CI/CD Pipeline",
            description: "Established a cloud-native CI/CD pipeline for microservices deployment on Google Kubernetes Engine (GKE) that decreased deployment time by 75%.",
            details: [
                "Crafted two containerized microservices with Python/Flask that process over 100 CSV entries",
                "Configured Terraform infrastructure that reduced setup time from 3 days to 45 minutes",
                "Integrated persistent storage for data sharing between containers",
                "Achieved 91%+ on automated functional tests across 15 different test scenarios",
                "Devised an end-to-end CI/CD pipeline using Google Cloud Build"
            ],
            tech: ["Kubernetes", "GKE", "Python", "Flask", "Terraform", "Google Cloud Build", "Docker"],
            image: "/api/placeholder/400/250",
            githubLink: "https://github.com/Spidey0819/Kubernetes",
            status: "Completed",
            classification: "Level 4 Clearance",
            type: "Infrastructure Management"
        },
        {
            id: 3,
            title: "SkillSpotter",
            codename: "SkillSpotter",
            description: "Architected a full-stack AWS application using CloudFormation that extracts skills from over 500 resumes using Amazon Textract with 95% accuracy.",
            details: [
                "Structured serverless architecture with Lambda functions for document processing",
                "Containerized React frontend with Docker, and employed S3 for storage",
                "Developed skills analysis pipeline using AWS Glue that processes documents in under 8 seconds",
                "Delivers notifications via SNS",
                "Optimized deployment workflow reducing page load time by 60% and improving user engagement by 45%"
            ],
            tech: ["AWS", "CloudFormation", "Lambda", "React", "Docker", "S3", "AWS Glue", "SNS", "EC2"],
            image: "/api/placeholder/400/250",
            githubLink: "https://github.com/Spidey0819/SkillSpotter",
            status: "Completed",
            classification: "Level 5 Clearance",
            type: "Document Analysis System"
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bangers text-[#e62429] mb-4">
                    Mission Records
                </h1>
                <p className="text-[#fdd835] text-xl font-bangers">
                    Classified Projects Database
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Project Card */}
                        <div className="bg-black/60 backdrop-blur-sm border border-[#e62429]/30 rounded-lg overflow-hidden
                          transform transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(230,36,41,0.3)]">

                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-[#e62429] text-white px-3 py-1 rounded-full text-sm font-bangers">
                                    {project.status}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="text-[#fdd835] text-xs mb-2 font-mono">
                                    {project.classification}
                                </div>
                                <h3 className="text-2xl font-bangers text-[#e62429] mb-2">
                                    {project.codename}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Project Details - Hidden by default, show on hover */}
                                {hoveredProject === project.id && (
                                    <ul className="text-gray-400 text-sm space-y-1 mb-4">
                                        {project.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-[#e62429] mr-2">•</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#e62429]/20 text-[#fdd835] px-2 py-1 rounded-md text-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* GitHub Link */}
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full bg-[#e62429] hover:bg-[#d41f24] text-white
                           px-4 py-2 rounded-md transition-colors duration-300 font-bangers text-sm"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    View Repository
                                </a>
                            </div>
                        </div>

                        {/* Hover Effect - Comic Style Lines */}
                        {hoveredProject === project.id && (
                            <>
                                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#fdd835]" />
                                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#fdd835]" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#fdd835]" />
                                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#fdd835]" />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;