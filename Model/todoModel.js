//define u r model schema
import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo:{
        type: String,
        required: true
    }
})

//we are creating collection with name called todos with todoSchema
const todoCollection = mongoose.model('todos',todoSchema);
export default todoCollection;