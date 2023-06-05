const express =require("express");
//import that exported and declared in one variable
const empModel = require('./model/model')
const app= new express();
//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get('/',(req,res)=>{res.send("hi")})
app.get('/about',(req,res)=>{res.send("About Page")})
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("data added")})
    //post exported
    app.post('/new',(req,res)=>{
        console.log(req.body)
        new empModel(req.body).save();//saving if the data coming required model
        res.send("data added to db");//giving respose 
    })
    //get view api
    app.get('/view',async(req,res)=>{
        var data = await empModel.find();
        res.send(data);
    })
    //delete by mongo id
    app.delete('/remove/:id',async(req,res)=>{
        //to define id
        let id = req.params.id
        await empModel.findByIdAndDelete(id)//giving to emp
        res.send("data deleted")
    })
        //update
        app.put('/edit/:id',async(req,res)=>{
            let id= req.params.id;
            await empModel.findByIdAndUpdate(id,req.body)
            res.send("data updated")
        })
    //port
app.listen(3005,(req,res)=>{console.log("Port is running in 3005")})
