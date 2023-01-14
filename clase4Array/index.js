/* -------------------Arrays------------------------------*/

/* 
 ____________________________________________________
║          ║            ║             ║             ║
║          ║            ║             ║             ║
║    0     ║    1       ║      2      ║       3     ║-------> tienen propiedades y metodos
║  datos   ║ otro dato  ║ otro dato   ║  otro dato  ║----> accedemos a los datos por el indice  
║__________║____________║_____________║_____________║ 
 ______________________________________
║          ║            ║             ║    
║          ║            ║             ║      
║    0     ║    1       ║      2      ║    -------> cada array es diferente
║  datos   ║ otro dato  ║ otro dato   ║  ----> semapramos los elementos con una "," 
║__________║____________║_____________║

 ______________________________________
║          ║            ║             ║    
║          ║            ║             ║      
║    0     ║    1       ║      2      ║    -------> tienen propiedades y metodos
║  number  ║ string     ║   boolean   ║  ----> semapramos los elementos con una "," 
║__________║____________║_____________║

 ______________________________________
║          ║            ║             ║    
║          ║            ║             ║      
║    0     ║    1       ║      2      ║    -------> tienen propiedades y metodos
║    13    ║  "Nahir"   ║   true      ║  ----> separamos los elementos con una "," 
║__________║____________║_____________║

*/
let arr = [13, "Nahir", true]
let newArray = []

arr[3] = 25
arr[4] = "lo que quieras"
// [ 13, 'Nahir', true, 25, 'lo que quieras' ]

arr[1] = false
//[ 13, false, true, 25, 'lo que quieras' ]

arr[3] = 65
//[ 13, false, true, 65, 'lo que quieras' ]

arr[10] = 45
//[ 13, false, true, 65, 'lo que quieras', <5 empty items>, 45 ]

/* 
let arr = ["hola", true]
arr[5] = false
 ________________________________________________________________________________
║          ║            ║             ║             ║             ║             ║
║          ║            ║             ║             ║             ║             ║
║    0     ║    1       ║     2       ║       3     ║      4      ║      5      ║
║  "hola"  ║   true     ║  undefined  ║  undefined  ║ undefined   ║     false   ║
║__________║____________║_____________║_____________║_____________║_____________║
*/

//[ 13, false, true, 65, 'lo que quieras', <5 empty items>, 45 ]

arr[5] = {
    nombre: "Alfred",
    cursos: [1, 2, 3, 4]
}

/* 
[
  13,
  false,
  true,
  65,
  'lo que quieras',
  { nombre: 'Alfred', cursos: [ 1, 2, 3, 4 ] },
  <4 empty items>,
  45
]
*/



let element = arr[5]

/*
element = { nombre: 'Alfred', cursos: [ 1, 2, 3, 4 ] } 

*/

let respuestaNombre;




console.log(element)