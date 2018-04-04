/**
*
*
* @author Leonardo Palmeiro <palmeiro.leonardo@gmail.com>
* @since 1.0.0
*/

import { Injectable } from '@angular/core';


@Injectable()
export class CalculadoraService {
/* 	Define all constants to use
	for indetification that calculy operaciotions */

static readonly SOMA: string = '+';
static readonly SUBTRACAO: string = '-';
static readonly DIVISAO: string = '/';
static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  
/**
*	Metodo que calcula uma operação matemática dado
*	dois números.
*	suporta as operações soma, subtração, divição e multiplicação
* @param num1 : number
* @param num2 : number
* @param operação : string Operação a ser executada
* @return number Resultado da opecação
*/
calcular(num1: number, num2: number, operacao: string): number{
	let resultado: number; //variable of operation result
	switch (operacao) {
		case CalculadoraService.SOMA:
			resultado = num1 + num2;
		break;
		case CalculadoraService.SUBTRACAO:
			resultado = num1 - num2;
		break;
		case CalculadoraService.DIVISAO:
			resultado = num1 / num2;
		break;
		case CalculadoraService.MULTIPLICACAO:
			resultado = num1 * num2 ;		
		break;
		default:
			resultado = 0;
	}
	return resultado;
 }  
}
