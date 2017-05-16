/**
 * Created by usrdel on 16/5/17.
 */
var holaMundo = "holaaaaa";
console.log(holaMundo);
var soltero = true; //or false
var decimal = 54;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var color = "rojo";
//Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var Persona = (function () {
    //?: significa q son parametros opcionales y ya no  necesimamos: let adrian:Persona = new Persona(); inicializarla
    function Persona(nombre, apellido, fechaNacimiento) {
        this.nombre = "Nom"; //pubico por defectp+o
    }
    return Persona;
}());
/*  private imprimirPersona(nombre:string, apellido?:string:void){
      in(apellido){
          console.log(nombre, apellido)
      }

  //imprimirPersona(){
      //console.log(this.nombre, this.apellido);
  }
}

  let adrian:Persona = new Persona();
*/
//Funciones
function SumaNumero(numero1, numero2) {
    return numero1 + numero2;
}
//Se puede escribir texto directo de javaScript
var objeto = {
    nombew: "Evelyn"
};
