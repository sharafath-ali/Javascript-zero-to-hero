var a=[2,3,5,6]
a.forEach(element => {
    console.log(element)
})
var player=[
            {
                name:"sharafath",
                value:50,
                club:"BARCA"
            },
            {
                name:"ramos",
                value:60,
                club:"PSG"
            },
            {
                name:"cr7",
                value:20,
                club:"al nazr"
            }
]
let sum=0;
player.forEach((element,index )=> {
    console.log("*******************")  
    console.log(element.club,"will pay",element.value  ,"M  to",element.name,"as salary")
    //console.log(index)
    sum=sum+element.value
});
console.log("sum of salary =",sum)


console.log('///////coursera/////////')//////////////////////////////////////////////


const fruits = ['kiwi','mango','apple','pear'];
fruits.forEach((element,index)=> {
    console.log(index,"th item=", '"',element,'"')
});