const mongoose = require("mongoose");
const express = require("express");



let api_schema = new mongoose.Schema({

         usd            :  Number ,
         usd_market_cap :  Number ,
         usd_24h_change :  Number
});       
let api_db  = mongoose.model('api_db', api_schema); 

function send_data_db(data){
    
    coin_db = new api_db(data);
    coin_db.save()
    .then(  (saved_data) =>  console.log("Below Data is successfully Saved","\n", saved_data) )
    .catch( (err)        =>  console.error("Error: ", err) );

}

module.exports = send_data_db;

         


        
