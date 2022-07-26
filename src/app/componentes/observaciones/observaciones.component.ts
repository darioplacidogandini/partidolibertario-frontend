import { Component, OnInit } from '@angular/core';
import { Afiliado } from 'src/app/model/afiliado.model';
import { AfiliadosService } from 'src/app/servicios/afiliados.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']
})
export class ObservacionesComponent implements OnInit {

  id:number = 0;
  observaciones:Afiliado = new Afiliado();

  constructor(private afiliadosService:AfiliadosService) {}

  ngOnInit(): void {
      this.afiliadosService.search(this.id).subscribe(data => {
        this.observaciones = data;
      }, error => console.log(error));
  }
}
