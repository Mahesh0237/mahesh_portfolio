import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import { Github, Linkedin, Heart, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">

      {/* Navigation - with Theme Toggle inside */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-black gradient-text">MU.</a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Brand */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-black gradient-text">MU.</span>
              <span className="hidden md:block h-6 w-px bg-border"></span>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>

            {/* Center - Links */}
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Right - Social & Copyright */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Mahesh0237"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahesh-uppari-612521161/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/918374259858"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-500 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <span className="hidden md:block h-6 w-px bg-border"></span>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                © {new Date().getFullYear()} <span className="hidden sm:inline">Mahesh Uppari</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
