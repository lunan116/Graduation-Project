module.exports = {
    users: {
        name: {type: String, required: true},
        password: {type: String, required: true},
        type: {type: String, required: true},
        workspace:{type:String,required:true}
    },
    parts: {
        partname: {type: String, required: true},
        remark: {type: String, required: true}
    },
    projectsmanagers:{
        projectTitle : {type: String, required: true},
        projecttime : {type: String, required: true},
        projecttime1 : {type: String, required: true},
        apip : {type: String, required: true},
        progress : {type: String, required: true},
        annualPlan : {type: String, required: true},
        planed : {type: String, required: true},
        primalproblem : {type: String, required: true},
        solvedproblem : {type: String, required: true},
        from : {type: String, required: true},
        to : {type: String, required: true},
        type : {type: String, required: true},
        finish:{type: String, required: true},
        projectcontacts : {type: String, required: true},
        phonenumber:{type: String, required: true}
    },
    projectInfs:{
        id : {type: String, required: true},
        time : {type: String, required: true},
        planing : {type: String, required: true},
        jingdu : {type: String, required: true},
        annualPlan : {type: String, required: true},
        planed : {type: String, required: true},
        mainproblem : {type: String, required: true},
        solveproblem : {type: String, required: true}
    },
    partments:{
        companyTitle : {type: String, required: true},
        registeredCapital : {type: String, required: true},
        founder : {type: String, required: true},
        companySize : {type: String, required: true},
        address : {type: String, required: true},
        type : {type: String, required: true},
        qualityRating : {type: String, required: true},
        summary : {type: String, required: true}
    },
    companys:{
        companyTitle : {type: String, required: true},
        registeredCapital : {type: String, required: true},
        founder : {type: String, required: true},
        companySize : {type: String, required: true},
        address : {type: String, required: true},
        type : {type: String, required: true},
        qualityRating : {type: String, required: true},
        summary : {type: String, required: true}
    },
    borrows:{
        tiaoxinma:{type:String},
        bookName:{type:String},
        booktype:{type:String},
        bookShelf:{type:String},
        publishing:{type:String},
        author:{type:String},
        price:{type:String},
        borrowTimes:{type:String}
    },
    readers:{
        name:{type:String},
        readerType:{type:String},
        cardID:{type:Number},
        phoneNumber:{type:Number},
        email:{type:String},
        address:{type:String}
    }
};
