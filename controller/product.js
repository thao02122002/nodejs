const product = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
    ];

export const list = (req, res) => {
    
    res.json(product);
}
export const read = (req, res) => {
    
    res.json(product.find(item => item.id === +req.params.id));
}
export const create = (req, res) => {
    console.log(req.body); // req lấy về 1 cái object đã thêm vào ở body
   
    product.push(req.body);// push vào product là cái mảng cũ 
    res.json(product);
}
export const remove = (req, res) => {
    res.json(product.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(product.map(item => item.id == req.params.id ? req.body : item));
}