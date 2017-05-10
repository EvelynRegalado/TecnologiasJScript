//Operador ForEach


let arregloNumeros = [1,2,3,4,5,6];

let resultado = arregloNumeros.forEach((numero,indice)=>{
  console.log(indice,numero);
})

console.log('Resultado: ',resultado)
//Parametros:
//valor, index y arreglo
//Parametro: Recibe una funcion que solo se ejecuta, el q utilice la funcion define que hace
funcion nuevoForEach(arreglo){
  for(var i =0; i<arreglo.lenght;i++){
    //Envia la funcion
    
    funcion(arreglo[i],i,arreglo);
    }

}
nuevoForEach(arregloNumeros,(valor,index)=>{
    console.log('Desde nuevo ForEach',valor,index);
})
    //console.log(arreglo[i])
    //console.log(i)
    //console.log(arreglo)
    
    //Ejemplo: es un For que regresa undefined
    //
