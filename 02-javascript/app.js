/**
 * Created by usrdel on 3/5/17.
 */
console.log("Hola Mundo");
// creo un objeto con mi nombre
// tiene el nombre, aoellido y va a tener una funcion q  imprima nobre apellido

// crear con una funcion anonima
// es un objeto que tien una funcion dentro
var alexis = {
    nombre:"Alexis",
    apellido:"Gualoto",
    fechaNacimiento: new Date(),
    imprimir:function () {
        console.log(this.nombre,this.apellido);
        },
    anio:function () {
            return this.fechaNacimiento.getFullYear();
        },
    diferenciaEdad:function (edadComparar) {
        return Math.abs(edadComparar-this.fechaNacimiento.getFullYear())
       // opcion dos
       // var resultado

    }
}
  console.log(alexis.anio());
console.log(alexis.diferenciaEdad(1982));
//alexis.imprimir();


//temoplate string ayuda a utilizar grandes cantidades de codigo
/*var hola = `dfgdgdgsdgsdgsgd
dsfssdgsdgsgsg
sgsdgsdgsdgdsg
sgsdgsdgsd



`
hola
*/
//