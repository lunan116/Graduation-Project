var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var param = req.query;
    var workspace = param.workspace;
    var projectsmanagers = global.dbHelper.getModel('projectsmanagers');
    console.log(workspace);
    if (workspace == undefined || workspace == null || workspace == ""){
        projectsmanagers.find({},function(err, docs){
            if (err){
                res.json({"errorCode": 405,"errorMessage": docs});
            } else {
                res.json({"total": docs.length,"rows": docs}); //以json格式输出
            }
        })
    } else {
        projectsmanagers.find({to:workspace},function(err, docs){
            if (err){
                res.json({"errorCode": 405,"errorMessage": docs});
            } else {
                res.json({"total": docs.length,"rows": docs}); //以json格式输出
            }
        })
    }


});

router.post('/', function (req, res, next){
    var param = req.body;
    var name = param.name,
        password = param.password;
    var projectsmanagers = global.dbHelper.getModel('projectsmanagers');
    projectsmanagers.findOne({name: name}, function (error,doc) {
        if (error){

            res.json({"errorCode": 405,"errorMessage": '登录失败，查询数据库失败'});
        } else if(doc){
            projectsmanagers.findOne({name: name , password:password}, function (error,doc) {
                if (error){
                    console.log(error);
                    res.json({"errorCode": 405,"errorMessage": '登录失败，查询数据库失败'});
                } else if (doc){
                    res.json({"errorCode": 200,"errorMessage": '登录成功',"data":doc});
                } else{
                    res.json({"errorCode": 405, "errorMessage": '登录失败，密码错误'});
                }
            })
        } else {
            res.json({"errorCode": 405, "errorMessage": '用户名不存在'});
        }
    })
    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
