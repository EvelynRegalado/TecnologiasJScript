//Operador find y filter
//Sirve para transformar el arreglo
let arreglo = [10,2, 6, 5];

let resultado = arreglo.filter((valor,indice)=>{
return valor<7;
});

console.log(resultado);


//Operador find y filter
//Sirve para transformar el arreglo
let arreglo = [10,2, 6, 5];

let resultado = arreglo
.map((valor, indice)=>{
return valor/5;
)}
//Filtro
.filter((valor,indice)=>{
return valor<=1;
)}
.find((valor)=>{
return valor==1.6;
  )}
//find: Encuentra la primera ocurrencia en el arreglo
  //Regresa la primera ocurrencia
  //no da arreglos, sino el valor que esta en el arreglo o undefined
console.log(resultado);