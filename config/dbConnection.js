// In order to connect with the database we need a mongoose
// which is a object data model design schema for our entities like contacts and user.

const mongoose = require("mongoose");

const connectDb =async() =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ",
         connect.connection.host,
         connect.connection.name);
    }catch (err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;