//=============Bienvenida=========
let nombre = prompt("Ingrese su nombre").toLowerCase();
let mensaje = "Bienvenid@ " + nombre + " a mi pagina de coleccionista de monedas";

alert(mensaje);

// ============Encuesta de paises preferidos========
let pregunta = "¿Que paises te interesa coleccionar?";
alert(pregunta);

let paisUno = prompt("Ingrese 1er Pais");
let paisDos = prompt("Ingrese 2do Pais");

let paises = "Le interesan: " + paisUno + " y " + paisDos;

alert(paises);

//========Cantidad de monedas=========
let cantidad =prompt("Que cantidad de monedas posee??")

if(cantidad<500){
    alert("Debe tener mayor a 500 monedas");
}
else if(cantidad<=500){
    alert("Puede entrar...pero con lo justo :D");
}
else{
    alert("Comienza su camino a un gran coleccionista Numismatico")
}

//=========Agrego Arrays para quitar paises o monedas=======
const pais = ["Argentina","canada","mexico","andorra","sambia","rumania"];
const moneda = ["1 peso 1993","1 dolar canadiense","1 peso mexicano","1 euro","100 kwacha","50 bani"];

const eliminarPais = (nacion) =>{
  let posicion = pais.indexOf(nacion);

  if(posicion != -1){
    pais.splice(posicion, 1)
  }
  console.log(pais);
}

eliminarPais("mexico");

const eliminarMoneda = (monedas) =>{
    let posicion = moneda.indexOf(monedas);
  
    if(posicion != -1){
      moneda.splice(posicion, 1)
    }
    console.log(moneda);
  }
  
  eliminarMoneda("50 bani");
//======Pregunta como hacer que al eliminar un pais se me elinime tambien la moneda. Se puede??========
//=======Agrego funciones de orden superior=============
const monedaPais = [
  { id:1, nombre: "Argentina", cantidad: 569 , Valor: 54382},
  { id:2, nombre: "Estados Unidos", cantidad: 380 , Valor: 42963},
  { id:3, nombre: "Alemania", cantidad: 250 , Valor: 31234},
  { id:4, nombre: "España", cantidad: 234 , Valor:22833},
  { id:5, nombre: "Italia", cantidad: 497 , Valor: 35000},
  { id:6, nombre: "Zimbawe", cantidad: 12 , Valor: 3500},
];

let producto = monedaPais.find(item => item.nombre === "Argentina");
console.log(monedaPais);// me muestra todos los datos del pais que tengo


/* let nombre = prompt("Ingrese el Pais que desea buscar");
let pais = monedasPais.find(item => item.nombre === nombre);
let mensaje = `
Id: ${pais.id}
Nombre: ${pais.nombre}
Cantidad: ${pais.cantidad}
Valor: $${pais.Valor}
`;
alert(mensaje); */// con esto me tira el dato de lo que yo le pida en el navegador segun el pais que tengo registrado



let filtrados = monedaPais.filter(item => item.Valor < 4000);
console.log(filtrados);// me muestra los paises que en la coleccion total valen menos de 4000
