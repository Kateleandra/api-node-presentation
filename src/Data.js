const mongoose  = require = require("mongoose");

const DataSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    technology:{
        type: String,
        required: true
    }
});

mongoose.model("Data", DataSchema)