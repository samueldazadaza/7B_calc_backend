//1. Crear un objeto express
const express = require('express');


//2. Crear un objeto que represente nuestra aplicacion
const app = express();

app.use(express.json());

//Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.get(
    '/sumar',
    //se requieren dos objetos: uno representando la petición
    // un objeto representando la respuesta
    (req, res) =>{
        // To Do: Aqui va el procesamiento de la petición a esta ruta.
        console.log("Alguien esta conectandose  a esta ruta!!!!sumar!");
        res.json(req.body)
    }
);

app.post(
    '/restar',
    (req, res)=>{

        const {numero_1, numero_2}=req.body;

        /*
        const numero_1 = req.body.numero_1;
        const numero_2 = req.body.numero_2;
        */

        const resultado = numero_1 - numero_2

        res.json(resultado);
    }
);






//3. Crear un servicio para escuchar peticiones

app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000😎")
    }
);