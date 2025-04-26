// src/components/Skills.jsx
import { useState } from 'react';

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    const skillSets = [
        {
            id: 'languages',
            name: 'Programming Languages',
            icon: '💻',
            color: '#e62429',
            skills: [
                { name: 'JavaScript', level: 90, description: 'Expert in ES6+ features and frontend development' },
                { name: 'Java', level: 85, description: 'Strong experience with Spring Boot and enterprise applications' },
                { name: 'Python', level: 85, description: 'Data analysis, ML pipelines, and backend development' },
                { name: 'SQL', level: 80, description: 'Database design and query optimization' },
                { name: 'C++', level: 75, description: 'System programming and algorithms' },
                { name: 'HTML5/CSS3', level: 90, description: 'Responsive design and modern web standards' },
            ]
        },
        {
            id: 'tools',
            name: 'Developer Tools',
            icon: '🛠️',
            color: '#fdd835',
            skills: [
                { name: 'AWS', level: 85, description: 'CloudFormation, Lambda, S3, Glue, EC2' },
                { name: 'GCP', level: 85, description: 'Google Kubernetes Engine, Cloud Build' },
                { name: 'Kubernetes', level: 82, description: 'Container orchestration and microservices' },
                { name: 'Docker', level: 88, description: 'Containerization and deployment' },
                { name: 'Git/GitHub', level: 90, description: 'Version control and collaboration' },
                { name: 'CI/CD', level: 85, description: 'Pipeline automation and deployment' },
                { name: 'Terraform', level: 80, description: 'Infrastructure as Code' },
                { name: 'Jira', level: 85, description: 'Agile project management' },
            ]
        },
        {
            id: 'frameworks',
            name: 'Libraries & Frameworks',
            icon: '📚',
            color: '#4f46e5',
            skills: [
                { name: 'React', level: 90, description: 'Component-based UI development' },
                { name: 'Spring Boot', level: 85, description: 'Enterprise Java applications' },
                { name: 'Flask', level: 82, description: 'Python web development' },
                { name: 'Node.js', level: 80, description: 'Server-side JavaScript' },
                { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' },
                { name: 'MongoDB', level: 78, description: 'NoSQL database operations' },
                { name: 'PostgreSQL', level: 82, description: 'Relational database management' },
                { name: 'Apache Spark', level: 75, description: 'Big data processing' },
            ]
        },
        {
            id: 'ml',
            name: 'Machine Learning & Data',
            icon: '🤖',
            color: '#10b981',
            skills: [
                { name: 'Pandas', level: 85, description: 'Data manipulation and analysis' },
                { name: 'NumPy', level: 80, description: 'Numerical computing' },
                { name: 'Keras', level: 75, description: 'Deep learning framework' },
                { name: 'OpenCV', level: 72, description: 'Computer vision applications' },
                { name: 'Matplotlib', level: 78, description: 'Data visualization' },
                { name: 'SpaCy', level: 70, description: 'Natural language processing' },
                { name: 'Transformers', level: 68, description: 'State-of-the-art NLP models' },
            ]
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bangers text-[#e62429] mb-4">
                    Power Stats
                </h1>
                <p className="text-[#fdd835] text-xl font-bangers">
                    Technical Arsenal
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillSets.map((skillSet) => (
                    <div
                        key={skillSet.id}
                        onClick={() => setActiveSkill(activeSkill === skillSet.id ? null : skillSet.id)}
                        className={`cursor-pointer transform transition-all duration-300 hover:scale-105
              ${activeSkill === skillSet.id ? 'scale-105' : ''}`}
                    >
                        <div className="bg-black/60 backdrop-blur-sm border border-[#e62429]/30 rounded-lg p-6">
                            <div className="flex items-center mb-6">
                                <span className="text-2xl mr-2">{skillSet.icon}</span>
                                <h3 className="text-xl font-bangers" style={{ color: skillSet.color }}>
                                    {skillSet.name}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {skillSet.skills.map((skill) => (
                                    <div key={skill.name} className="relative">
                                        <div className="flex justify-between text-white mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: activeSkill === skillSet.id ? `${skill.level}%` : '0%',
                                                    backgroundColor: skillSet.color
                                                }}
                                            />
                                        </div>
                                        {activeSkill === skillSet.id && (
                                            <p className="text-xs text-gray-400 mt-1">
                                                {skill.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;