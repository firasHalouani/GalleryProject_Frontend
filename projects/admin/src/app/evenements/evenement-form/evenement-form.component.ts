import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-evenement-form',
  templateUrl: './evenement-form.component.html',
  styleUrls: ['./evenement-form.component.scss']
})
export class EvenementFormComponent {
  evenementForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.evenementForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      prix: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.evenementForm.valid) {
      this.eventService.addEvenement(this.evenementForm.value).subscribe(
        (response) => {
          console.log('Événement ajouté avec succès', response);
          this.router.navigate(['/evenements']);  // Redirige vers la liste après l'ajout
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'événement', error);
        }
      );
    }
  }
}
