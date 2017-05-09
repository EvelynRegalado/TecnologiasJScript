// sentencias de control SDC
// instaciar un objeto vacio
// varconHambre = {};
var conHambre = false;
if(conHambre){
    console.log("Como");
}else{
    console.log("Trabajar");
}
// no existe propiedad primero en undefined
// pouedo ver solo hasta un error
var conHambre = {nombre:"adrian"};
if(conHambre.apellido){
    console.log("Como");
}else{
    console.log("Trabajar");
}

// hacer switch
//var numero = 5;
var numero = null;
switch (numero) {
    case 1:
        console.log("Es uno");
        break;
    case 5:
        console.log("Es cinco");
        break;
    default:
        console.log("No es 1 ni 5");
}
