import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { MenuComponent } from './menu/menu.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';

const ROUTES:Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'galerie', component: GalerieComponent},
  { path: 'apropos', component: AProposComponent},
  { path: '', pathMatch: 'full', redirectTo:'accueil'}
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponent,
    GalerieComponent,
    AProposComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
