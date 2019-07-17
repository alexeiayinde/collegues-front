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
  matricule:string;
  col = new Collegue("Test", "Test", "Test", "test@test.fr", new Date('December 15, 2005 15:24:00'),"https://www.unamur.be/en/sci/chemistry/rco/membres-images/inconnu/image");

  constructor(private _serv:DataService) {}

  ngOnInit() {
    this._serv.abonnement().subscribe(matricule => {
      this.matricule = matricule;
      this._serv.recupererCollegueCourant(this.matricule).subscribe(collegue => this.col = collegue);
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
