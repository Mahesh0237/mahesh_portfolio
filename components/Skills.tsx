'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Server, Wrench, Star, Layers, Cpu, Palette } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: Globe,
        color: "from-emerald-500 to-teal-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
    },
    {
        title: "Backend",
        icon: Server,
        color: "from-teal-500 to-cyan-400",
        bgColor: "bg-teal-500/10",
        borderColor: "border-teal-500/20",
        skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM", "MY SQL", "Authentication", "Payment Integrations"]
    },
    {
        title: "Mobile",
        icon: Smartphone,
        color: "from-green-500 to-emerald-400",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        skills: ["React Native", "Expo", "iOS", "Android", "Mobile UI/UX", "Cross-Platform"]
    },
    {
        title: "Database",
        icon: Database,
        color: "from-cyan-500 to-blue-400",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/20",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"]
    },
    {
        title: "WordPress",
        icon: Palette,
        color: "from-indigo-500 to-purple-400",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        skills: ["Theme Customization", "Elementor"]
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        color: "from-orange-500 to-amber-400",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify"]
    }
];

const highlights = [
    { number: "20+", label: "Technologies", icon: Layers },
    { number: "3+", label: "Years Experience", icon: Star },
    { number: "∞", label: "Learning Mindset", icon: Cpu }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
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
                        <Code size={16} />
                        <span>Tech Stack</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies I use to build amazing digital experiences
                    </p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
                >
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-4 rounded-2xl bg-card/80 border border-border/50"
                        >
                            <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <div className="text-3xl md:text-4xl font-black gradient-text">{item.number}</div>
                            <div className="text-xs text-muted-foreground font-medium mt-1">{item.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${category.bgColor} ${category.borderColor} border text-foreground hover:scale-105 transition-transform cursor-default`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20">
                        <Star size={18} className="text-primary" />
                        <span className="text-sm font-medium text-foreground">Always learning and exploring new technologies</span>
                        <Cpu size={18} className="text-accent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
