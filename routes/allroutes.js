const express = require("express");
const router = express.Router();

const Mydata = require("../models/mydataschema");
var moment = require("moment");



// app.get("/",(req,res)=>{
//     Mydata.find().then((result) => {
//         res.render("index" , {arr: result})
//     }).catch((err)=>{
//         console.log(err);
//     })
// });


//get ("/")

//get("/view")

router.get("/choich",(req,res)=>{
    res.render("user/choich")
});
router.get("/price",(req,res)=>{
    res.render("user/price")
});
router.get("/sting",(req,res)=>{
    res.render("user/sting")
});
router.get("/add",(req,res)=>{
    res.render("user/add")
});

//edit id

router.get("/vie",(req,res)=>{
    res.render("user/vie")
});


//post ("/")


//or

// app.post("/",(req,res)=>{
//     mydata.create(req.body).then((result) => {
//         res.redirect("/")
//     }).catch((err) => {
//         console.log(err);
//     })
// });


router.get("/vie/:id",(req,res)=>{
    Mydata.findById(req.params.id).then((result) => {
        res.render("user/vie",{arr2:result , moment: moment});
        }).catch((err) => {
            console.log(err);
    });
});


// Delete
//delete("/edit/:id")

//Put
//put("/edit/:id)

// post (view)


module.exports=router;