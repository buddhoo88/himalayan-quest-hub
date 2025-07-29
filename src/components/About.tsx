import { Card } from "@/components/ui/card";
import { MapPin, Target, Calendar, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Expedition Goal",
      description: "To discover and study artifacts of ancient civilizations in the Beas River Valley, using satellite imagery analysis and field research, with a focus on the region's historical significance as the eastern boundary of Alexander the Great's campaigns in 326 BCE."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location",
      description: "The Beas River Valley, flowing through Manali, Himalayas, starting from its source near the Rohtang Pass (altitude approximately 4,360 m) and through the Kullu Valley, where the river shapes a unique landscape and is part of the tourism infrastructure."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Duration",
      description: "A 6-month expedition with one main season of excavations and research, avoiding the monsoon season."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Scientific Value",
      description: "The potential discovery of new data on ancient regional cultures, their trade routes, and connections with the Harappan civilization, as well as exploring the historical role of the Beas River as the eastern boundary of Alexander the Great's campaigns, mentioned in ancient texts as Vipāśā."
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
            Our international archaeological expedition is heading to the Beas River Valley (ancient Sanskrit name — Vipāśā, Greek — Hyphasis), located in the Manali region, Himalayas, to search for traces of lost civilizations possibly connected to the ancient cultures of the area.
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
              The Beas River Valley holds many secrets of ancient history. According to historical records 
              and archaeological evidence, this region was significant as the eastern boundary of Alexander the Great's campaigns in 326 BCE, 
              mentioned in ancient texts as Vipāśā (Sanskrit) or Hyphasis (Greek).
            </p>
            <p>
              Our expedition uses modern technologies: ground-penetrating radar, thermal drones, 
              and satellite cartography to detect hidden structures and archaeological sites in the Beas Valley.
            </p>
            <p>
              Expected finds include artifacts related to ancient regional cultures, trade route evidence, 
              connections with the Harappan civilization, and materials that will help better understand the historical 
              significance of this region in ancient times.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;