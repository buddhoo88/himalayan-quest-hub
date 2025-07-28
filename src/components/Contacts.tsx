import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь была бы отправка формы
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "expedition@himalayan-quest.org",
      action: "mailto:expedition@himalayan-quest.org"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      action: "tel:+74951234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Офис",
      content: "Москва, ул. Археологическая, 15",
      action: null
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Соцсети",
      content: "@himalayan_expedition",
      action: "https://twitter.com/himalayan_expedition"
    }
  ];

  return (
    <section id="contacts" className="py-20 px-4 bg-himalayan-forest">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами для сотрудничества, инвестиций или получения дополнительной информации о проекте
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Свяжитесь с нами</h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                    {contact.action ? (
                      <a 
                        href={contact.action}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={contact.action.startsWith('http') ? '_blank' : undefined}
                        rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{contact.content}</span>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-card border-himalayan-moss/30">
              <h4 className="font-semibold text-foreground mb-3">Руководитель экспедиции</h4>
              <p className="text-muted-foreground mb-2">
                <strong>Доктор Александр Петров</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Ведущий археолог, специалист по древним цивилизациям Азии. 
                Более 20 лет опыта полевых исследований в Тибете и Непале.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-card border-himalayan-moss/30">
              <h3 className="text-2xl font-bold text-foreground mb-6">Написать нам</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Тема
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary"
                    placeholder="Тема сообщения"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    required 
                    rows={5}
                    className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary resize-none"
                    placeholder="Расскажите, как вы хотите помочь нашей экспедиции или какую информацию хотели бы получить..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;