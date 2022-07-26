import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';
import * as data from '../../../assets/barrios.json';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  barrios:any = (data as any).default;
  id: number = 0;
  afiliado: Afiliado = new Afiliado();

  constructor(private afiliadoService:AfiliadosService,
  private route:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.id = this.afiliadoService.id;
    this.afiliadoService.search(this.id).subscribe(data => {
      this.afiliado = data;
    },error => console.log(error));
  }

  saveChanges() {
    this.afiliadoService.edit(this.id, this.afiliado)
      .subscribe(data => {
        console.log(data);
      });
    this.dialog.open(editarDialog);
    this.route.navigate(['lista']);
  }

}

@Component({
  selector: 'editar-dialog',
  templateUrl: 'editarDialog.html',
})
export class editarDialog {}



