import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
       type: String,
       required: true
    },
    price: {
        type: String,
        required: true
     },
     slug: {
         type: String,
         lowercase: true,
         unique: true,
         index: true

     },
     // kết nối vs product
    category: {
        type: ObjectId,
        ref: "Category"
    }
    
}, { timestamps: true});
export default mongoose.model('Product', productSchema);