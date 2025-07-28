import { Card } from "@/components/ui/card";
import { MapPin, Target, Calendar, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Цель экспедиции",
      description: "Поиск и изучение древних артефактов тибетской цивилизации, скрытых в высокогорных районах Гималаев"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Локация",
      description: "Труднодоступные районы Тибета на высоте 4000-5500 метров, где по легендам спрятаны сокровища"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Продолжительность",
      description: "18-месячная экспедиция с тремя основными сезонами раскопок и исследований"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Научная ценность",
      description: "Потенциал открытия новых данных о древних торговых путях и культурных связях"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            О проекте
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Наша международная археологическая экспедиция отправляется в самые отдаленные уголки Гималаев 
            в поисках утерянных сокровищ древней тибетской цивилизации.
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
          <h3 className="text-2xl font-bold mb-4 text-primary">Историческое значение</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Гималайский регион хранит множество тайн древней истории. По данным тибетских хроник 
              и китайских исторических документов, в этих горах находятся захоронения правителей 
              древнего королевства, а также храмовые сокровищницы, спрятанные от завоевателей.
            </p>
            <p>
              Наша экспедиция использует современные технологии: георадар, дроны с тепловизорами 
              и спутниковую картографию для обнаружения скрытых структур под многовековыми наносами.
            </p>
            <p>
              Ожидаемые находки включают золотые и серебряные изделия, древние рукописи, 
              религиозные артефакты и предметы быта, которые помогут лучше понять культуру 
              и торговые связи древнего Тибета.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;