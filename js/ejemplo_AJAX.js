// ============= EJEMPLOS DE USO AJAX ======================
console.log("======== HOLA AJAX ==========");
function getInfo(){
    console.log(JSON.parse(this.responseText)); //responseText es una api de XMLHttpRequest para mostrar el resultado de la peticion
}

// Llamado de api externa
var objReqst = new XMLHttpRequest();
objReqst.addEventListener("load",getInfo); // Se indica el evento que lanzara la petición y donde se mostrara
objReqst.open("GET","https://jsonmock.hackerrank.com/api/movies/search/");
objReqst.send();
console.log("------------------------------------------------");