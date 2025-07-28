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
                Гималайская Экспедиция
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Международная археологическая экспедиция в поисках затерянных сокровищ 
              древней тибетской цивилизации в высокогорных районах Гималаев.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Быстрые ссылки</h3>
            <div className="space-y-2">
              {[
                { label: 'О проекте', href: '#about' },
                { label: 'Галерея', href: '#gallery' },
                { label: 'Поддержать', href: '#support' },
                { label: 'Контакты', href: '#contacts' }
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
            <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">expedition@himalayan-quest.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">@himalayan_expedition</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-himalayan-moss/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Гималайская Экспедиция. Все права защищены. 
            <span className="text-primary ml-2">Поиск сокровищ продолжается</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;