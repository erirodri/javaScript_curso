console.log("====== EJEMPLOS PROMESAS ========");

// ================= PROMISE() ==================
//Son funciones que se esperan se ejectuen en el futuro, por lo cual tiene 2 estados
// resolve -> Si se ejecuto segun lo esperado
// reject -> En caso de que no se ejecute o no fue con respecto a lo esperado
                        // Su constructor espera una funcion con los 2 estados
const myPromesa = new Promise((resolve,reject)=>{
    resolve("Se ejecuto de acuerdo a lo esperado"); //Se indica en duro que se ejecuto correctamente
    //reject("NO Se ejecuto de acuerdo a lo esperado"); //Se indica en duro que NO se ejecuto correctamente
});
// Se indica que hara la promesa una vez que se ejecute ya sea de acuerdo a lo esperado o NO esperado
console.log(" >> Llamado de promesa en el codigo:");
myPromesa.then(
    (respuesta)=>{      // De acuerdo a lo esperado
        console.log(respuesta);
        console.log("--------------------------------------");
    },
    razon => {
        console.log(razon);         // De acuerdo a lo NO esperado
        console.log("--------------------------------------");
    }
);

// ========== Ejemplo con botones ================================
const myPromesa2 = new Promise((resolve, response) =>{
    const promesaAceptada = document.getElementById("aceptar");
    const promesaDenegada = document.getElementById("denegar");
    promesaAceptada.addEventListener("click", ()=>{
        console.log(" >> Llamado de promesa por boton:");
        resolve("PROMESA ACEPTADA");
    })
    promesaDenegada.addEventListener("click",() =>{
        console.log(" >> Llamado de promesa por boton:");
        response("PROMESA DENEGADA");
    })
});

myPromesa2.
    then(
        respuesta => console.log(respuesta)
    )
    .catch(
        error => console.log(error)
    );
// ========== Ejemplo llamando funciones con variables de entrada desde codigo ================================

const sumarUsingPromise = (a,b)=>{
    return new Promise((accept,reject) =>{  // Se indica return para guardar el resultado de la promesa en la variable que se indica
        
        (a<0 || b<0)? reject("Suma NEGATIVA no valida"):accept(a+b);
        
    });
}
sumarUsingPromise(3,5).then(
    result=>{
        console.log(" >> Llamando funciones con variables de entrada desde codigo: ");
        console.log(`La suma es: ${result}`);
        console.log(" ------------------------- ");
    })
    .catch(error=>{
        console.log(" >> Llamando funciones con variables de entrada desde codigo: ");
        console.log(error);
        console.log(" ------------------------- ");
    });
sumarUsingPromise(-3,5).then(
    result=>{
        console.log(" >> Llamando funciones con variables de entrada desde codigo: ");
        console.log(`La suma es: ${result}`);
        console.log(" ------------------------- ");
    })
    .catch(error=>{
        console.log(" >> Llamando funciones con variables de entrada desde codigo: ");
        console.log(error);
        console.log(" ------------------------- ");
    });

