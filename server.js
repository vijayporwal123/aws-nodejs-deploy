const express= require("express");
const app = express();
require("dotenv").config


app.get('/api/get', (req,res) => {
res.send({message:"hello back to node js"});
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        },env:process.env.NAME
    })
});


//app.listen(8000,() => {
 app.listen(process.env.PORT,() => {   
console.log("listing to 8000");


})