import mongoose, {Schema} from "mongoose";
import { createHmac} from "crypto";
const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      minlength: 15
    },
    email: {
        type : String,
        required: true
    },
    role: {
        type: Number,
        default: 0

    },
    salt: {
        type: String

    },
    password: {
        type: String,
        required: true
    }
}, { timestamps : true});

userSchema.methods = {

    
// kiểm tra password 
//mã hóa cái password gửi lên và so sánh vs password đã mã hóa ở trong database
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },

    /// mã hóa password
    encrytPassword(password) {
        if(!password) return
        try {

            // sử dụng createHamc để mã hóa cái password
            return createHmac("sha256", "jwdk").update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}
// trước khi thực hiện .save() thì chạy middleware
// mã hóa cái password truyền vào r gắn vào cái password đã gọi trong data
userSchema.pre("save", function(next){
   this.password = this.encrytPassword(this.password);
   next();
})
export default mongoose.model('User', userSchema);