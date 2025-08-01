import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClientesService.REPO_CLIENTES, JSON.stringify(storage))
  }

  atualizar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.forEach(c => {
      if (c.id === cliente.id) {
        Object.assign(c, cliente);
      }
    })
    localStorage.setItem(ClientesService.REPO_CLIENTES, JSON.stringify(storage))
  }

  deletar(cliente: Cliente){
    const storage = this.obterStorage();

    const novaLista = storage.filter(c => c.id !== cliente.id);

    const indexItem = storage.indexOf(cliente);

    localStorage.setItem(ClientesService.REPO_CLIENTES, JSON.stringify(novaLista))
  }

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();

    if (!nomeBusca) {
      return clientes;
    }

    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  buscarClientePorId(id: string): Cliente | undefined {
    const cliente = this.obterStorage();
    return cliente.find(cliente => cliente.id === id);
  }

  private obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(ClientesService.REPO_CLIENTES);
    if (repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClientesService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
