const express = require("express");
const router = express.Router();

const Mydata = require("../models/mydataschema");
var moment = require("moment");

router.get("/",(req,res)=>{
    Mydata.find()
    .then((result)=>{

        const total = result.length;

            const today = new Date(); 
            today.setHours(0,0,0,0) 

            let active = 0;
            let expired = 0;

            result.forEach((mem) => {
                const endDate = new Date(mem.dataend);
                endDate.setHours(0,0,0,0)
                const diff = endDate - today
                const rema = Math.ceil(diff / (1000*60*60*24)) 
                
                if(rema < 0){
                    expired++;
                }else{
                    active++;
                }
            });

            res.render("index" , {arr: result,
                moment: moment,
                total:total,
                activee:active,
                exactivee:expired
            })
    }).catch((err)=>{
        console.log(err);
    });
});


router.post("/",(req,res)=>{
    const mydata = new Mydata(req.body);
    console.log(req.body);
    mydata.save().then((result) => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
    })
});

//or

// app.post("/",(req,res)=>{
//     mydata.create(req.body).then((result) => {
//         res.redirect("/")
//     }).catch((err) => {
//         console.log(err);
//     })
// });


module.exports = router;