import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
       type: String,
       required: true,
       index: true
    },
    price: {
        type: String,
        required: true
     },
     quantity: {
        type: Number,
        required: true
     },
    description: {
        type: String,
        required: true

    },
    descriptionDetail: {
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
productSchema.index({'$**': 'text'});
export default mongoose.model('Product', productSchema);