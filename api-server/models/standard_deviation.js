const mongoose = require('mongoose')
const db       = require('./mongo_db.js')

let ret_val = 100;

function StandardDeviation(coin) {
    
    let data = db.get_data_db(coin);    
    data.aggregate([
        { $match: {} },
        { $limit: 100},
        { $group: { _id:{}, "deviation": { $stdDevPop: "$usd"}}}
        ])
    .then((res) =>  ret_val = res)
    .catch((err) => console.error(err)); 

    if(ret_val != 100){
            let sd = ret_val[0].deviation;
            return {"deviation": sd};
    }
    }
   


module.exports = StandardDeviation;

