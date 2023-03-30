var player=[
    {
        name:"sharafath",
        value:50,
        club:"BARCA"
    },
    {
        name:"ramos",
        value:50,
        club:"PSG"
    },
    {
        name:"cr7",
        value:20,
        club:"alnazr"
    }
]
var names=player.find((element) => {
    if(element.value===50)
    {
      return element
    }
    
   //find will stop if it found something
});
console.log(names)

console.log("******************************")
console.log("******************************")

var names=player.filter((element) => {
    if(element.value===50)
    {
      return element
    }
    
   //filter will return  founded things as array
});
console.log(names)
console.log("******************************")
console.log("****************************")



var names=player.find((element) => {
    

      return element.name==="cr7"

});
console.log(names)

console.log("******************************")
console.log("******************************")


var names=player.filter((element,index) => {
    
    {
      return index>0
    }
    
   //filter will return  founded things as array
});
console.log(names)
console.log(player)