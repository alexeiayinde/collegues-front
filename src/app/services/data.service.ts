import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import Collegue from '../models/Collegue';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../environments/environment' 

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subMatriculeSelectionne = new Subject<string>();

  publier(matricule:string) {
    this.subMatriculeSelectionne.next(matricule);
  }

  abonnement():Observable<string> {
    return this.subMatriculeSelectionne.asObservable();
  }

  constructor(private httpClient:HttpClient) { }

  rechercherParNom(nom:string):Observable<string[]> {

      return this.httpClient.get<string[]>(URL_BACKEND+'?nom='+nom);

  }

  recupererCollegueCourant(matricule:string):Observable<Collegue> {
    return this.httpClient.get<Collegue>(URL_BACKEND+'/'+matricule);
  }

  modifierCollegue(matricule:string, collegue:Collegue) {
    return this.httpClient.patch<Collegue>(URL_BACKEND+'/'+matricule, collegue);
  }

  creerCollegue(collegue:Collegue):Observable<Collegue> {
    return this.httpClient.post<Collegue>(URL_BACKEND, {
      "nom":collegue.nom,
      "prenoms":collegue.prenoms,
      "email":collegue.email,
      "dateDeNaissance":collegue.dateDeNaissance,
      "photoUrl":collegue.photoUrl });
  }
}
