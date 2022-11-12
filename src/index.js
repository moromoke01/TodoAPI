const express = require('express')
const {json} =require('express')


                                                                                                                  
const connect = require ('./config/database');
const TOdoRoute = require('./routes/ToDoRoutes');

connect();

const app = express();

app.use(json())
app.use("/Todo", TOdoRoute)


app.get("/", (req, res) =>{
    res.send("Janet is working on MONGOdb");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`serving on port ${PORT}`))
