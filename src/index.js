const { request } = require("express");
const express = require("express");
const { send } = require("express/lib/response");

const app = express();

// Porta
app.listen(3333);

app.get("/courses", (request, response) => {
    return response.json(["Curso1", "Curso2", "Curso3"]);
});

app.post("/courses", (request, response) => {
    return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.path("/courses/:id", (request, response) =>{
    return response.json(["Curso6", "Curso7", "Curso3", "Curso4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7", "Curso4"]);
})