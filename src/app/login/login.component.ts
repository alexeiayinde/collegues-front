import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nomUtilisateur:string;
  motDePasse:string;
  isError:boolean;
  erreur:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.isError = false;
  }

  login() {
    this.authService.authentifier(this.nomUtilisateur, this.motDePasse)
    .subscribe(() => {
      this.router.navigate(['/accueil']);
    }
    , (error:HttpErrorResponse) => {
      this.isError = true;
      if (error.status == 401) {
        this.erreur = "Nom d'utilisateur/mot de passe invalide(s)."
      } else if (error.status == 0) {
        this.erreur = "Erreur 500 - Veuillez recommencer ultérieurement."
      }
    })
  }
  
  recommencer() { 
    this.ngOnInit();
  }


}
