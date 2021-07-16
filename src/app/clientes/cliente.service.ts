import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from "./clientes.json";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
      //return of(CLIENTES);
      return this.http.get<Cliente[]>(this.urlEndpoint);
  }

  getCliente(id: number): Observable<Cliente>{
    //return of(CLIENTES);
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`);
}

  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders});
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
