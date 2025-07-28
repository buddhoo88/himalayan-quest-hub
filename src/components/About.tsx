import { Card } from "@/components/ui/card";
import { MapPin, Target, Calendar, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Expedition Goal",
      description: "Search and study ancient artifacts of Tibetan civilization hidden in the high-altitude regions of the Himalayas"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location",
      description: "Remote areas of Tibet at altitudes of 4000-5500 meters, where treasures are hidden according to legends"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Duration",
      description: "18-month expedition with three main seasons of excavations and research"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Scientific Value",
      description: "Potential to discover new data about ancient trade routes and cultural connections"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            About the Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our international archaeological expedition ventures into the most remote corners of the Himalayas 
            in search of lost treasures of ancient Tibetan civilization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-himalayan-moss/30">
          <h3 className="text-2xl font-bold mb-4 text-primary">Historical Significance</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Himalayan region holds many secrets of ancient history. According to Tibetan chronicles 
              and Chinese historical documents, these mountains contain burial sites of ancient kingdom rulers, 
              as well as temple treasuries hidden from conquerors.
            </p>
            <p>
              Our expedition uses modern technologies: ground-penetrating radar, thermal drones, 
              and satellite cartography to detect hidden structures beneath centuries-old sediments.
            </p>
            <p>
              Expected finds include gold and silver artifacts, ancient manuscripts, 
              religious objects, and everyday items that will help better understand the culture 
              and trade connections of ancient Tibet.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;