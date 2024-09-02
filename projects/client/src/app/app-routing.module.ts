import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { HomeComponent } from './home/home.component';
import { AtelierComponent } from './atelier/atelier.component';
import { FormationComponent } from './formation/formation.component';
import { EvenemntComponent } from './evenemnt/evenemnt.component';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { ArtistComponent } from './artist/artist.component';
import { SousAtelierComponent } from './sous-atelier/sous-atelier.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'artist' , component: ArtistComponent},
  { path: 'galerie/:id', component: GaleryComponent },
  { path: 'atelier', component: AtelierComponent },
  { path: 'sousAtelier', component: SousAtelierComponent },
  { path: 'formation', component: FormationComponent},
  { path: 'participer', component:  ParticipationFormComponent},
  { path: 'evenement', component: EvenemntComponent},
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
