import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Alex Johnson</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about creating scalable applications that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-smooth hover:scale-105 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gradient hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-float">
            <a 
              href="https://github.com" 
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex@example.com" 
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;