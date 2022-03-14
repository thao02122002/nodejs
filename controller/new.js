import mongoose from "mongoose";

const New = mongoose.model('New', { name: String, desc: String, detalDesc: String});

//list
export const list = async (req, res) => {
    try {
        const news = await New.find();
        res.json(news);
        
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy danh sách"
        })
        
    }

}

//lấy ra 1 bài viết theo id
export const read = async (req, res) => {
    try {
        const news = await New.findOne({_id: req.params.id}).exec();
        res.json(news);
        
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
        
    }
}

//thêm bài viết
export const create = async (req, res) => {
     try {
        const news = await new New(req.body).save();
        res.json(news);
        
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
        
    }
}

//update
export const update = async (req, res) => {
    try {
        const news = await New.findOneAndUpdate({id: req.params.id}, req.body).exec();
        res.json(news);
        
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được bài viết"
        })
        
    }

}
// Xóa
export const remove = async (req, res) => {
    try {
        const news = await New.findOneAndDelete({ _id: req.params.id}).exec();
        res.json(news);
        
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được bài viết"
        })
        
    }
}