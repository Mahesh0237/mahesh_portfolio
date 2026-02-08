'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: 'Web Developer (Full Stack)',
        company: 'Quadrant IT Services Pvt. Ltd.',
        location: 'Hyderabad',
        duration: 'Aug 2024 – Present',
        type: 'Full-time',
        description: 'Developing and maintaining full-stack web applications using React.js, Next.js, Node.js, Express.js, and PostgreSQL. Responsible for designing RESTful backend APIs, implementing authentication and database logic, and ensuring seamless frontend-backend integration with optimized performance.',
        skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL'],
        current: true
    },
    {
        id: 2,
        title: 'Frontend Developer',
        company: 'Opulentus Overseas Careers Pvt. Ltd.',
        location: 'Hyderabad',
        duration: 'Dec 2022 – Feb 2024',
        type: 'Full-time',
        description: 'Built responsive and user-friendly interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3. Integrated frontend applications with backend APIs, optimized UI performance, and ensured cross-browser compatibility.',
        skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'API Integration'],
        current: false
    },
    {
        id: 3,
        title: 'Frontend Developer (Internship)',
        company: 'Incigol Software Solutions Pvt. Ltd.',
        location: 'Bengaluru',
        duration: 'Aug 2022 – Nov 2022',
        type: 'Internship',
        description: 'Completed a hands-on frontend development internship focusing on React.js component development, API integration, UI bug fixing, and collaborative development using Git and agile methodologies.',
        skills: ['React.js', 'Git', 'API Integration', 'Agile'],
        current: false
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-6 md:px-8 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
                    >
                        <Briefcase size={16} />
                        <span>Work Experience</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                        Professional Journey
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My career path and professional experience in software development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative mb-8 md:mb-12 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                            {/* Card */}
                            <div className={`relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all ml-0 md:ml-8 ${index % 2 === 0 ? 'md:ml-0 md:mr-8' : ''
                                }`}>
                                {/* Current Badge */}
                                {exp.current && (
                                    <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                                        Current
                                    </span>
                                )}

                                {/* Header */}
                                <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                                    <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''
                                        }`}>
                                        <span className="flex items-center gap-1">
                                            <Building2 size={14} className="text-primary" />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} className="text-accent" />
                                            {exp.location}
                                        </span>
                                    </div>
                                    <div className={`flex items-center gap-2 mt-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''
                                        }`}>
                                        <Calendar size={14} className="text-primary" />
                                        <span className="text-foreground font-medium">{exp.duration}</span>
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'
                                    }`}>
                                    {exp.description}
                                </p>

                                {/* Skills */}
                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    {exp.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
