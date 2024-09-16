import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.scss']
})
export class EvenementListComponent implements OnInit {
  evenements: Evenement[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvenements();
  }

  getEvenements(): void {
    this.eventService.getEvenements().subscribe(
      (data: Evenement[]) => {
        this.evenements = data;
      }
    );
  }

  deleteEvenement(id: number): void {
    this.eventService.deleteEvenement(id).subscribe(
      () => {
        this.evenements = this.evenements.filter(e => e.id !== id);
        console.log('Événement supprimé avec succès');
      },
      error => {
        console.error('Erreur lors de la suppression de l\'événement', error);
      }
    );
  }
}
