import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь была бы отправка формы
    alert("Thank you for your message! We will contact you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "buddhoo88@gmail.com",
      action: "mailto:buddhoo88@gmail.com"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Instagram",
      content: "@himalayansearch",
      action: "https://www.instagram.com/himalayansearch"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Facebook",
      content: "Beas Valley Expedition",
      action: "https://www.facebook.com/profile.php?id=100093136745670"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "YouTube",
      content: "K_Analistoriy",
      action: "https://www.youtube.com/@k_analistoriy"
    }
  ];

  return (
    <section id="contacts" className="py-20 px-4 bg-himalayan-forest">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Contacts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us for collaboration, investments, or additional information about the project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact us</h3>
            
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
              <h4 className="font-semibold text-foreground mb-3">Expedition Leader</h4>
              <p className="text-muted-foreground mb-2">
                <strong>Aleksandr Karpenko</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Lead archaeologist, specialist in ancient Asian civilizations. 
                Over 20 years of field research experience in the Himalayas region.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-card border-himalayan-moss/30">
              <h3 className="text-2xl font-bold text-foreground mb-6">Write to us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary"
                      placeholder="Your name"
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
                    Subject
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    required 
                    rows={5}
                    className="bg-himalayan-deep/30 border-himalayan-moss focus:border-primary resize-none"
                    placeholder="Tell us how you want to help our expedition or what information you would like to receive..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send message
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