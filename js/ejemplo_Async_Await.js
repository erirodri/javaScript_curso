// ================= FUNCION *ASYNC* =====================
// Son funciones que tienen el mismo funcionamiento que  Promise
// Solo que en este caso no es necesario indicar el then and catch
// Cuando se crea una funcion async se hace uso de AWAIT el cual da como resultado::
// Esperar a que se cumpla la promesa y entregar el resultado de la promesa
// DIFERENCIA CON PROMISE natural
// Usando **ASYNC** podemos llamar N veces la funcion que llama al Promise

const myPromesaAsync = value => new Promise((resolve, response)=>{
    if(value==1){
        resolve("Acepto Promesa ASYNC");
    }else{
        response("Denego Promesa ASYNC");
    }    
});

// Se define **ASYNC** para indicar que sera una funcion que espara el resultado de una promesa para continuar con su tarea.
console.log("======== EJEMPLO DE EJECUCIÓN FUNCION **ASYNC** ==========");
async function aceptarDenegarAsync(value){
    try{
        const promesaResponse= await myPromesaAsync(value); //await-> Se usa para asignar el valor hasta que se obtenga la respuesta del promise llamado
        console.log(promesaResponse);
    }catch(error){
        console.log(error);
    }    
    
};
console.log("--------------------------------------------------");