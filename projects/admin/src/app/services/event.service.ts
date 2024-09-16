import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../Models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/Evenement'; 

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les événements
  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/GetEvenement`);
  }

  // Méthode pour ajouter un événement
  addEvenement(evenement: Evenement): Observable<Evenement> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Evenement>(`${this.apiUrl}/AddEvenement`, evenement, { headers });
  }

  // Méthode pour supprimer un événement
  deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteEvenement/${id}`);
  }
}
