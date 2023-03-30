function first()
{
  var a={
    value:100
  }
  second(a)
  console.log(a.value)
}
function second(a)
{
  a.value=a.value+1
  console.log(a.value)
}
first()
console.log("heap memory is where a is stored,and reference is passed from stack memoey")
