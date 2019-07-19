import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

import PhotoDTO from '../models/PhotoDTO';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listePhotosDTO: PhotoDTO[];
  erreur:string;
  actionSub: Subscription;

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this.actionSub = this._serv.rechercherPhotos().subscribe(PhotosDTOVenusDuServeur => {
      this.listePhotosDTO = PhotosDTOVenusDuServeur;
    }), (error: HttpErrorResponse) => {
      this.erreur = error.status + ' - ' + error.error;
    }
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }

}
