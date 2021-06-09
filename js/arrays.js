console.log("=========== EJEMPLOS ARRAYS ==========");
const numeros = [1,2,3]
console.log("Recorrido normal de array");
console.log(numeros);
for(numero in numeros){
    console.log(numero);
}
console.log("------------------------");
//Forma mas facil de recorrer arreglo
console.log("Uso de MAP para recorrer arreglo");
numeros.map((numero) => console.log(numero));
console.log("------------------------");