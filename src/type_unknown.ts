// type unknown > quando voce não sabe o tipo que vai receber.
let total: any; 

total = 100;
total = '100';
total = false;

let idPedido:any = 123;
let totalPedido:unknown = 100;

let entregador: number = idPedido;
// valor do tipo unknown so podem ser atribuidos ao tipo unknown ou any
let totalEntrega: unknown = totalPedido;

console.log(totalEntrega);