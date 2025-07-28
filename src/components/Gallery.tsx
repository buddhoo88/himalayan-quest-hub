import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import artifacts1 from "@/assets/artifacts-1.jpg";
import excavationSite from "@/assets/excavation-site.jpg";
import manuscripts from "@/assets/manuscripts.jpg";
import goldenMask from "@/assets/golden-mask.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Древние золотые артефакты",
      description: "Найденные в ходе предыдущих экспедиций буддийские статуэтки и украшения",
      image: artifacts1,
      category: "Находки"
    },
    {
      id: 2,
      title: "Место раскопок",
      description: "Наша команда работает в экстремальных условиях высокогорья",
      image: excavationSite,
      category: "Экспедиция"
    },
    {
      id: 3,
      title: "Древние рукописи",
      description: "Тибетские манускрипты с золотыми иллюминациями",
      image: manuscripts,
      category: "Находки"
    },
    {
      id: 4,
      title: "Церемониальная маска",
      description: "Уникальная золотая маска древнего тибетского божества",
      image: goldenMask,
      category: "Находки"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-himalayan-forest">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Галерея
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Уникальные находки и моменты из наших экспедиций в поисках сокровищ древнего Тибета
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-himalayan-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary mb-2">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-card border-himalayan-moss">
                <div className="space-y-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm text-primary mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;