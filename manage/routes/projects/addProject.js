var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var obj = {
        a: 1,
        b: 2
    };
    res.json(res.obj); //以json格式输出
});

router.post('/', function (req, res, next){
    var param = req.body;
    /*var projectTitle = param.projectTitle,
        projecttime = param.projecttime,
        apip = param.apip,
        progress = param.progress,
        annualPlan = param.annualPlan,
        planed = param.planed,
        primalproblem = param.primalproblem,
        solvedproblem = param.solvedproblem,
        from = param.from,
        to = param.to,
        type = param.type;*/
    Date.prototype.Format = function(fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    var id = param.id;
    var projectTitle = param.projectTitle;
    //console.log("param");
    var projectsmanagers = global.dbHelper.getModel('projectsmanagers');
    projectsmanagers.findOne({projectTitle: projectTitle}, function (doc,error) {
        if (error){
            res.json({"errorCode": 406,"errorMessage": '创建失败，查询数据库失败'});
        } else if(doc) {
            res.json({"errorCode": 405, "errorMessage": '创建失败，项目名已存在'});
        }else{
            //res.json({"errorCode": 200,"errorMessage": '注册成功！'});
            projectsmanagers.create({
                projectcontacts : param.projectcontacts,
                phonenumber:param.phonenumber,
                projectTitle : param.projectTitle,
                projecttime : param.projecttime,
                projecttime1 : param.projecttime1,
                apip : param.apip,
                progress : param.progress,
                annualPlan : param.annualPlan,
                planed : param.planed,
                primalproblem : param.primalproblem,
                solvedproblem : param.solvedproblem,
                from : param.from,
                to : param.to,
                type : param.type,
                finish : param.finish
            }, function (error, doc) {
                if (error) {
                    res.json({"errorCode": 404,"errorMessage": '创建失败'});
                    console.log(error);
                } else {
                    /*req.session.error = '用户名创建成功！';*/
                    var projectInfs = global.dbHelper.getModel('projectInfs');
                    var time = (new Date()).Format("yyyy-MM-dd");
                    var conditions = {
                        id:id,
                        time:time,
                        planing : param.apip,
                        jingdu : param.progress,
                        annualPlan : param.annualPlan,
                        planed : param.planed,
                        mainproblem : param.primalproblem,
                        solveproblem : param.solvedproblem
                    };
                    console.log(conditions);
                    projectInfs.create(conditions,function () {

                    })
                    res.json({"errorCode": 200,"errorMessage": '创建成功'});
                }
            });
        }
    })
    //console.log(param);
    //todo something
    //res.json({"errorCode": 0,"errorMessage": 'save'});
});
module.exports = router;
