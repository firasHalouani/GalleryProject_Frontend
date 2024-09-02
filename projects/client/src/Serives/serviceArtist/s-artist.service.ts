import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SArtistService {
   path:string = "http://localhost:8080/Tableaux";
  constructor(private http:HttpClient) {}

  getArtiste(){
    return  this.http.get(this.path+`/GetArtiste`);
  }

}
