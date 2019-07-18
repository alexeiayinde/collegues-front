import { Component, OnInit, OnDestroy, } from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  phaseModifier: boolean;
  phaseCreer:boolean;
  matricule: string;
  col:Collegue;
  isError: boolean = false;
  erreur: string;
  actionSub:Subscription;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.phaseCreer = false;
    this.actionSub = this._serv.abonnement().subscribe(matricule => {
      this.matricule = matricule;
      this._serv.recupererCollegueCourant(this.matricule)
        .subscribe(collegue => {
          this.phaseModifier = false;
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
    this.phaseModifier = true;
  }

  creerCollegue() {
    this.phaseCreer = true;
  }

  validerModif() {
    this._serv.modifierCollegue(this.col.matricule, this.col).subscribe(() => {
      this.phaseModifier = false;
      this.isError = false;
    }, 
      (error:HttpErrorResponse) => {
        this.isError = true;
        this.erreur = error.status + ' - ' + error.error;
      })
  }

  validerCreer($event) {
    if ($event == true) { 
      this.ngOnInit();
    }
  }

  ngOnDestroy() {
    this.actionSub.unsubscribe();
  }

}
