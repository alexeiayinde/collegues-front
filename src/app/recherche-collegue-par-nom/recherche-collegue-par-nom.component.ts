import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules:string[];

  constructor(private _serv:DataService) { }

  ngOnInit() {
  }

  rechercherParNom(nom:string) {
    if(nom=="Ayinde") {
      this._serv.rechercherParNom(nom).subscribe(matriculesVenusDuServeur => (this.listeMatricules = matriculesVenusDuServeur));
    } else {
      this.listeMatricules = [];
    }
  }

}
