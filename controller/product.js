// const product = [
//         {id: 1, name: "Product A"},//item
//         {id: 2, name: "Product B"},//item
//     ];
 //1 khởi tạo model để kết nối cơ sở dữ liệu
import Product from '../models/product'
import slugify from 'slugify';
//Danh sách sp
export const list = async (req, res) => {
    
    // res.json(product);

    try {
        const products = await Product.find();
        res.json(products);
        
    } catch (error) {
        res.status(400).json({
            message: "Lỗi k tìm thấy sản phẩm"
        })
    }
}
//lấy 1 sp theo id 
export const read = async (req, res) => {

 try {
        const product = await Product.findOne({ _id: req.params.id}).exec();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sp"
        })
    }
    
    // res.json(product.find(item => item.id === +req.params.id));
}

//Thêm sp
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}

//Xóa sp
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id}).exec();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "Xóa sp k thành công"
        })
    }

    // res.json(product.filter(item => item.id !== +req.params.id));
}


export const update = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    
     try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "update sp k thành công"
        })
    }
    // res.json(product.map(item => item.id == req.params.id ? req.body : item)); 
}
// search poduct
export const search = async (req, res) => {
    
    try {
        const searchString = req.query.q
        const result = await Product.find( {$text: {$search:searchString}}).exec()
        res.json(result);
    } catch (error) {
        
    }
   
    
}

export const sort = async (req,res) => {
    const object = {
        min: parseInt(req.query.min),
    max: parseInt(req.query.max) 

    }
    
    try {
        const filter = await Product.find({price : {$gte:object.min, $lte:object.max}})
        console.log(object.min)
        console.log(object.max)

        res.json(filter)
    } catch (error) {
        
    }
}