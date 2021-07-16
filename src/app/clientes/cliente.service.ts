import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from "./clientes.json";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint:string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
      //return of(CLIENTES);
      return this.http.get<Cliente[]>(this.urlEndpoint);
  }
}
