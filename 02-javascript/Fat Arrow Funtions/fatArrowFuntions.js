//FAT arrow functions

var holaMundo = function() {console.log("Hola mundo")}

holaMundo()

var holaMundo2 = ()=>{return "Hola mundo2"}
holaMundo2()

var holaMundo3 = ()=> "Hola mundo3"
holaMundo3()

var holaMundo4 = ()=> holaMundo2()
holaMundo4()

var holaMundo5 = (nombre)=> `Hola ${nombre}`
holaMundo5('Fabian')

var holaMundo5 = (apellido)=> `Hola ${apellido}`
holaMundo5('Eguez')

var holaMundo6 = (nombre, apellido)=> `Sr. ${apellido} ${nombre}`
holaMundo6("Vicente", "Eguez")





/// mio
// FAT ARROW FUNCTIONS
// ejemplos de escrinir hola mundo
var holaMundo = function(){console.log("hola mundo")}
holaMundo()


//para eviatr la palabra functions
var holaMundo2 = ()=>{return "hola Mundo dos"}
holaMundo2()

// se usa cuando no hay muchas sentencias adicionales
var holaMundo3 = ()=>"hola Mundo tres"
holaMundo3()

//
var holaMundo3 = ()=> holaMundo2()
holaMundo3()


// si necesito parametros

var holaMundo4 = (nombre)=>`hola: ${nombre}`
holaMundo4(‘Alexis’)

// no se utiliza () si es solo un parametro
var holaMundo5 = apellido =>`hola: ${apellido}`
holaMundo5(‘Alexis’)

//
var holaMundo6 =
    (apellido,apellido) =>`Sr. ${apellido} ${nombre}`
holaMundo6(‘Alexis‘, ‘gualoto‘)