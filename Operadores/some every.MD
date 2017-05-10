//Operador every: Parecido al and, V solo cuando cumplan los objetos con ese condicion
//son: Parecido al OR
//

let arreglo = [1,2, 6, 5];

let resultado = arreglo
.map((valor,indice)=>{
return valor/5;
})
.every((valor)=>{
return valor==0,2
});

console.log(resultado);