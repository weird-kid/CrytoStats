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
     
}

let result = 10;

function get_data_db(coin){
    console.log("\tBegining to fetch last 100 records of collection ",coin);

    let db_coin =  mongoose.model(coin, api_schema);
    return db_coin;
}

/*
mongoose.connect(process.env.dbURL)
.then(() => {
        btc_db = mongoose.model("bitcoin", api_schema);
        btc_db.find({})
        .then((record) => console.log(record)) 
        .catch((err) => console.error(err));
})
.catch((err) => console.error(err));
*/



module.exports = { 'send_data_db' : send_data_db,
                   'get_data_db' : get_data_db };

         


        
