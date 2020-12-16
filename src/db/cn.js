const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Registeration',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log(`connection`);
}).catch((err) =>{
    console.log(err)
})