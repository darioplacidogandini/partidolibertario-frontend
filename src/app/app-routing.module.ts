import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaComponent } from './componentes/lista/lista.component';
 
const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'agregar',component:AgregarComponent},
  {path: 'editar/:id',component:EditarComponent},
  {path: 'lista',component:ListaComponent},
  {path:'detalles/:id',component:DetallesComponent},
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
