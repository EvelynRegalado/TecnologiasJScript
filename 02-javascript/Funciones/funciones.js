/**
 * Created by usrdel on 3/5/17.
 */
//FUNCIONES
//void : No regresan nada
function holaMundo() {
    console.log("Hola Mundo");
}
holaMundo();

//El doble de un entero
function DobreEntero(numero) {
    return numero*2;
}
console.log(DobreEntero(2)); //4
//Devuelva la multiplicacion
function Munltip(a,b) {
    return a*b;
}
console.log(Munltip(2,3));
//guardar funcion en una variable
var dos = Munltip(1,2);
var multiplicacion = Munltip;
console.log(dos);
console.log(multiplicacion(3,3));
//Guardando en una variable la funcion que tiene a hola
//tipo void
var hola= function () {
    console.log("hola")
}
hola(); //hola

console.log(hola());
var resultado = hola();
console.log(resultado); //undefined
//funcion anonima: no tiene nombre
// no se puede poner una funcion anonima donde sea

//Enviar funciones como parametros
console.log(hola);
function Algo(x) {
    x();
}
Algo(function () { console.log("Holllaaaaaa")});
Algo(function () { return 2});

function transformarNumero(num, tranf) {
   tranf(num);
}
transformarNumero(5, function (numero) {
    return numero *2;
});
