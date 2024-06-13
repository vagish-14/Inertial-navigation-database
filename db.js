const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB);
        console.log("Connected to database.")
    }catch(err){
        console.log(err, "could not connect to database")
    }
}