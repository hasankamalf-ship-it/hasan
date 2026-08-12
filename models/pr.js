const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asa = new Schema({
    month: String,
    month2: String,
    month6: String,
    year: String,
}); 

const Mydata = mongoose.model("month",asa);

module.exports = Mydata;