/*function normal(arg)
{
    console.log(arg)
}
normal(10)  */   
//it is normal function because it is called directly

//callback
/*document.getElementById("button").onclick= call;*/
// this is call back registeration 
//on id=button on onclick action//call on click only
function call(arg)
{
    console.log(arg)
}
//we cant give an arg then it is callback function
//we can use a function as both normal and callback 


//synchronis callback
console.log("start")
const a=[2,3,34,56,8]
a.forEach(call)
console.log("end")


//arrow functon
var arrow=()=>console.log("it a arrow function")
arrow()
console.log(arrow,"this will not work")

a.forEach((i)=>console.log("values are =",i));


//asyn callback
//start->end->callback



//syn callback
//syn callback will execute like-> start ->callback-
//->end

console.log('start')
arr=[1,2,3,4,5,6]
arr.forEach(element => {//all util function's callback are syn
    console.log(element)
});
console.log('end')

//syn will block the whole process
//ui will block
//any process will start after ending the blocked process
