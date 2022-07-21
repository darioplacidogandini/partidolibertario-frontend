import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  afiliado: Afiliado = new Afiliado();
  value: String = '';

  constructor(private afiliadosService:AfiliadosService,public dialog:MatDialog) {}

  ngOnInit(): void {
  }

  addAfiliado() {
    this.afiliadosService.add(this.afiliado).subscribe(data => {
      console.log(data);
    });
    this.dialog.open(agregarDialog);
  }

  getRadioValue(value:String) {
    if (value==='barrio') {
      return true
    } else {
      return false;
    }
  }

}

@Component({
  selector: 'agregar-dialog',
  templateUrl: 'agregarDialog.html',
})
export class agregarDialog {}
