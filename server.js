
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const send_data_db = require("./models/api1_db.js")
const api1 = require("./models/api1_url.js")


mongoose.connect(process.env.dbURL)
.then( (ret_val) => console.log(" Connected to MongoDB "))
.catch( (err)    => console.error(err));

function storeCryptoStats() {

        fetch(api1.url, api1.options)
        .then(res => res.json())
        .then((data) => {
                send_data_db(data.bitcoin);
                send_data_db(data.ethereum);
                send_data_db(data["matic-network"]);
        })
        .catch(err => console.error(err));   
}

storeCryptoStats();

