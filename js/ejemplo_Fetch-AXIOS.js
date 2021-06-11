// FETCH -> Es una libreria utilizada para hacer conexión con APIs y tratar su respuesta
// FETCH es en lugar de *XMLHttpRequest* que se utilizaba en AJAX

fetch("https://jsonmock.hackerrank.com/api/movies/search/") // Establece la comunicación con la API en cuenstion
//El resultado de fetch es una PROMESA por lo cual se trabaja con THEN y CATCH
.then(result => result.json()) // Convertimos el resultado en JSON y como no tiene {} significa que viene implicito el RETURN
    .then(result=> {
        console.log("========= Ejemplo de **FETCH** para consumir APIS:");
        console.log(result.data);
        console.log("------------------------------");
    }) // Se genera otro then para procesar el contenido ya convertido en json
.catch(error => {
    console.log("========= Ejemplo de **FETCH** para consumir APIS:");
    error.json();
    console.log("--------------------------------------");
}); // EN CASO de error en la respuesta FETCH se indica aqui

// ============ FETCH -> IMPLEMENTANDO ASYNC AWAIT ====================
const consultaFetchAsync = async () =>{
    const response = await fetch("https://jsonmock.hackerrank.com/api/movies/search/");
    const data = await response.json();

    return data.data;
};
const jsonAsyncConsulta = consultaFetchAsync().then(result => { //Llamamos al metodo
    console.log("FETCH -> IMPLEMENTANDO ASYNC AWAIT:");
    console.log(result);
    console.log("--------------------------------");
});

//AXIOS -> Libreria externa para hacer consumo de API's de forma mas facil
axios
    .get("https://jsonmock.hackerrank.com/api/movies/search/")
    .then( (result) => {
        const dataJson=result.data.data; // guardando la data{...} del JSON. Es la info que en verdad nos importa
        console.log("========= Ejemplo de **AXIOS** para consumir APIS:");
        console.log(dataJson);
    });
// ============ AXIOS -> IMPLEMENTANDO ASYNC AWAIT ====================
const consultaAxiosAsync = async ()=>{
    const response = await axios.get("https://jsonmock.hackerrank.com/api/movies/search/");
    const { data } = response.data; // se usas destructuring {} para solo almacenar la parte de *data*
    console.log("========= Ejemplo AXIOS -> IMPLEMENTANDO ASYNC AWAIT:");
    console.log(data);
};
consultaAxiosAsync(); //Llamamos al metodo