//1. Crear un objeto express
const express = require('express');


//2. Crear un objeto que represente nuestra aplicacion
const app = express();

app.use(express.json());


//agregar encabezados  CORS
app.use( function(req, res, next){ // "use" es usado antes de procesar codigo dentro de cada ruta
    res.header("Access-Control-Allow-origin", "*"); //permitir el acceso de diferentes origenes.
    res.header("Access-Control-Allow-Methods", "POST"); // tipo de peticiones permitidas.
    res.header("Access-Control-Allow-Headers", "Content-type"); // tipos de encabezado permitidos.
    next();
}
);


//Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.post(
    '/api/sumar',
    //se requieren dos objetos: uno representando la petición
    // un objeto representando la respuesta
    (req, res) =>{
        // To Do: Aqui va el procesamiento de la petición a esta ruta.
        console.log("Alguien esta conectandose a esta ruta👉 /sumar");
        const {numero_1, numero_2} = req.body;
        const resultado = parseFloat(numero_1) + parseFloat(numero_2)

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
        console.log("Alguien esta conectandose a esta ruta👉 /restar");
        const {numero_1, numero_2}=req.body;
        const resultado = numero_1 - numero_2

        res.json(resultado);
    }
);

// ¿Como quedaria la ruta para devidir?

app.post(
    '/api/dividir',
    (req, res)=>{
        console.log("Alguien esta conectandose a esta ruta👉 /dividir");
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

//operacion multiplicar, agregado a tarea profe

app.post(
    '/api/multiplicar',
    (req, res)=>{
        console.log("Alguien esta conectandose a esta ruta👉 /multiplicar");
        let resultado;
        //tratar error con TRY CATCH
        try {
            const {numero_1, numero_2} = req.body;
            resultado = numero_1 * numero_2;
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
    3000,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000😎🎮👀🎯")
    }
);