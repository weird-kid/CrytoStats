const nats                   = require("nats")
const express                = require("express")
const app                    = express()
const mongoose               = require("mongoose")
const db                     = require("./models/mongo_db.js")
const api1                   = require("./models/api1_url.js")
const api2                   = require("./models/api2_url.js")
const CheckQuery             = require("./models/query_list.js")
const StandardDeviation      = require("./models/standard_deviation.js")
const jc                     = nats.JSONCodec();

mongoose.connect(process.env.dbURL)
.then( (ret_val) => console.log(" Connected to MongoDB "))
.catch( (err)    => console.error(err));


function storeCryptoStats() {
        fetch(api1.url, api1.options)
        .then(res => res.json())
        .then((data) => {
                db.send_data_db(data.bitcoin, "bitcoin");
                db.send_data_db(data.ethereum, "ethereum");
                db.send_data_db(data["matic-network"], "matic-network");
        })
        .catch(err => console.error(err));   
}

async function nats_consumer(){
        try{
                let nat_conn = await nats.connect({servers: "0.0.0.0:4222"});
                let subscription = nat_conn.subscribe("db.update", {queue : "db-servers"});
                for await (const raw_msg of subscription){
                        let json_msg = jc.decode(raw_msg);
                        try{ 
                               if(json_msg.trigger == "update")
                                        storeCryptoStats();
                         }catch(inner_err){ 
                               console.error("Invalid accesss of json object");
                         }
                }
         }
         catch(outer_err){
                 console.error("NATS server Not running");
         }
}
                        
                
        

app.get('/stats', (req, res) => {
        if(!CheckQuery(req.query.coin))
                 res.send("Enter a Valid Cryto-Coin");
        else {
                fetch(api2.url1 + req.query.coin + api2.url2, api1.options)
                .then(res => res.json())
                .then((data) => res.send(data))
                .catch((err) => res.send(err)); 
        }
        
});

app.get('/deviation', (req,res) => {
        if(!CheckQuery(req.query.coin))
                res.send("Enter a Valid Cryto-Coin");
        else 
                res.send(StandardDeviation(req.query.coin));  
        
});
app.listen(3000, (err) =>  console.error(err));

nats_consumer();

