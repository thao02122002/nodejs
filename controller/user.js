import User from '../models/user'
 // call API
 export const signUp = async (req, res) => {
     try {
         const user = await new User(req.body).save();
         res.json(user);
         
     } catch (error) {
         res.status(400).json({
            message: "Không thêm đc sp"
        })
         
     }
 }
  export const signIn = async (req, res) => {
      try {
         const user = await User.findOne({ _id: req.params.id});
        // const user = await User.findOne({ email: req.params.email});
         res.json(user);
         
     } catch (error) {
         res.status(400).json({
            message: "Không thêm đc sp"
        })
         
     }
  }