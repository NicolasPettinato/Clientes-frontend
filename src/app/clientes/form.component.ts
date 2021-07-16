import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo:string = "Nuevo Cliente";
  
  constructor(private clienteService: ClienteService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaCliente();
  }

  cargaCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.titulo = "Modificar Cliente"
        this.clienteService.getCliente(id).subscribe(
           response => this.cliente = response
      )}
    })
  }

  create(): void{ 
    this.clienteService.create(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    });
  }

  update(): void{
    this.clienteService.update(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire('Modificación de cliente', `Cliente ${cliente.nombre} modificado con éxito!`, 'success')
    });
  }
}
