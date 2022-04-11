import User from '../models/user'
import jwt from 'jsonwebtoken'
 // call API
 export const signUp = async (req, res) => {
     const { email, name, password} = req.body
     try {

        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser){
            res.json({
                message: "email đã tồn tại"
            })
        }

        const user = await new User({email, name, password}).save();
       res.json({
           user: {
               _id: user.id,
               email: user.email,
               name: user.name,
               role: user.role
           }
       })

         
         
     } catch (error) {
        
     }
 }
  export const signIn = async (req, res) => {
      const {email, password} = req.body;
      try {
          const user = await User.findOne({email}).exec();
          if(!user) {
              res.status(400).json({
                  message: "email k tồn tại"
              })
          }
          if(!user.authenticate(password)) {
              res.status(400).json({
                  message: "sai mật khẩu"
              })
          }

          const token = jwt.sign({_id: user._id}, "123456", {expiresIn: 60 * 60})// đoạn mã jwt vs 3 tham số truyền vào là thông tin của user, đoạn mã mawcjd dịnh , và thời gian có hiệu lực cho cái token đó
          
          res.json({
              token,
            user: {
                _id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })

      } catch (error) {
          
      }
  }

  export const ListUser = async (req, res) => {
    
    // res.json(product);

    try {
        const users = await User.find();
        res.json(users);
        
    } catch (error) {
        res.status(400).json({
            message: "Lỗi k tìm thấy sản phẩm"
        })
    }
}

export const UpdateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "update user k thành công"
        })
    }
}

export const ReadUser = async (req, res) => {

    try {
           const user = await User.findOne({ _id: req.params.id}).exec();
         
           res.json(user);
           // res.json({
           //     product,
           //     comment
           // })
           
       } catch (error) {
           res.status(400).json({
               message: "Không tìm thấy sp"
           })
       }}