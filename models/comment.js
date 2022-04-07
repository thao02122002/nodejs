import mongoose, {Schema,ObjectId} from "mongoose";
const commentSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  product: {
    type : ObjectId,
    ref: "Product"
  },
  user: {
    type: ObjectId,
    ref: "User"
  }
},{timestamps: true})
export default mongoose.model('Comment',commentSchema )
