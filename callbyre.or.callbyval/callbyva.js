function value()
{
    var a=100;
    given(a)
    console.log("value",a)
}
function given(a)
{
    console.log("given:",a+1)
}
value()
console.log("this is call by value.not by reference if it reference then 'a' at 'value' become 101")
console.log("in stack memory a is stored like a=100 and a=101.two different")