const mongoose = require("mongoose");
const express = require("express");



let api_schema = new mongoose.Schema({

         usd            :  Number ,
         usd_market_cap :  Number ,
         usd_24h_change :  Number
});       


function send_data_db(data, coin){
    
    let coin_db  =   mongoose.model(coin, api_schema);
    let data_db  =   new coin_db(data); 
     data_db.save()
    .then(  (saved_data) =>  console.log("Below Data is successfully Saved","\n", saved_data) )
    .catch( (err)        =>  console.error("Error: ", err) );
     
     return data_db;
}

module.exports = send_data_db;

         


        
