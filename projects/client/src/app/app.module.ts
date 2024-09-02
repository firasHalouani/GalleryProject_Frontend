import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryComponent } from './galery/galery.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { FooterComponent } from './footer/footer.component';
import { EvenemntComponent } from './evenemnt/evenemnt.component';
import { AtelierComponent } from './atelier/atelier.component';
import { ArtistComponent } from './artist/artist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SousAtelierComponent } from './sous-atelier/sous-atelier.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    FormationComponent,
    HomeComponent,
    NavbarComponent,
    ParticipationFormComponent,
    FooterComponent,
    EvenemntComponent,
    ArtistComponent,
    AtelierComponent,
    SousAtelierComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
