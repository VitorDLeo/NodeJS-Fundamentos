const { request } = require("express");
const express = require("express");
const { send } = require("express/lib/response");

const app = express();

// Porta
app.listen(3333);

/*  
    Tipos de parametros

    Route Parameters - Usados para identificar um recurso - Excluir/editar/Buscar
    Query Parameters - Usados para paginacao / filtros
    Body Parameters - Os objetos de insercao/alteracao (JSON)
*/

app.get("/courses", (request, response) => {
    return response.json(["Curso1", "Curso2", "Curso3"]);
});

app.post("/courses", (request, response) => {
    const body = 
    return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.patch("/courses/:id", (request, response) =>{
    return response.json(["Curso6", "Curso7", "Curso3", "Curso4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7", "Curso4"]);
})