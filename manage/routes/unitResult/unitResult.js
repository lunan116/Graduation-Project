var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var result;
    var param = req.query;
    var workspace = param.workspace;
    var projectsmanagers = global.dbHelper.getModel('projectsmanagers');
    console.log(workspace);
    if (workspace == undefined || workspace == null || workspace == ""){
        projectsmanagers.find({type:"5"},function(err, docs){
            if (err){
                res.json({"errorCode": 405,"errorMessage": docs});
            } else {
                var count = 0;/*count 审批完成 counting 正在审批 counted未开始 counts已取消*/
                var value,
                    counting = 0,
                    counted = 0,
                    counts = 0;

                for (var i = 0;i<docs.length;i++) {
                    value = docs[i].finish;
                    if(value[ value.length - 1 ] == "%"){
                        value = parseFloat(value)/100 ;
                    }
                    if (value == "1" ){
                        count++;
                    }else if (value < 1 || value > 0){
                        counting++;
                    }else if (value == "0"){
                        counts++;
                    }
                }
                if (count >="2" && counted <=1) {
                    result = "优秀";
                }else  if (count >=1 && count < 2 && counted <=1){
                    result = "良好";
                } else  if (count >=0 && count < 1 && counted <=1){
                    result = "及格";
                }
                rows = [{
                    "count":count,
                    "counting":counting,
                    "counted":counted,
                    "counts":counts,
                    "result":result
                }];
                res.json({"total": 1,"rows": rows}); //以json格式输出
            }
        })
    } else {
        projectsmanagers.find({
            type:"5",
            to:workspace
        },function(err, docs){
            if (err){
                res.json({"errorCode": 405,"errorMessage": docs});
            } else {
                var count = 0;/*count 审批完成 counting 正在审批 counted未开始 counts已取消*/
                var value,
                    counting = 0,
                    counted = 0,
                    counts = 0;
                for (var i = 0;i<docs.length;i++) {
                    value = docs[i].finish;
                    if(value[ value.length - 1 ] == "%"){
                        value = parseFloat(value)/100 ;
                    }
                    if (value == "1" ){
                        count++;
                    }else if (value < 1 || value > 0){
                        counting++;
                    }else if (value == "0"){
                        counts++;
                    }
                }
                if (count >="2" && counted <=1) {
                    result = "优秀";
                }else  if (count >=1 && count < 2 && counted <=1){
                    result = "良好";
                } else  if (count >=0 && count < 1 && counted <=1){
                    result = "及格";
                }
                rows = [{
                    "count":count,
                    "counting":counting,
                    "counted":counted,
                    "counts":counts,
                    "result":result
                }];
                res.json({"total": 1,"rows": rows}); //以json格式输出
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
