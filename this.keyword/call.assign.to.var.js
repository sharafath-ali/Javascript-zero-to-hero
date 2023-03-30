var a={
  b:100,
  m:60,
  s:function(){
    console.log(this)
  }
}
var va=a.s;
//va() //this will give gobal object as output 
// if u want to get "a" output we use call
va.call(a)


// another way is binding=predefine the object

var ab={
    g:1900,
    m:650,
    s:function(){
      console.log(this)
    }
  }
  ab.s=ab.s.bind(ab);
  var vag=ab.s;
  vag()
  let vadj=prompt()