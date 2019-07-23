import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn: boolean = false;
  isError: boolean;
  erreur: string;
  actionSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((collegue) => {
      this.isLoggedIn = true;
      this.isError = false;
    }, (error: HttpErrorResponse) => {
      this.isLoggedIn = false;
      this.isError = true;
      this.erreur = error.status + ' - ' + error.error;
    }
    );

    this.actionSub = this.authService.abonnementMenuLog().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.isError = false;
    }, (error: HttpErrorResponse) => {
      this.isLoggedIn = false;
      this.isError = true;
      this.erreur = error.status + ' - ' + error.error;
    })

  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }

}
