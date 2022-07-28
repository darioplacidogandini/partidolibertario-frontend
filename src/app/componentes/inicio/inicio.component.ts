import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authenticationService.isUserLoggedIn();
  }


}
