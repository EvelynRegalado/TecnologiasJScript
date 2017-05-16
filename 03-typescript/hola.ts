/**
 * Created by usrdel on 16/5/17.
 */
let holaMundo=`holaaaaa`;

console.log(holaMundo);

let soltero: boolean = true; //or false
let decimal: number = 54;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//String
let color: String = "rojo";
//Arrays
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

class Persona {
    public nombre: string = "Nom"; //pubico por defectp+o
    private apellido: string;
    public fechaNacimiento: Date;

//?: significa q son parametros opcionales y ya no  necesimamos: let adrian:Persona = new Persona(); inicializarla
    constructor(nombre?: string,
                apellido?: string,
                fechaNacimiento?: Date) {

    }
}
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
  function SumaNumero(numero1:number, numero2:number):number{
      return numero1 + numero2;
  }
  //Se puede escribir texto directo de javaScript
  var objeto ={
      nombew:"Evelyn"
  };