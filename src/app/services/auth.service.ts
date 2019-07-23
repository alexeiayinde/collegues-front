import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import Collegue from '../models/Collegue';
import { Observable, Subject } from 'rxjs';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subMenuLog = new Subject<boolean>();
  publierMenuLog(isLoggedIn:boolean) {
    this.subMenuLog.next(isLoggedIn);
  }
  abonnementMenuLog(): Observable<boolean> {
    return this.subMenuLog.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  authentifier(nomUtilisateur: string, motDePasse: string) {
    return this.httpClient.post(URL_BACKEND + '/collegues/auth', {
      "nomUtilisateur": nomUtilisateur,
      "motDePasse": motDePasse
    }, { withCredentials: true });
  }

  logout() {
    return this.httpClient.post(URL_BACKEND + '/logout', {}, { withCredentials: true })
  }

  isLoggedIn(): Observable<Collegue> {
    return this.httpClient.get<Collegue>(URL_BACKEND + '/collegues/me', { withCredentials: true })
  }
}
