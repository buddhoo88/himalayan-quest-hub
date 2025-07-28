import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-fade-in">
          HIMALAYAN EXPEDITION
        </h1>
        
        <p className="text-xl md:text-2xl text-gold-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Search for lost treasures of ancient civilization
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Tibet, Himalayas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>2024-2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>International team</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105"
            onClick={scrollToAbout}
          >
            Learn more
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Support project
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary cursor-pointer" onClick={scrollToAbout} />
      </div>
    </section>
  );
};

export default Hero;