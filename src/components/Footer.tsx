import { Mountain, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-himalayan-deep border-t border-himalayan-moss/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                Himalayan Expedition
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              International archaeological expedition in search of lost treasures 
              of ancient Tibetan civilization in the high-altitude regions of the Himalayas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Support', href: '#support' },
                { label: 'Contacts', href: '#contacts' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">buddhoo88@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">@himalayansearch</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-himalayan-moss/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Himalayan Expedition. All rights reserved. 
            <span className="text-primary ml-2">The treasure hunt continues</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;