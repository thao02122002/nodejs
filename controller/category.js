import Category from '../models/category';
import Product from '../models/product';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const read = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
         res.status(400).json(error)
    }
}
export const readCate = async (req, res) => {

    try {
           const category = await Category.findOne({ _id: req.params.id}).exec();
         
           res.json(category);
           // res.json({
           //     product,
           //     comment
           // })
           
       } catch (error) {
           res.status(400).json({
               message: "Không tìm thấy sp"
           })
       }}
export const list = async (req, res) => {
    try {
         const category = await Category.find();
         res.json(category);
        
    } catch (error) {
         res.status(400).json(error)
    }
}

export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec();
        res.json(category);
        
    } catch (error) {
         res.status(400).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec();
        res.json(category);
    } catch (error) {
         res.status(400).json(error)
    }
}