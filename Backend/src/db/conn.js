const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://0.0.0.0:27017/signupdata", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)  => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`connection successful`);
    }
})