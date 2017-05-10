//Operador MAP
//Sirve para transformar el arreglo

let arreglo = [1,2, 6, 5];

let resultado = arreglo.map((valor,indice)=>{
return valor/5;
});

console.log(resultado);

//Operador MAP
//Sirve para transformar el arreglo
let arreglo1 = [{nombre:"Maria"},
               {
               nombre:"Adrian"}];

let resultado1 = arreglo1.map((valor)=>{
  valor.nombre = "Sr/Sra " + valor.nombre
  valor.fechaCreacion = valor.new Date()
  valor.fechaCreacion = valor.fechaCreacion.getFullYear()
//return "Sr/Sra " + valor.nombre + " Fecha de Creacion "+ new Date() + "Año de Creacion " + fechaCreacion.getFullYear();
  return valor;
});

console.log(resultado1);