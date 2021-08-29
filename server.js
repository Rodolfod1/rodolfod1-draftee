const express=require('express');
const mongoose=require('mongoose');
const path= require('path');
const apiRouter=require ('./routes');
const app = express();

//configuring port  
const PORT=process.env.PORT || 3001; 

// middeware definement 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//configuring port for heroku deployment 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.use(apiRouter);

// setting up AtlasDB connection 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/recluter",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false  
    },
    ()=>{console.log("Successfully connected to DataBase")}
);