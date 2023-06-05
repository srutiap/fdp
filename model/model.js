//request for connecting
const { default: mongoose } = require('mongoose');
const mongoos=require('mongoose');

mongoose.connect("mongodb+srv://sruti:sruti@cluster0.zfc78gx.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err))
let Schema = mongoose.Schema;
const employeeSchema = new Schema({
    sname:String,
    age:Number,
    pos:String,
    salary:Number
});
//export collection and schema through one variable
var employeeModel = mongoose.model("employees",employeeSchema)
//how to export
module.exports= employeeModel;