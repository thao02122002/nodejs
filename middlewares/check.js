export const check = (req, res, next) => {
    const status = true;
    if(status) {
        console.log("Hello");
        next();
    }else {
        console.log("aaaaaaaaaaaaa");
    }
}