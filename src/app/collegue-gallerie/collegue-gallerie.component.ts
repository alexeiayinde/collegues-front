import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { DataService } from '../services/data.service';
import Collegue from '../models/Collegue';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue-gallerie',
  templateUrl: './collegue-gallerie.component.html',
  styleUrls: ['./collegue-gallerie.component.css']
})
export class CollegueGallerieComponent implements OnInit {

  matricule: string;
  collegue: Collegue;
  erreur: string;

  constructor(private route: ActivatedRoute, private _serv: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.matricule = params.get('matricule');
      this._serv.recupererCollegueCourant(this.matricule).subscribe(collegue => {
        this.collegue = collegue;
      },
        (error: HttpErrorResponse) => {
          this.erreur = error.status + ' - ' + error.error;
        })
    })
  }

}
