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
//adding country to player
var countryadd=player.map(item=>{
    return{...item,
        country:"indian"
    }
 })
 console.log(countryadd)

///////////////////////////////////////

var newarr=player.map(item=>{
   console.log(item.name,"'s salary become twice so salary*2=",item.value*2)
   return item.value*2
})
console.log(newarr)
console.log(player)// if we use foreach instead of map

//////////////////////////////////////

player.forEach((item,index)=>{
    
    player[index]=item.value*2    // index is the only way a found to do it
})
console.log(player)  // player changed to  [100,100,40]


////////////////////////////////////


//adding country now

var countryadd=player.map(item=>{
    return{...item,
        country:"indian"
    }
 })
 console.log(countryadd)

 //////////////////////////////////////////
 var countryadd=countryadd.map(item=>{
    return{...item,
        networth:"200"
    }
 })
 console.log(countryadd)
