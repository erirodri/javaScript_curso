// Se definen las funciones estaticas que seran ejecutadas al momento de su llamado

// Llamado Basico. ESTO NOS GENERA POSIBILIDAD DE INJECCION DE CODIGO ya que se puede cambiar
//      El contenido de la funcion en momento de ejecución de la pagina
/*function sumar(num1,num2){
    return num1+num2;
}*/
// Para un mejor desarrollo se recomienda usar la siguiente definicion:
const sumarCallBack = (num1,num2) => num1+num2;

function restarCallBack(num1,num2){
    return num1-num2;
}

/*function multiplicarCallBack(num1,num2){
    return num1*num2;
}*/
// Para un mejor desarrollo se recomienda usar la siguiente definicion:
const multiplicarCallBack = (num1,num2) => num1*num2;

/*function multifuncion(num1,num2,operacion){
    let resultado=operacion(num1,num2);
    console.log(operacion+": "+resultado);
}*/
// Para un mejor desarrollo se recomienda usar la siguiente definicion:
const multifuncion = (num1,num2,operacion)=>{
    let resultado=operacion(num1,num2);
    console.log(resultado);
};

// ============================   CALLBACK  ASYNC========================================
//Definicion en javascript para ejecutar funciones en el momento que nosotros queramos
// y no en tiempo de compilación
// >>> EJEMPLO: Se ejecuta funcion al mandara a llamar en la definicion de consol.log
console.log("======== EJEMPLOS DE EJECUCIÓN CALLBACK (ejemplo_Callbacks.js) ==========");
console.log(" >> Ejecución al llamar funcion desde archivo:");
console.log("Llamando a multifuncion: ");
multifuncion(5,2,sumarCallBack);
console.log("Llamando Directo a sumarCallBack: "+sumarCallBack(8,2));
console.log("Llamando a multifuncion: ");
multifuncion(5,2,restarCallBack);
console.log("Llamando Directo a restarCallBack: "+restarCallBack(8,2));
console.log("Llamando a multifuncion: ");
multifuncion(5,2,multiplicarCallBack);
// >>>> EJEMPLO: Ejecutar funcion al dar click por el usuario
const sumarBtn=document.getElementById("sumar");
const restarBtn=document.getElementById("restar");
const multiplicarBtn=document.getElementById("multiplicar");

sumarBtn.addEventListener("click",()=>{
    console.log(" >> Ejecución al interactuar en la pagina:");
    console.log("Click en boton sumar:");
    multifuncion(5,2,sumarCallBack);
});

restarBtn.addEventListener("click",()=>{
    console.log(" >> Ejecución al interactuar en la pagina:");
    console.log("Click en boton restar:");
    multifuncion(5,2,restarCallBack);
});
multiplicarBtn.addEventListener("click",()=>{
    console.log(" >> Ejecución al interactuar en la pagina:");
    console.log("Click en boton multiplicar:");
    multifuncion(5,2,multiplicarCallBack);
});
console.log("------------------------");