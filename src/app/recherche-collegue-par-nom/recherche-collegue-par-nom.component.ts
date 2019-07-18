import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: string[];
  matriculeExists: boolean = true;
  isError: boolean = false;
  erreur: string;

  constructor(private _serv: DataService) { }

  ngOnInit() {
  }

  rechercherParNom(nom: string) {
    if (nom != "") {
      this._serv.rechercherParNom(nom)
        .subscribe(matriculesVenusDuServeur => {
          this.isError = false;
          if (matriculesVenusDuServeur.length == 0) {
            this.matriculeExists = false;
          } else {
            this.matriculeExists = true;
          }
          this.listeMatricules = matriculesVenusDuServeur;
        },
          (error: HttpErrorResponse) => {
            this.erreur = error.name + ' - Code : ' + error.status + '. Veuillez essayer de nouveau ultérieurement.';
            this.isError = true;
          });
    }
  }

  selectionnerCollegue(matricule: string) {
    this._serv.publier(matricule);
  }

}
