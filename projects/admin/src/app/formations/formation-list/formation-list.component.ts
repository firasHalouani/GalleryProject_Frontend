import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../Models/formation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss']
})
export class FormationListComponent implements OnInit {
  formations: Formation[] = [];

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data: Formation[]) => {
        this.formations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des formations:', error);
      }
    );
  }

  navigateToUpdate(  id: number,
    name: string,
    description: string,
    formateur: string,
    debut: string,
    fin: string, 
    heures: number,
    prix: number,
    image: string,
  ): void {
    const formation = new Formation(
      id ,
      name,
      description,
      formateur,
      debut,
      fin, 
      heures , 
      prix , 
      image,
     );
     console.log(formation);
     
     this.router.navigate(['/formations/update'], { state: { formation } });
    }

  deleteFormation(id: number): void {
    this.formationService.deleteFormation(id).subscribe(
      () => {
        this.loadFormations(); // Recharger les formations après suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de la formation:', error);
      }
    );
  }
}
