import Comment from '../models/comment'
export const CREATE = async (req,res) => {
  try {
    const comment = await new Comment(req.body).save()
    res.json(comment)
  } catch (error) {
    
  }
}