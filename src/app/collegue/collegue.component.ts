import { Component, OnInit, Input, } from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  modifier: boolean = false;
  matricule: string;
  col:Collegue;
  isError: boolean = false;
  erreur: string;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this._serv.abonnement().subscribe(matricule => {
      this.matricule = matricule;
      this._serv.recupererCollegueCourant(this.matricule)
        .subscribe(collegue => {
          this.isError = false;
          this.col = collegue;
        },
          (error: HttpErrorResponse) => {
            this.isError = true;
            this.erreur = error.status + ' - ' + error.error;
          }
      );
    });
  }

  modifierCollegue() {
    this.modifier = true;
  }

  creerCollegue() {
    console.log("Création de collègue");
  }

  validerModif() {
    this.modifier = false;
  }

}
