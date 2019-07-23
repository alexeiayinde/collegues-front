import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isError:boolean;
  erreur:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.logout().subscribe(()=> {}
    , (error:HttpErrorResponse) => {
      this.isError = true;
      this.erreur = error.status + ' - ' + error.error;
    }
  )
  }

}
