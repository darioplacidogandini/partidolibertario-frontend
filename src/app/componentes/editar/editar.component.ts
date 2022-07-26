import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: number = 0;
  afiliado: Afiliado = new Afiliado();

  constructor(private afiliadoService:AfiliadosService,
    private router:Router,private route:ActivatedRoute,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.afiliadoService.search(this.id).subscribe(data => {
      this.afiliado = data;
    },error => console.log(error));
  }

  saveChanges() {
    this.afiliadoService.edit(this.id, this.afiliado)
      .subscribe(data => {
        console.log(data);
      });
    this.router.navigate(['lista']);
  }

}

@Component({
  selector: 'editar-dialog',
  templateUrl: 'editarDialog.html',
})
export class editarDialog {}



