import mongoose, { Schema } from "mongoose";

const newSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
      type: String,
      required:true
    },
    detail:{
      type: String,
      required: true
    }
}, {timestamps: true});
export default mongoose.model("New", newSchema);