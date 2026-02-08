'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Phone, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Mahesh0237', color: 'hover:bg-primary hover:text-primary-foreground' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mahesh-uppari-612521161/', color: 'hover:bg-accent hover:text-accent-foreground' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/918374259858', color: 'hover:bg-green-500 hover:text-white' },
    { name: 'Email', icon: Mail, href: 'mailto:upparimahesh143@gmail.com', color: 'hover:bg-primary hover:text-primary-foreground' }
];

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'upparimahesh143@gmail.com', href: 'mailto:upparimahesh143@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8374259858', href: 'tel:+918374259858' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: 'https://www.google.com/maps/place/Hyderabad,+Telangana,+India' },
    { icon: Clock, label: 'Availability', value: 'Open to opportunities', href: undefined }
];

// EmailJS Configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_lj6x18k'; // e.g., 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_r4sunvl'; // e.g., 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = 'Tom4f8mTZZsG-vfcN'; // e.g., 'xxxxxxxxxxxxxxx'

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-6 md:px-8 relative overflow-hidden">
            {/* Background - Subtle for light mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative">
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
                        <Send size={16} />
                        <span>Get In Touch</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to hire me? I'd love to hear from you.
                        <span className="text-primary font-semibold"> Let's create something amazing!</span>
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
                            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold text-lg transition-all neon-button disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-center font-medium"
                                >
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-center font-medium"
                                >
                                    ❌ Oops! Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Right - Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, i) => {
                                const CardWrapper = info.href ? motion.a : motion.div;
                                return (
                                    <CardWrapper
                                        key={info.label}
                                        href={info.href}
                                        target={info.href ? "_blank" : undefined}
                                        rel={info.href ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="magic-card flex items-center gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 block"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-sm text-muted-foreground">{info.label}</p>
                                            <span className={`text-foreground font-semibold ${info.href ? 'hover:text-primary transition-colors' : ''}`}>
                                                {info.value}
                                            </span>
                                        </div>
                                        {info.href && <ArrowUpRight className="w-5 h-5 text-muted-foreground" />}
                                    </CardWrapper>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all ${social.color}`}
                                    >
                                        <social.icon size={24} />
                                        <span className="font-semibold">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center"
                        >
                            <p className="text-lg font-semibold mb-3">Ready to start a project?</p>
                            <p className="text-muted-foreground text-sm">
                                I typically respond within <span className="text-primary font-medium">24 hours</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
