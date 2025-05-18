
const express        = require("express")
const app            = express()
const mongoose       = require("mongoose")
const send_data_db   = require("./models/api1_db.js")
const api1           = require("./models/api1_url.js")
const api2           = require("./models/api2_url.js")
const CheckQuery     = require("./models/query_list.js")


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

/*app.get('/deviation', (req, res) => {
        if(!CheckQuery(req.query.coin)
                 res.send("Enter a Valid Cryto-Coin");
        else {

        }

});
*/
app.listen(3000, (err) =>  console.error(err));
//storeCryptoStats();
