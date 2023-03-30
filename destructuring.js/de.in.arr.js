var arr=[1,2,3,4,6]
function a()
{
    const [a,b,c,d,e,f=8]=arr
    console.log(a,b,c,d,e,f)
}
a()
// another way of destruturing 
function b(mark)
{
    console.log(mark)
}
b(arr)
//another way
function c([a,b,c])
{
  console.log([a,b,c])
}
c(arr)
//same way are also applicable for the object