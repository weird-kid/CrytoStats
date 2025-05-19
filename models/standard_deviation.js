const mongoose = require('mongoose')

function StandardDeviation() {
    
    mongoose.connect(process.env.dbURL)
    .then((obj) => {
            return obj.test.collection("bitcoins").find();
    })
    .catch((err) => console.error(err));
}


module.exports = StandardDeviation;

