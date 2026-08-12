const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

const mongoose = require("mongoose");
const Mydata = require("./models/mydataschema");
// const Mydata1 = require("./models/pr");
// const Mydata1 = require("./models/mydatachoich"); 
var methodOverride = require("method-override"); 
var moment = require("moment");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

const bir = require("./routes/allroutes")
const biredit = require("./routes/editroute")
const birview = require("./routes/viewroute")
const birall = require("./routes/all")

mongoose.connect("mongodb+srv://divhasan:3uLajJmhVB6YLcvi@cluster0.wgdmivy.mongodb.net/all-hasan?appName=Cluster0")
.then(()=>{
    app.listen(port,()=>{
    console.log(`http://localhost:3000/`);
});
}).catch((err)=>{
    console.log(err);
})


app.use(bir,biredit,birview,birall)