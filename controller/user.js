import User from '../models/user'
export const userById = async (req, res, next, _id) => {
  try {
    const user = await User.findById(_id).exec();
    if(!user) {
      res.status(400). json({
        message: "Không tìm thấy user"
      })
    }

    req.profile = user;
    next();
  } catch (error) {
    
  }
}