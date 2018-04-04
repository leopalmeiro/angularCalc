import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

 it('deve garantir que 1 + 4 = 5', 
 	inject([CalculadoraService], (service: CalculadoraService) => {
 		let soma = service.calcular(1,4,CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));
 it('deve garantir que 1 - 4 = 3', 
 	inject([CalculadoraService], (service: CalculadoraService) => {
 		let resul = service.calcular(1,4,CalculadoraService.SUBTRACAO);
    expect(resul).toEqual(-3);
  }));

 it('deve garantir que 1 / 4 = 0.25', 
 	inject([CalculadoraService], (service: CalculadoraService) => {
 		let resul = service.calcular(1,4,CalculadoraService.DIVISAO);
    expect(resul).toEqual(0.25);
  }));

 it('deve garantir que 1 * 4 = 4', 
 	inject([CalculadoraService], (service: CalculadoraService) => {
 		let resul = service.calcular(1,4,CalculadoraService.MULTIPLICACAO);
    expect(resul).toEqual(4);
  }));

 it('deve retornar 0 para operação Inválida', 
 	inject([CalculadoraService], (service: CalculadoraService) => {
 		let resul = service.calcular(1,4,'%');
    expect(resul).toEqual(0);
  }));

});
