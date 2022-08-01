import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';
import { DialogsService } from 'src/app/servicios/dialogs.service';

export interface Observaciones {
  observacines: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  afiliado: Afiliado[] = [];
  updatedAfiliado: Afiliado = new Afiliado();
  id: number = 0;

  displayedColumns: string[] = ['dni', 'nombre', 'apellido', 'circuito','mail', 'telefono', "actions"];

  constructor(private dialogsService:DialogsService,private afiliadosService:AfiliadosService
    ,private route:Router,public dialog:MatDialog) {}

  ngOnInit(): void {
      this.loadingScreen();
      this.listAfiliados();
  }

  public loadingScreen() {
    this.dialog.open(LoadingDialog,DialogsService);
    setTimeout(() => this.dialog.closeAll(),8000);
  }

  listAfiliados() {
    this.afiliadosService.list().subscribe(data => {
      this.afiliado = data;
    });
  }

  editAfiliado(id:number) {
    this.route.navigate(['editar',id]);
  }

  deleteAfiliado(id:number) {
    this.afiliadosService.delete(id).subscribe(data => {
      console.log(data);
      this.listAfiliados();
    });
    this.dialog.open(eliminarDialog);
  }

  viewDetalles(id:number) {
    this.route.navigate(['detalles',id]);
  }
}

@Component({
  selector: 'loading.dialog',
  templateUrl: 'loading.dialog.html',
})
export class LoadingDialog {}

@Component({
  selector: 'eliminar-dialog',
  templateUrl: 'eliminarDialog.html',
})
export class eliminarDialog {}

