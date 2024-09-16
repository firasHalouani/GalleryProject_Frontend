export interface Evenement {
    id: number;
    name: string;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    prix: number;
    media: any[];  // Si tu as une entité Media, tu peux créer un modèle pour cela aussi
  }
  