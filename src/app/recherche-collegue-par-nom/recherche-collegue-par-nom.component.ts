import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input() listeMatricules:string[];
  rechercher:boolean = false;

  constructor(private _serv:DataService) { }

  ngOnInit() {
  }

  rechercherParNom(nom:string) {
    if(nom=="Ayinde") {
      this.rechercher = true;
      this.listeMatricules = this._serv.rechercherParNom(nom);
    } else {
      this.rechercher = false;
    }
  }

}
