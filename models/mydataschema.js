const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asa = new Schema({
    name: String,
    tele: Number,
    subscription: String,
    datasta: Date,
    dataend: Date,
    subscri: String,
    age: Number,
    notes: String,
},
{timestamps: true}
); 

const Mydata = mongoose.model("Mydata",asa);

module.exports = Mydata;