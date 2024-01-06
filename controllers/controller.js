let collection = require('../models/pic');

const postPic = (req,res) => {
    let pic = req.body;
    collection.postPic(pic, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllPics = (req,res) => {
    collection.getAllPics((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deletePic = (req,res) => {
    let pic = req.body;
    collection.deleteOne(pic, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postPic,getAllPics}