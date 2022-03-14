// const product = [
//         {id: 1, name: "Product A"},//item
//         {id: 2, name: "Product B"},//item
//     ];
import mongoose from "mongoose";
 //1 khởi tạo model
 const Product = mongoose.model('Product', {name: String, price: Number, desc: String, quantity: Number ,categoryId: Number});


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
    // console.log(req.body); // req lấy về 1 cái object đã thêm vào ở body
   
    // product.push(req.body);// push vào product là cái mảng cũ 
    // res.json(product);
    try {
        const product = await new Product(req.body).save();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "Không thêm đc sp"
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
            message: "Xóa"
        })
    }

    // res.json(product.filter(item => item.id !== +req.params.id));
}


export const update = async (req, res) => {
    
     try {
        const product = await Product.findOneAndUpdate({id: req.params.id}, req.body).exec();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "Xóa"
        })
    }
    // res.json(product.map(item => item.id == req.params.id ? req.body : item));
}