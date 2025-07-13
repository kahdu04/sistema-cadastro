import { TestBed } from '@angular/core/testing';

import { Cliente } from '../../src/app/cadastro/cliente';

describe('Cliente', () => {
  let service: Cliente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cliente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
