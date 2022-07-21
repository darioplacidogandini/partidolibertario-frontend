import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from '../model/afiliado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  private baseURL = 'https://afiliados-backend.herokuapp.com/afiliados';

  constructor(private http:HttpClient) {}

  list(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.baseURL}/lista`);
  }

  search(id: number): Observable<Afiliado> {
    return this.http.get<Afiliado>(`${this.baseURL}/buscar/${id}`);
  }

  add(afiliado: Afiliado): Observable<any> {
    return this.http.post(`${this.baseURL}/agregar`, afiliado);
  }

  edit(id: number,afiliado: Afiliado): Observable<Object> {
    return this.http.put(`${this.baseURL}/editar/${id}`, afiliado);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/eliminar/${id}`);
  }
}
