import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name: {
        type:mongoose.SchemaTypes.String,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.String,
        required:true,
        unique:true,
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gim
    },
    password:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    fields:{
        type:mongoose.SchemaTypes.Array
    },
    end_points:{
        type:mongoose.SchemaTypes.Array
    }
},
{
    collection:"users",
    timestamps:true,
    versionKey:false
})

export default mongoose.model("User",userSchema)