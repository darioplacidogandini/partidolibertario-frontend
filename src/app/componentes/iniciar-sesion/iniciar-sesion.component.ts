import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm: FormGroup;
  usernameFieldValue: string = '';
  passwordFieldValue: string = '';
  invalidLogin = false;

  constructor(private route:Router,private formBuilder:FormBuilder,public dialog:MatDialog,
    private loginservice: AuthenticationService) {
      this.loginForm = this.formBuilder.group({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      })
    }

 ngOnInit() {}

  public getErrorMessages() {
     if (this.loginForm.get('username')?.hasError('required')) {
      return 'Rellene este campo';
     }
     return 'Usuario y/o contraseña incorrectos';
  }

  public checkLogin() {
    this.usernameFieldValue = this.loginForm.get('username')?.value;
    this.passwordFieldValue = this.loginForm.get('password')?.value;
    (this.loginservice.authenticate(this.usernameFieldValue,this.passwordFieldValue).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.route.navigate(['']);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        this.loginForm.markAsDirty();
        this.dialog.open(invalidLoginDialog);
      }
    ));
  }
}


@Component({
  selector: 'invalid-login.dialog',
  templateUrl: 'invalidLoginDialog.html',
})
export class invalidLoginDialog {}