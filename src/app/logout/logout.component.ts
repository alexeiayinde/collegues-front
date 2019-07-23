import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isError:boolean;
  erreur:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.logout().subscribe(()=> {
      this.authService.publierMenuLog(false);
      this.router.navigate(['/login']);
    }
    , (error:HttpErrorResponse) => {
      this.isError = true;
      this.erreur = "Erreur 500 - Veuillez recommencer ultérieurement.";
    }
  )
  }

}
