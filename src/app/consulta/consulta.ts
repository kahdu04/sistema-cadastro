import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { ClientesService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
            MatInputModule, 
            MatCardModule, 
            FlexLayoutModule, 
            MatIconModule, 
            FormsModule, 
            MatTableModule,
            MatButtonModule,
            CommonModule
          ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {
  nomeBusca: string = ' ';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "acoes"];

  constructor(
    private service: ClientesService,
    private router: Router
  ){}

  ngOnInit(){
    console.log("Passando por aqui!")
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], {queryParams: {"id": id}})
  }
}


