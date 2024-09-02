import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrl: './atelier.component.css'
})
export class AtelierComponent {
  searchTerm: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  formations = [
    {
      title: "Peinture",
      description: "Une exploration du dessin à main levée avec des techniques variées.",
      imageUrl: '../../assets/gt.jpg',
    },
    {
      title: "Sculpture",
      description: "Apprenz à créer des sculptures avec divers matériaux.",
      imageUrl: '../../assets/R.jpeg',
    },
    {
      title: "Photographie",
      description: "Maîtrisez les techniques de photographie avec des experts.",
      imageUrl: '../../assets/gtt.jpg',
    },
  ];

  constructor(private router: Router) {}

  navigateToParticipation() {
    this.router.navigate(['/sousAtelier']);
  }

  filterFormations() {
    return this.formations.filter(formation => {
      const title = formation.title.toLowerCase();
      const searchTermLower = this.searchTerm.toLowerCase();
      const matchesSearchTerm = title.startsWith(searchTermLower);
      return matchesSearchTerm;

    });
  }
}
