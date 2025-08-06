import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import artifacts1 from "@/assets/discoveries/artifacts-1.jpg";
import excavationSite from "@/assets/expedition/excavation-team-new.jpg";
import manuscripts from "@/assets/research/manuscripts.jpg";
import teamCave from "@/assets/team/team-cave-exploration.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Artifacts Discovered",
      description: "All artefacts discovered, such as Buddhist figurines or ritual objects, will be documented and handed over to local authorities for preservation and further study.",
      image: artifacts1,
      category: "Discoveries"
    },
    {
      id: 2,
      title: "Excavation Sites",
      description: "Our team will excavate carefully selected areas of the Beas Valley identified through AI analysis of satellite imagery for potential archaeological significance.",
      image: excavationSite,
      category: "Expedition"
    },
    {
      id: 3,
      title: "Research Materials",
      description: "We will analyze historical manuscripts and other cultural materials to gain insight into the ancient civilizations of the region and their significance.",
      image: manuscripts,
      category: "Research"
    },
    {
      id: 4,
      title: "Our Team",
      description: "A team of archaeologists, geographers, and logisticians working in challenging high-altitude conditions to uncover the history of the Beas Valley.",
      image: teamCave,
      category: "Team"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-himalayan-forest">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Documentation of our archaeological work in the Beas River Valley and discoveries from our expedition
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