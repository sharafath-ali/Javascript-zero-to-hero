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
var arr=player.reduce((total,item)=>{

    console.log(item.name,"=",item.value)
     return item
})
console.log(arr)

/////////////////////////////////////////////


var arr=player.reduce((total,item)=>{
     return 100
})
console.log(arr)

/////////////////////////////////////////////

var arr=player.reduce((total,item)=>{
     return item.value
})
console.log(arr)


//////////////////////////////////////////

var arr=player.reduce((total,item)=>{
    console.log("*****")
    total.push(item.name)
    return total;
},[])
console.log(player)
console.log(arr)