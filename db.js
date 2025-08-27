const mongoose = require('mongoose');

const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/Sigma");
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database connection failed");
    }
}

module.exports = dbConnect;