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
import { CollegueGallerieComponent } from './collegue-gallerie/collegue-gallerie.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './services/auth.guard';

const ROUTES:Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'accueil', canActivate: [AuthGuard], component: AccueilComponent},
  { path: 'galerie', canActivate: [AuthGuard], component: GalerieComponent},
  { path: 'galerie/:matricule', canActivate: [AuthGuard], component: CollegueGallerieComponent},
  { path: 'apropos', canActivate: [AuthGuard], component: AProposComponent},
  { path: '', pathMatch: 'full', redirectTo:'login'}
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
    CollegueGallerieComponent,
    LoginComponent,
    LogoutComponent,
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
