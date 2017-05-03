/**
 * Created by usrdel on 3/5/17.
 */
//Variables.js
//En javascript se define una variable con la palabra reservada <var>
//******Definir un entero
var dos = 2;
var tres = 3;
var diez = 10;
//Imprimir las variables
console.log(dos);
console.log(tres);
console.log(diez);
//******Definir un Float
var dosPuntoCinco=2.5;
//Imprimir las variables
console.log(dosPuntoCinco);
//String
//Boolean
//

var VerFal = true;
var falso = false;
var nombre = "Evelyn";
var negativo = -4;
var fechaNacimiento = new Date();

var cuatroString = "4";
cuatroString = 4;
cuatroString = null;

var variable;
console.log(variable);

var numero2= 2;
//typeof se usa para describir el tipo de variable que se esta utilizando
console.log(typeof numero2);

// OBJETOS JSON
var evelyn = {
    id:1,
    nombre:"Evelyn",
    createdAt: new Date(),
    updatedAt: new Date(),
    casado:true,
    prestamos:false,
    hijos:null,
    altura: 1.60,
    //En los objetos se pueden guardar mas objetos
    mascota: {
        nombre:"Lulu",
        fechaNacimiento: new Date()
    }
}
/**Utilizando , se imprime todo el objeto
 * Utilizando Objeto + evelyn, se imprime
 * object object*/
//imprimir el objeto
console.log("OBJETO:",evelyn,"Hola");
//imprime un parametro del objeto
console.log("Altura:",evelyn.altura);
console.log("Fecha de mascota:",evelyn.mascota.fechaNacimiento);
//igualar a otro valor la altura
console.log("Altura:",evelyn.altura);
evelyn.altura=2.00
console.log("Altura:",evelyn.altura);

evelyn.altura = {
    ancho:3,
    alto:1
};
console.log("Altura:",evelyn.altura);

//borrar un atributo de un objeto
delete evelyn.altura;
console.log("objeto",evelyn);
//añadir atributos al objeto
evelyn.juegos = "varios";
console.log(evelyn);

//ARREGLOS
var arreglo = [1,
"Eve",
2.4,
false,
true,
null,
undefined,
new Date(),
-234,
    {
        a:"b"
    }];
console.log("Arreglos:",arreglo);
console.log("arreglo-->", arreglo[4]);
var nuevoArreglo = {
    papas:["1", "2"],
    nombre:["Maria", "Eve", "Brenda"]
}
console.log("NuevoArreglo", nuevoArreglo );
console.log(nuevoArreglo.nombre[1]);
//Matriz
var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]); //imp 0

var arregloObjetos = [
    {
        id:1,
        nombre:"Eve"
    },
    {
        id:2,
        nombre: "Felipe"
    }
    ];
//Eliminar un el parametro Eve
//Primero parametro: delimita la posicion que se va a trabajar
//segundo parametro: numero de objetos que se removeran
console.log("antes-arregloObjetos", arregloObjetos);
arregloObjetos.splice(0,1);
console.log("despues-arregloObjetos", arregloObjetos);

arregloObjetos.splice(0,0,{id:3, nombre: "Brenda"});
console.log("Agregar",arregloObjetos);