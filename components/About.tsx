'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Rocket, Users, TrendingUp, Award, Target, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Modern React & Next.js applications with stunning UI/UX",
        color: "from-primary to-primary/60"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Cross-platform React Native apps for iOS & Android",
        color: "from-accent to-accent/60"
    },
    {
        icon: Server,
        title: "Backend & APIs",
        description: "Scalable Node.js backends with PostgreSQL & Prisma",
        color: "from-primary to-accent"
    }
];

const stats = [
    { icon: Rocket, number: "10+", label: "Projects Completed" },
    { icon: Users, number: "8+", label: "Happy Clients" },
    { icon: TrendingUp, number: "3+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Success Rate" }
];

const expertise = [
    "React & Next.js",
    "React Native",
    "Node.js & Express",
    "PostgreSQL & Prisma",
    "TypeScript",
    "Tailwind CSS"
];

export default function About() {
    return (
        <section id="about" className="pt-24 px-6 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
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
                        <Target size={16} />
                        <span>About Me</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                        Turning Ideas Into Reality
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A passionate Full Stack Developer crafting exceptional digital experiences
                    </p>
                </motion.div>

                {/* Main Content - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                    {/* Left Column - About Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Profile Card */}
                        <div className="relative">
                            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20">
                                            <Image
                                                src="/profile.png"
                                                alt="Mahesh Uppari"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-foreground">Mahesh Uppari</h3>
                                            <p className="text-primary font-semibold">Full Stack Developer</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            I'm a dedicated developer with <span className="text-primary font-semibold">3+ years</span> of
                                            experience building web applications, mobile apps, and WordPress websites.
                                            I specialize in the <span className="text-accent font-semibold">React ecosystem</span> and
                                            love turning complex problems into elegant solutions.
                                        </p>
                                        <p>
                                            My journey started as an intern, and through continuous learning and dedication,
                                            I've grown into a Full Stack Developer role. I focus on writing clean,
                                            maintainable code and creating <span className="text-primary font-semibold">pixel-perfect UIs</span>.
                                        </p>
                                    </div>

                                    {/* Expertise Tags */}
                                    <div className="mt-6 pt-6 border-t border-border/50">
                                        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                                            <Zap size={14} className="text-primary" />
                                            Core Expertise
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {expertise.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <stat.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="text-3xl font-black gradient-text">{stat.number}</div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Services */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-foreground mb-2">What I Do</h3>
                            <p className="text-muted-foreground">Services I offer to bring your ideas to life</p>
                        </div>

                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative"
                            >
                                <div className="magic-card p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all flex items-start gap-5">
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 size={18} className="text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 mt-8"
                        >
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Ready to start a project?</h4>
                                    <p className="text-sm text-muted-foreground">Let's build something amazing together</p>
                                </div>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold transition-all neon-button text-sm"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
