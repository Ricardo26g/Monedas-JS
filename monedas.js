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