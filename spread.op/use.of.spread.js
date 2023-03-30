console.log("*******concatinate*******")
var obj1={
    a:9,
    b:10,
    c:2009
}
var obj2={
    a1:999,
    b1:189,
    c:2009
}

var obj3={
    ...obj1,...obj2
}
console.log(obj3)

console.log("*******************")
console.log("*******************")

console.log("partial cloning is  possible/deep cloning is not possible")

console.log("*******************")
console.log("*******************")
console.log("*******************")
console.log("*******************")

var obj={
    a:9,
    b:10,
    c:2009,
    f:
   {
    name:"sharafath",
    age:45
   }
}
console.log("*******************")
var pclone={...obj}
console.log(pclone)
console.log(obj)
console.log("*******************")
console.log("*******************")
obj.c=33;
console.log(obj)
console.log(pclone)

obj.f.name="sharafath ali"
console.log("******************* deep cloning impossible.if there is any change in f will also change in pclone")
console.log(obj)
console.log(pclone)
console.log("*******************")
console.log("*******************")

console.log("***********Math.max()********")
array1=[1,233,55,33] 
var max=Math.max(...array1)
console.log(max)
//
var gg=0
gg=4
gg+=3
console.log(gg)
function e(a)
{
  return  a
}
var d=e(5)+1
console.log(d)