import { Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id:number = 0;
  afiliado:Afiliado = new Afiliado();

  constructor(private afiliadosService:AfiliadosService) {}

  ngOnInit(): void {
      this.afiliadosService.search(this.id).subscribe(data => {
        this.afiliado = data;
      }, error => console.log(error));
  }
}
