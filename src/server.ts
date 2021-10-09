import express, { response } from "express";

const app = express();

//rotas
app.get("/test", (request , response) =>{
    return response.send("seliga");

})

// porta que vai rodar o projeto
app.listen(3000, () => console.log("server is running"))