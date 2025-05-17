const mongodb = require("mongoose");
const express = require("express");
const app = express();


const dbURL = "mongodb+srv://likhith2018:MgqAKVdvISwmUe6d@cluster0.rhpfboq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(process.env.dbURL)
.then((ret_val) => {
        console.log("Connection Established to MongoDB's Server");
        app.listen(3000, () => {
                console.log("Listening to Incoming Client Request");
        });
})
.catch((err) => {
        console.error("Error: ", err);
});


        

