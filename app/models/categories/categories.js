import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
         type: Object,
         require: true,
         default: {
            url: String,
            name: String
         }
    },
    description:{
        type:String,
        required:true
    },

},{timestamps: true});

const Category = mongoose.models.categories || mongoose.model('categories', categorySchema)

export default Category