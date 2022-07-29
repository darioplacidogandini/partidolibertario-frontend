import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from '../model/afiliado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  id:number = 0;
  private baseURL = 'https://afiliados-backend.herokuapp.com/api/afiliados';

  constructor(private http:HttpClient) {}

  list(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.baseURL}/list`);
  }

  search(id:number): Observable<Afiliado> {
    return this.http.get<Afiliado>(`${this.baseURL}/search/${id}`);
  }

  add(afiliado:Afiliado): Observable<any> {
    return this.http.post(`${this.baseURL}/add`, afiliado);
  }

  edit(id:number,afiliado: Afiliado): Observable<Object> {
    return this.http.put(`${this.baseURL}/edit/${id}`, afiliado);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
