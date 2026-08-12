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
}); 

const Mydata = mongoose.model("Mydatachoich",asa);

module.exports = Mydata;