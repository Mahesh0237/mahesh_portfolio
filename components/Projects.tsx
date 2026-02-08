'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, FolderOpen, Globe, Smartphone, Monitor, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Task Management System",
        description: "SaaS application for team collaboration and project management with real-time updates.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
        link: "https://tmstribha.techdino.in/",
        github: null,
        status: "live",
        type: "web",
        featured: false
    },
    {
        id: 2,
        title: "Meetowner",
        description: "Mobile application connecting property seekers directly with owners.",
        tags: ["React Native", "Mobile App"],
        link: "https://www.meetowner.in/",
        github: null,
        status: "live",
        type: "mobile",
        featured: false
    },
    {
        id: 3,
        title: "Rudra Home Tuitions",
        description: "Educational platform connecting students with qualified tutors for personalized learning.",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://rudrahometuitions.com/",
        github: null,
        status: "live",
        type: "web"
    },
    {
        id: 4,
        title: "Diary Souls",
        description: "Diary Souls is a digital journaling platform that enables users to create private and collaborative diaries with secure access controls. It allows individuals to document personal thoughts, share entries with selected members, and access premium content through subscription plans, ensuring a smooth and engaging journaling experience.",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://diarysouls.com/",
        github: null,
        status: "live",
        type: "web",
        featured: true
    },
    {
        id: 5,
        title: "Book My Theatre",
        description: "BookMyTheater is a cross-platform movie streaming and digital purchase platform that allows users to watch and buy films seamlessly across web, mobile, and smart TV devices. The platform supports filmmaker onboarding with an admin-controlled content approval process, ensuring quality and compliance. It also features secure wallet-based payments and revenue-sharing mechanisms, providing a smooth experience for both viewers and content creators",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://uat.bookmytheatre.com/",
        github: null,
        status: "live",
        type: "web",
        featured: true
    },
    {
        id: 6,
        title: "Limousin Ride",
        description: "Limousine Ride is a luxury transportation booking platform designed for event-based and on-demand travel services. It allows users to schedule rides with live route visualization, pickup and drop-off selection, and real-time distance calculations. The platform ensures secure online payments and role-based access control, while an integrated admin system manages vehicle availability, driver assignments, and customer bookings efficiently.",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://limousineride.techdino.in/",
        github: null,
        status: "live",
        type: "web",
        featured: true
    },
    {
        id: 7,
        title: "Space Pet Clinic",
        description: "Veterinary clinic management mobile app with appointment scheduling.",
        tags: ["React Native", "Node.js"],
        link: null,
        github: null,
        status: "development",
        type: "mobile"
    },
    {
        id: 8,
        title: "Abode CRM",
        description: "Property CRM desktop application built with Electron framework.",
        tags: ["Electron", "Desktop App"],
        link: null,
        github: null,
        status: "development",
        type: "desktop"
    },
    {
        id: 9,
        title: "Klogs Solutions",
        description: "Technology solutions and consulting services website.",
        tags: ["WordPress", "Elementor"],
        link: "https://klogsolutions.co.in",
        github: null,
        status: "live",
        type: "web"
    }
];

const getTypeIcon = (type: string) => {
    switch (type) {
        case 'mobile': return Smartphone;
        case 'desktop': return Monitor;
        default: return Globe;
    }
};

const getStatusStyle = (status: string) => {
    switch (status) {
        case 'live':
            return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
        case 'testing':
            return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
        default:
            return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    }
};

export default function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-16 px-6 md:px-8 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
                    >
                        <FolderOpen size={16} />
                        <span>My Work</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects I've worked on
                    </p>
                </motion.div>

                {/* Featured Projects - Large Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project, index) => {
                        const TypeIcon = getTypeIcon(project.type);
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                                                <TypeIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getStatusStyle(project.status)}`}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                    {project.status === 'live' ? 'Live' : project.status === 'testing' ? 'Testing' : 'In Development'}
                                                </span>
                                            </div>
                                        </div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                                            >
                                                <ArrowUpRight size={20} />
                                            </a>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm font-medium text-foreground/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-semibold text-sm transition-all neon-button"
                                            >
                                                <ExternalLink size={16} />
                                                View Project
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border/50 rounded-xl font-semibold text-sm hover:border-primary/50 transition-all"
                                            >
                                                <Github size={16} />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Other Projects - Compact Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Rocket size={20} className="text-primary" />
                        Other Projects
                    </h3>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {otherProjects.map((project, index) => {
                        const TypeIcon = getTypeIcon(project.type);
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <TypeIcon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                                            <span className="w-1 h-1 rounded-full bg-current"></span>
                                            {project.status === 'live' ? 'Live' : project.status === 'testing' ? 'Testing' : 'Dev'}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-md bg-muted/50 text-xs font-medium text-foreground/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                                        >
                                            <ExternalLink size={14} />
                                            View Live
                                        </a>
                                    ) : (
                                        <span className="text-sm text-muted-foreground italic">
                                            {project.status === 'testing' ? 'In Testing' : 'Coming Soon'}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-primary/20">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            Have a project in mind?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Let's work together to bring your ideas to life
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold transition-all neon-button"
                        >
                            <Rocket size={18} />
                            Start a Project
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
