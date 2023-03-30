var obj1=
{
    a:3,
    b:4,
    c:function(){
        console.log(this.a+this.b)
    }
    ,status:undefined
}
//obj1.c()

function a()
{
  mark1=obj1.a
  mark2=obj1.b
  total=obj1.c()
  //this is difficult to do if there are somany value to copied
  //so we use destructuring the obj1
  console.log("total mark=",mark1+mark2,mark1,mark2)
}
a()
//desturturing
function b()
{
  const {a,b,c,status=false}=obj1//status=false// is a defualt value 
  console.log("B function =",a,b,c,status)
}
b()
function c()
{
    const{a,...other}=obj1
    console.log("A function =",a,other)
}
c()
