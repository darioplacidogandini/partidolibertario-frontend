import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route:ActivatedRoute,private afiliadosService:AfiliadosService) {}

  ngOnInit(): void {
    this.afiliado = new Afiliado();
    this.id = this.route.snapshot.params['id'];
      this.afiliadosService.search(this.id).subscribe(data => {
        this.afiliado = data;
      }, error => console.log(error));
  }
}
