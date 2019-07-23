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

  constructor(private _serv: DataService) { }

  ngOnInit() {
    this._serv.rechercherPhotos().subscribe(PhotosDTOVenusDuServeur => {
      this.listePhotosDTO = PhotosDTOVenusDuServeur;
    }), (error: HttpErrorResponse) => {
      this.erreur = error.status + ' - ' + error.error;
    }
  }

}
