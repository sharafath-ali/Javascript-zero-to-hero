var obj1={
    a:9,
    b:10,
    c:2009
}
/*var ab={
    a:9,
    b:10,
    c:2009
}
console.log(obj1.a===ab.a)*/

var obj2={
    ...obj1
}
var obj3=obj1


console.log("obj1===obj2 will give false because it is cloning")
console.log(obj1===obj2)
console.log({...obj1}==={...obj1})
// ... is spread op use to give what is in between '{ }'
console.log("*************************")

console.log("obj1===obj3 will give true because it is reference to var obj3")
console.log(obj1===obj3)
console.log(obj3===obj2)
console.log("*************************")

obj1.d=30
console.log(obj1,"=obj1")
console.log("obj3=",obj3)
console.log("obj2",obj2)


console.log("*************************")
// array


var array1=[3,4,5,7.0,99.9]
var array2=[...array1]
var reference1=array1


console.log("array1===array2 will give false because it is cloning")
console.log(array1===array2)
console.log("*************************")

console.log(array1===reference1)