const express = require("express");
const { send } = require("express/lib/response");

const app = express();

// Porta
app.listen(3333);

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NodeJS"});
});