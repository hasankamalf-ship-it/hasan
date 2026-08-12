const express = require("express");
const router = express.Router();

const Mydata = require("../models/mydataschema");
var moment = require("moment");


router.get("/edit/:id",(req,res)=>{
        Mydata.findById(req.params.id).then((result) => {
        res.render("user/edit" , {arr3: result})
    }).catch((err)=>{
        console.log(err);
    });
});

// Delete

router.delete("/edit/:id",(req,res)=>{
    Mydata.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/");
        }).catch((err) => {
            console.log(err);
    });
});

//Put

router.put("/edit/:id",(req,res)=>{
    Mydata.findByIdAndUpdate(req.params.id , req.body).then(() => {
    // Mydata.updateOne({_id:req.params.id} , req.body).then(() => {
        res.redirect("/");
        }).catch((err) => {
            console.log(err);
    });
});



module.exports = router;
