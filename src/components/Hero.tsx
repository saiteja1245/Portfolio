
import { Github, Linkedin, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-portfolio-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="text-lg md:text-xl font-medium text-portfolio-primary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Aarav Mehta
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-portfolio-gray mb-6">
              B.Tech Computer Science Student & <span className="text-portfolio-primary">Full-Stack Developer</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl">
              Passionate about building scalable applications with expertise in frontend and backend technologies. 
              Specializing in AI, Cloud Computing, and creating impactful digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline flex items-center gap-2">
                View My Work
              </a>
            </div>
            
            <div className="flex mt-8 gap-4">
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://youtube.com/@lifewidabi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-display text-2xl">
                AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
