const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:'.env'}); 


// Puerto de conexión
const port = process.env.PORT || 3000
const app = express()

const userRoute = require("./routes/user_routes");
//activacion
app.listen(port, () => console.log("Server listening to", port));

// middlewares
app.use(express.json());
app.use("/api", userRoute);

 //Rutas
app.get("/", (req, res) => {
    res.send("Welcome to my API");

});


app.get('/', (req,res)=>res.send('Electiva 1'))


mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING) 
    .then(()=>console.log('Connect with mongodb'))
    .catch((error)=>console.error.error(error))


app.use(express.json())
app.use('/api', userRoute)
