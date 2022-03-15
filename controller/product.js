// const product = [
//         {id: 1, name: "Product A"},//item
//         {id: 2, name: "Product B"},//item
//     ];
 //1 khởi tạo model để kết nối cơ sở dữ liệu
import Product from '../models/product'
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
        const product = await Product.findOne({ _id: req.params.id});
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
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}

//Xóa sp
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id});
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
        const product = await Product.findOneAndUpdate({id: req.params.id}, req.body);
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "Xóa"
        })
    }
    // res.json(product.map(item => item.id == req.params.id ? req.body : item));
}