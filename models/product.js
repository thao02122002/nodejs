import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
       type: String,
       required: true,
       index: true
    },
    status: {
        type: Number,
        required: true,
     },
    price: {
        type: Number,
        required: true
     },
     salePrice: {
       type: Number,
       required: true
     },
    //  quantity: {
    //     type: Number,
    //     required: true
    //  },
    description: {
        type: String,
        required: true

    },
    imageUrl: {
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