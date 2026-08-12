const express = require("express");
const router = express.Router();

const Mydata = require("../models/mydataschema");
var moment = require("moment");


router.get("/view",(req,res)=>{
    Mydata.find()
    .then((result)=>{

        const total = result.length;

        const today = new Date();
        today.setHours(0,0,0,0);
        
        let activee = 0;
        let exactivee = 0;
        
        result.forEach((mem) => {
            const dataend = new Date(mem.dataend).setHours(0,0,0,0);
            const diff = dataend - today;
            const rema = Math.ceil(diff / (1000*60*60*24)) ;
            
            rema <= 0 ? exactivee++ : activee++;
        });

        res.render("user/view" , {
            arr1: result,
            moment: moment,
            total:total,
            activee:activee,
            exactivee:exactivee
        })
    }).catch((err)=>console.log(err));
});


router.post("/view",(req,res)=>{
    Mydata.find().then((result) => {
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;