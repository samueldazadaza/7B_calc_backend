//1. Crear un objeto express
const express = require('express');


//2. Crear un objeto que represente nuestra aplicacion
const app = express();

app.use(express.json());

//Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.post(
    '/api/sumar',
    //se requieren dos objetos: uno representando la petición
    // un objeto representando la respuesta
    (req, res) =>{
        // To Do: Aqui va el procesamiento de la petición a esta ruta.
        console.log("Alguien esta conectandose  a esta ruta!!!!/sumar!");
        const {numero_1, numero_2} = req.body;
        const resultado = numero_1 + numero_2

        res.json(resultado);
    }
);

app.post(
    '/api/restar',
    (req, res)=>{

        
        /*
        const numero_1 = req.body.numero_1;
        const numero_2 = req.body.numero_2;
        */
       
        const {numero_1, numero_2}=req.body;
        const resultado = numero_1 - numero_2

        res.json(resultado);
    }
);

// ¿Como quedaria la ruta para devidir?

app.post(
    '/api/dividir',
    (req, res)=>{
        // const {numero_1, numero_2} = req.body;
        // let resultado;
        // if(numero_2!=0){
        //     resultado = numero_1 / numero_2;
        // }else{
        //     resultado="error";
        // }
        // res.json(resultado);

        //tratar error con TRY CATCH
        let resultado;
        try {
            const {numero_1, numero_2} = req.body;
            resultado = numero_1 / numero_2;
        } catch (error) {
            //gestionar el error
            resultado=error
        }
        
        res.json(resultado);

    }
)

// Taller: ¿Como crear una ruta que yo le pueda pasar un numero indeterminado de datos?

//ejemplo
//resultado = n1+n2+n3




//3. Crear un servicio para escuchar peticiones

app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000😎")
    }
);