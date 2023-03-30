  var a={
        a:100,
        b:200,
        s:function()
        {
          console.log(this)
        }
        }
a.s();
console.log("a.s() will give the all a object")

console.log("***************************")
// 


var b={
    a:100,
    b:200,
    s:function()
    {
      console.log(b)
    }
    }
b.s();
console.log("b.s() will give the all b object")


console.log("***************************")

var ab={
    a:100,
    b:200,
    s:function()
    {
      console.log(this.a+this.b)
    }
    }
ab.s();
console.log("a.s() will give the a+b only if this.a+this.b")




