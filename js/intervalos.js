// EJEMPLOS DE INVERVALOS
// Ejemplo de SetInterval -> Se usa para indicar que se ejecute una funcion cada cierto tiempo
let numero=1;
const intervalNumber = ()=>{
    console.log(`Se ejecuto el intervalo ${numero} veces`);
    numero++;
}


// setInterval(funcion-a-ejecutar,cada-cuanto-tiempo);
setInterval(intervalNumber,4000);

const alertToShow = ()=>{
    alert("Me ejecuto de acuerdo a lo indicado en setTimeout");
}
// SetTimeout -> Se utiliza para indicar que una funcion se ejecute despues de cierto tiempo (UNA SOLA VEZ)
// setTimeout(funcion-a-ejecutar,despues-de-cuanto-tiempo);
setTimeout(alertToShow,3000);