var express = require('express');
var fs = require("fs");
var router = express.Router();


router.post('/', function (req, res) {

    console.log(req.files);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.json({"errorCode": 200,"data": response});
        });
    });
})

/*router.get('/',function (req,res) {
    var partments = global.dbHelper.getModel('partments');
    var param = req.query;
    var _id = param._id;
    var condition = {_id :_id};
    //console.log("woighio")
    //console.log(_id)
    partments.find(condition,function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
            //console.log("hh")
        } else {
            res.json({"errorCode": 200,"data": docs}); //以json格式输出
            console.log(docs)
        }
    })

});*/

module.exports = router;
