import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation, FormationService } from '../../Serives/formation.service';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  searchTerm: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  formations: Formation[] = [];

  constructor(private router:Router,private formationService: FormationService) {}

  ngOnInit(): void {
    this.formationService.getFormations().subscribe((data: Formation[]) => {
      console.log(data);
      
      this.formations = data;
    });
  }

  navigateToParticipation() {
    this.router.navigate(['/participer']);
  }

  filterFormations() {
    return this.formations.filter(formation => {
      const title = formation.name.toLowerCase();
      const searchTermLower = this.searchTerm.toLowerCase();
      const matchesSearchTerm = title.startsWith(searchTermLower);
      const matchesMinPrice = this.minPrice === null || formation.prix >= this.minPrice;
      const matchesMaxPrice = this.maxPrice === null || formation.prix <= this.maxPrice;
      return matchesSearchTerm && matchesMinPrice && matchesMaxPrice;
    });
  }
}
