// Utility to dynamically load images from asset folders
export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Function to import all images from a folder
function importAll(r: any): Record<string, string> {
  const images: Record<string, string> = {};
  r.keys().map((item: string, index: number) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Helper to get images from asset folders
export const getImagesFromFolder = (folderName: string): string[] => {
  try {
    // This will be populated by the actual files in the folders
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const images: string[] = [];
    
    // This is a placeholder - in a real app you'd use dynamic imports
    // For now, we'll return empty array and images will be added manually
    return images;
  } catch (error) {
    console.warn(`No images found in folder: ${folderName}`);
    return [];
  }
};

// Mock data structure that matches the folder structure
export const getGalleryData = (): GalleryImage[] => {
  return [
    {
      id: "discoveries-1",
      title: "Artifacts Discovered",
      description: "All artefacts discovered, such as Buddhist figurines or ritual objects, will be documented and handed over to local authorities for preservation and further study.",
      image: "/src/assets/discoveries/artifacts-1.jpg",
      category: "Discoveries"
    },
    {
      id: "expedition-1", 
      title: "Excavation Sites",
      description: "Our team will excavate carefully selected areas of the Beas Valley identified through AI analysis of satellite imagery for potential archaeological significance.",
      image: "/src/assets/expedition/excavation-team-new.jpg",
      category: "Expedition"
    },
    {
      id: "research-1",
      title: "Research Materials", 
      description: "We will analyze historical manuscripts and other cultural materials to gain insight into the ancient civilizations of the region and their significance.",
      image: "/src/assets/research/manuscripts.jpg",
      category: "Research"
    },
    {
      id: "team-1",
      title: "Our Team",
      description: "A team of archaeologists, geographers, and logisticians working in challenging high-altitude conditions to uncover the history of the Beas Valley.",
      image: "/src/assets/team/team-cave-exploration.jpg", 
      category: "Team"
    }
  ];
};