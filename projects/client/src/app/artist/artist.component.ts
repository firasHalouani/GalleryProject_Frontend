import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SArtistService } from '../../Serives/serviceArtist/s-artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  searchTerm: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  formations : any[] = [];

  constructor(private router: Router , private Artiste  : SArtistService ) {}
  ngOnInit(): void {
    this.Artiste.getArtiste().subscribe((data : any )=> {
      {
        this.formations = data
        console.log(this.formations)
      }
    })
  }

  navigateToParticipation(id : number ) {
    this.router.navigate([`/galerie/${id}`]);
  }

  filterFormations() {
    return this.formations.filter(formation => {
      const title = formation.title.toLowerCase();
      const searchTermLower = this.searchTerm.toLowerCase();
      const matchesSearchTerm = title.startsWith(searchTermLower);
      const matchesMinPrice = this.minPrice === null || formation.price >= this.minPrice;
      const matchesMaxPrice = this.maxPrice === null || formation.price <= this.maxPrice;
      return matchesSearchTerm && matchesMinPrice && matchesMaxPrice;
    });
  }
}
