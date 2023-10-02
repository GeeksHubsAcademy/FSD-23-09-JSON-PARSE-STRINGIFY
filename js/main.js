const colors = ["red", "green", "yellow"]

// Guardamos en local storage sin usar JSON.stringify
localStorage.setItem('colors1', colors)  //Se guardaria como un string de la siguiente manera => red,green,yellow

// Guardamos en local storage usando JSON.stringify
localStorage.setItem('colors2', JSON.stringify(colors))  //Se guardaria como un string de la siguiente manera => ["red","green","yellow"]

//Recuperamos desde local storage colors1 sin usar JSON.parse
const colors1 = localStorage.getItem('colors1')   
console.log(colors1)        // Recuperamos un string -> red,green,yellow
console.log(colors1[0])     // devolvera el primer caracter del string -> r 

//Recuperamos desde local storage colors1 usando JSON.parse
const colors2 = JSON.parse(localStorage.getItem('colors2')) //Recuperamos un array
console.log(colors2)        // devolvera el array ["red","green","yellow"]
console.log(colors2[0])     // devolvera el valor "red" 