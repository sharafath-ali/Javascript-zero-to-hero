var student1={
    fname:"alan",
    lname:"walker",
    yob:2001,
    getage:function(){
        return new Date().getFullYear()-this.yob
    },
    getname:function(){
        return this.fname+" "+this.lname
    }
}
//////////////////////////////////////////
var student2={
    fname:"alison",
    lname:"burger",
    yob:2007,
    getage:function(){
        return new Date().getFullYear()-this.yob
    },
    getname:function(){
        return this.fname+" "+this.lname
    }
}
/////////////////////////////////////////if we have so many object with similar keywords we can class 
console.log(student1.getname())
console.log(student1.getage())
///////////////////////////////////////by doing this we can reduce the line and repeatation
console.log(student2.getname())
console.log(student2.getage())