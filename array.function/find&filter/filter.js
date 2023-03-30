const fruits = ['kiwi','mango','apple','pear'];
fruits.filter(element => {
    console.log(element)
});
////////////////////////
fruits.filter(element => {
    console.log(element==fruits[1])
});

////////////////////////////
num=[1,2,3,4,5,6,5]
a=num.filter(element => {
    if(element<3)
    {
        console.log(element)
    }
    return element%2===0 //we cannot mul or / ,+,- in return
    
});

console.log(a)