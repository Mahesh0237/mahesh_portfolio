'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles, MapPin, Briefcase, Github, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Animated background elements - Green themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Subtle dot pattern for light mode */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#05966912_1px,transparent_1px)] dark:bg-[radial-gradient(#10b98112_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="gradient-text">Mahesh Uppari</span>
              </h1>
            </motion.div>

            {/* Role & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground/90 mb-4">
                Full Stack Developer
              </h2>
              {/* Full Stack Developer with 3+ years of experience in building scalable web and mobile applications using React.js, Next.js, Node.js, and PostgreSQL. Skilled in REST APIs, payment integrations, authentication, and performance optimization, with a strong focus on clean UI/UX and reliable backend systems */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Full Stack Developer with <span className="text-primary font-semibold">3+ years</span> of experience in building scalable web and mobile applications using React.js, Next.js, Node.js, and PostgreSQL. Skilled in REST APIs, payment integrations, authentication, and performance optimization, with a strong focus on clean UI/UX and reliable backend systems
              </p>
            </motion.div>

            {/* Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
                <MapPin size={16} className="text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
                <Briefcase size={16} className="text-primary" />
                <span>3+ Years</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
                <Sparkles size={16} className="text-accent" />
                <span>10+ Projects</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold transition-all neon-button"
              >
                <Mail size={18} />
                <span>Hire Me</span>
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-card border-2 border-primary/30 hover:border-primary text-foreground rounded-xl font-bold transition-all hover:bg-primary/5"
              >
                <span>View Projects</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="/Mahesh_resume.pdf"
                download="Mahesh_Uppari_Resume.pdf"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-accent text-white rounded-xl font-bold transition-all neon-button"
                style={{ boxShadow: '0 4px 15px rgba(20, 184, 166, 0.35)' }}
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Mahesh0237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card/80 border border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahesh-uppari-612521161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card/80 border border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/918374259858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card/80 border border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-[2rem] blur-2xl" />

              {/* Main image container */}
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-[2rem] opacity-75" />

                {/* Image wrapper */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[1.75rem] overflow-hidden bg-card border-4 border-white dark:border-card shadow-2xl">
                  <Image
                    src="/profile1.png"
                    alt="Mahesh Uppari - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 px-4 py-2 rounded-xl bg-card shadow-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    <span className="text-sm font-bold">10+ Projects</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl bg-card shadow-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    <span className="text-sm font-bold">3+ Years Exp</span>
                  </div>
                </motion.div>

                {/* Tech badges around image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-1/4 -left-12 hidden lg:block"
                >
                  <div className="skill-tag px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    React
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute top-1/2 -right-10 hidden lg:block"
                >
                  <div className="skill-tag px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    Node.js
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-1/4 -left-14 hidden lg:block"
                >
                  <div className="skill-tag px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    Next.js
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
