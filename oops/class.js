class student{
    name;
    yob;
    constructor(name,yob)
    {
        this.name=name;
        this.yob=yob;
    }
    getAge(){
        return new Date().getFullYear()-this.yob
    }
    getName(){
        return this.name
    }
}
var student1=new student('alan',2000)
console.log(student1,student1.getAge())
console.log(student1.getName())