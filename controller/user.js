import User from '../models/user'
 // call API
 export const signUp = async (req, res) => {
     const { email, name, password} = req.body
     try {

        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser){
            res.json({
                message: "email k tồn tại"
            })
        }

        const user = await new User({email, name, password}).save();
       res.json({
           user: {
               _id: user.id,
               email: user.email,
               name: user.name
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
          res.json({
            user: {
                _id: user.id,
                email: user.email,
                name: user.name
            }
        })

      } catch (error) {
          
      }
  }