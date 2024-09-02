import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {
  title = 'Éclat de Couleurs';
  description = "Éclat de Couleurs' est une frame artistique vibrante et dynamique qui capture l'énergie et la diversité des couleurs. Cette frame est par des éclaboussures de peinture multicolore qui se propagent créant un effet de mouvement et de vivacité. Les teintes éclatantes se mélangent.";
  artist = 'Mohamed fandouli';
  price = '100DT';
  images = [
    '../../assets/a.JPG',
    '../../assets/b.JPG',
    '../../assets/c.JPG',
  ];
  
  currentIndex = 0; // Index de l'image actuellement affichée au centre

  selectImage(index: number) {
    if (index >= 0 && index < this.images.length) {
      // Mettre à jour l'image centrale avec l'image cliquée
      this.currentIndex = index;
    }
  }
}
