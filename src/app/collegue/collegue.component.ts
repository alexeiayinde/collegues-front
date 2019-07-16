import { Component, OnInit, Input,} from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  modifier:boolean = false;

  col:Collegue;

  constructor(private _serv:DataService) {}

  ngOnInit() {
    this.col = this._serv.recupererCollegueCourant();
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
