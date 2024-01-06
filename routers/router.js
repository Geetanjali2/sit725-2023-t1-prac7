let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postPic(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllPics(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllPics(req,res);
});


module.exports = router;