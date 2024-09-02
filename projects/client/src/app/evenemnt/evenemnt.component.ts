import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenemnt',
  templateUrl: './evenemnt.component.html',
  styleUrl: './evenemnt.component.css'
})
export class EvenemntComponent {
  eventName: string = 'Titre de evenement';
  eventDescription: string = 'Join us for the International Conference on Sustainable Development. An essential event for professionals, researchers, and students passionate about the future of our planet.';
  startTime: string = '10:00';
  endTime: string = '02:00';

  // You can dynamically load these URLs from an API or service
  thumbnails: string[] = [
    '../../assets/a.JPG',
    '../../assets/b.JPG',
    '../../assets/c.JPG'
  ];
}
