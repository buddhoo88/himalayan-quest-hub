import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

// Dynamic imports for all images
const discoveriesImages = import.meta.glob('/src/assets/discoveries/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
const expeditionImages = import.meta.glob('/src/assets/expedition/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
const researchImages = import.meta.glob('/src/assets/research/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
const teamImages = import.meta.glob('/src/assets/team/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const allItems: GalleryItem[] = [];

    // Add Discoveries images
    Object.entries(discoveriesImages).forEach(([path, url], index) => {
      const filename = path.split('/').pop()?.split('.')[0] || '';
      allItems.push({
        id: `discoveries-${index}`,
        title: `Discovery ${index + 1}`,
        description: "Archaeological artifacts and discoveries from our excavation work in the Beas Valley region.",
        image: url,
        category: "Discoveries"
      });
    });

    // Add Expedition images
    Object.entries(expeditionImages).forEach(([path, url], index) => {
      const filename = path.split('/').pop()?.split('.')[0] || '';
      allItems.push({
        id: `expedition-${index}`,
        title: `Expedition ${index + 1}`,
        description: "Documentation of our field work and excavation activities in the challenging Himalayan terrain.",
        image: url,
        category: "Expedition"
      });
    });

    // Add Research images
    Object.entries(researchImages).forEach(([path, url], index) => {
      const filename = path.split('/').pop()?.split('.')[0] || '';
      allItems.push({
        id: `research-${index}`,
        title: `Research ${index + 1}`,
        description: "Historical manuscripts, maps, and research materials guiding our archaeological work.",
        image: url,
        category: "Research"
      });
    });

    // Add Team images
    Object.entries(teamImages).forEach(([path, url], index) => {
      const filename = path.split('/').pop()?.split('.')[0] || '';
      allItems.push({
        id: `team-${index}`,
        title: `Team ${index + 1}`,
        description: "Our dedicated team of archaeologists, researchers, and expedition members at work.",
        image: url,
        category: "Team"
      });
    });

    setGalleryItems(allItems);
  }, []);

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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-card border-himalayan-moss">
                <DialogTitle className="sr-only">{item.title}</DialogTitle>
                <DialogDescription className="sr-only">{item.description}</DialogDescription>
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