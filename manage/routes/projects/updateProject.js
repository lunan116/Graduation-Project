var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next){
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
    var param = req.body;
    var projectTitle = param.projectTitle,
        projecttime = param.projecttime,
        projecttime1 = param.projecttime1,
        apip = param.apip,
        progress = param.progress,
        annualPlan = param.annualPlan,
        planed = param.planed,
        primalproblem = param.primalproblem,
        solvedproblem = param.solvedproblem,
        from = param.from,
        to = param.to,
        type = param.type,
        finish = param.finish,
        _id=param._id;
    var projectsmanagers = global.dbHelper.getModel('projectsmanagers');
    var condition = {_id :_id};

    projectsmanagers.findOneAndUpdate(condition,{
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
    },function (error,doc) {
        if (error) {
            res.json({"errorCode": 405,"errorMessage": "修改失败！"});
            //console.log(error);
        }else{
            var projectInfs = global.dbHelper.getModel('projectInfs');
            var time = (new Date()).Format("yyyy-MM-dd");
            var conditions = {
                id:_id,
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
            //console.log(doc);
            res.json({"errorCode": 200,"errorMessage": "修改成功！"});
        }
    })


});
module.exports = router;
