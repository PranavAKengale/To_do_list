//jshint esversion: 6

const express = require("express");
const bodyParser=require("body-parser");
const date =require(__dirname + "/date.js")



const app=express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


const items=["Buy Food","Cood Food","Eat Food"];
const workItems=[]

app.get("/",function(req,res){

    
    day=date.getDate()
    res.render("list",{
        listTitle:day,
        newListItems:items
    });
});



app.post('/', function(req,res){
    let item=req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        console.log(workItems)
        res.redirect('/work');
    }else{
        items.push(item)
        res.redirect("/")
    }
});




app.get("/work",function(req,res){
    res.render("list",{
        listTitle:"Work List",
        newListItems:workItems
    })
});






app.get('/about', function(req,res){
    res.render("about")
})






app.listen(3000,function(){
    console.log("Your app is running on port 3000")
});