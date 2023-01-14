/*
*****************COMO ACCEDER Y CAMBIAR VALORES EN OBJETOS****************** 
*/
let familia = {
    mama: "Juana",
    papa: "Alfred",
    edades: {
        Juana: 54,
        Alfred: 70,
    },
    nietos: {
        hijo: {
            papa: ["pepito"],
        }
    }

}

var property = "hermana"
var valor = "Zuleyma";



/* Puedes utilizar la sintaxis de los brackets []
     -->Recuerda necitas poner en un string el nombre de la propiedad dentro de los brackets
     -->Recuerda si el string esta en una variable SÓLO coloca el nombre de la variabel en los corchetes
*/

familia[property] = valor
familia["edades"][valor] = 33
familia["edades"][valor] = 35

/*Puedes utilizar la sintaxis del punto "." para aceder o crear propiedades
    --->Recuerda la propiedad se llamara justo como digites los caracteres despues del punto
*/

familia.cocacola = "refresco"



function testObj(obj) {
    // el objeto con el que estaras trabajando es el que te pasan por parametro y es "obj"
    
    //agrega la propiedad nombre y el valor "Nahir"(string)
     obj.nombre = "Nahir";
    //agrega la propiedad edad y el valor 20(number)
      obj.edad = 20;
    //agrega la propiedad hobbies con un valor object({})
      obj.hobbies = {};
    //agrega la propiedad a el objeto hobbies  que se llame musica el valor "Rock"(string)
      obj.hobbies.musica = "Rock";
    //agrega la propiedad a el objeto hobbies que se llame juego y el valor "Tenis"(string)
      obj.hobbies.juego = "Tenis";
    //agrega la propiedad a el objeto obj enojos con el valor de objeto({})
      obj.enojos = {};
    //agrega la propiedad a el objeto enojos llamada gritos y el valor sera true(bool)
      obj.enojos.gritos = true;
    //agrega la propiedad a el objeto enojos llamada manzana que el valor sea false(bool)
      obj.enojos.manzana = false;
    //agrega la propiedad al objeto hobbies que se llame juegosMesa y el valor será un objeto({})
      obj.hobbies.juegosMesa = {};
    //agrega la propiedad al objeto jusgosMesa que se llame ajedrez y el valor será un objeto({}) 
      obj.hobbies.juegosMesa.ajedrez = {};
    //agrega la propiedad al objeto ajedrez que llame piezas y el valor sera 64(number)
      obj.hobbies.juegosMesa.ajedrez.piezas = 64;



    console.log(obj)
    return obj
}


const asi_se_debe_de_ver_el_obj = {
    nombre: "Nahir",
    edad: 20,
    hobbies: {
        musica: "Rock",
        juego: "Tenis",
        juegosMesa: {
            ajedrez: {
                piezas: 64
            }
        }
    },
    enojos: {
        gritos: true,
        manzana: false,
    }
}
module.exports = {
    testObj
}


console.log("hola estoy en la carpeta principal")