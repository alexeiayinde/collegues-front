import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  col:Collegue = new Collegue("", "", "", new Date(), "");
  isError:boolean;
  creerOk:boolean;
  erreur:string;

  @Output() isCreer:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.creerOk = false;
    this.isError = false;
  }

  creer() {
    this._serv.creerCollegue(this.col)
    .subscribe(collegue => {
      this.creerOk = true;
      this.isError = false;
      this._serv.publier(collegue.matricule);
  },
      (error:HttpErrorResponse) => {
        this.isError = true;
        this.erreur = error.status + ' - ' + error.error;
      }
    )}

    valider() {
      this.isCreer.emit(true);
    }

    recommencer() {
      this.ngOnInit();
    }

    annuler() {
      this.isCreer.emit(true);
    }

}
