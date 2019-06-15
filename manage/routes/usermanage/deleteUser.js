var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var User = global.dbHelper.getModel('users');
    User.find({type: {$lte: 5}},function(err, docs){
        if (err){
            res.json({"errorCode": 405,"errorMessage": docs});
        } else {
            res.json({"total": docs.length,"rows": docs}); //以json格式输出
        }
    })

});

router.post('/', function (req, res, next){
    var param = req.body;
    var _id = param._id;
    var condition = {_id : _id};
    var User = global.dbHelper.getModel('users');
    User.findOne({_id: _id}, function (error,doc) {
        if (error){
            res.json({"errorCode": 405,"errorMessage": '查询数据库失败'});
        } else if(doc){
            User.remove(condition , function (error) {
                if (error) {
                    res.json({"errorCode": 405,"errorMessage": error});
                } else {
                    res.json({"errorCode": 200,"errorMessage": "用户删除成功"});
                }
            });
        } else {
            res.json({"errorCode": 401, "errorMessage": '用户名不存在'});
        }
    })
    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
