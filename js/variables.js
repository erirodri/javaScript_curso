// -------- VARIABLES -------

/*
* Por seguridad se recomienda usar solo let y const
* let: Estas variables controlan que se muestren errores en pantalla si es que
        las definimos despues de su llamado. Con VAR, esto se mostra como UNDEFINED
* const: Son variables que no cambiaran de valor una vez que se les asigne un valor.
*/
console.log("EJEMPLOS VARIABLES 1.let | 2.const");
let nombre= "Erick";
console.log(nombre);

const apPaterno="Rodriguez"
console.log(apPaterno); 
// SI quisieramos cambiar el valor.. tendriamos un error de Asignación
// apPaterno="Morales";

// JSON -> Variable.

let Pelota = {
    color:"rojo",
    tamanio:4,
    inflada:true,
    setInflar: function () {this.inflada=true;},
    setDesinflar: function () {this.inflada=false;}
};
console.log("EJEMPLO JSON Variable");
console.log(Pelota);
console.log(Pelota.color);
console.log("------------------------------");

// DESTRUCTURION
/*
*   Nos ayuda para no estar llamando constantemente una variable (JSON) y solo llamar su contendio
*/
//let Nombre ={
let {nombreJson, apPaternoJson, apMaternoJson, edadJson} = {
    nombreJson:"Erick",
    apPaternoJson: "Rodriguez",
    apMaternoJson: "Morales",
    edadJson: 27
}
console.log("EJEMPLO DESTRUCTURING");
console.log(nombreJson+" "+apPaternoJson+" "+apMaternoJson);
console.log("------------------------------");
// -------- ARROW FUNCTIONS -------

// Se utilizan para mantener constante una funcion y no se puede modificar en un ataque

const sumar = (a,b) => {
    return a+b;
}
// Si solo vamos a regresar un resultados rapido podemos quitar los brakets {}
const restar =(b,a) => b-a;
console.log("EJEMPLOS ARROW FUNCTION");
console.log(sumar(5,3));
console.log(restar(8,3));
console.log("------------------------------");

// ------ TERNARIOS --------

/* Uso de ? y : para implementar el resultado de un if a una variable 
* Usar TERNARIOS nos ayuda a evitar la injeccion de codigo ya que el resultado de la evaluacion
    la asignamos a una variable const.
*/
// if(a<0){---}else{-----}
console.log("EJEMPLOS TERNARIOS");
const cuentaSaldo = (a) => a<0 ? "NO TIENES SALDO" : "CON SALDO EXISTENTE";
console.log(cuentaSaldo(-5));

//if(a<0){...}
const retirarEfectivo = (a) => a>150 && "SIN SALDO SUFICIENTE";
console.log(retirarEfectivo(200));
console.log("------------------------------");
