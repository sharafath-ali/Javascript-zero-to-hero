var s=10
var e=8
console.log(`${s}+${e}=13`)
console.log(`${s>e}`&& `${s<e}`)

const colors = ['red','orange','yellow']
for (var color=0 ;colors[ color];color++) {
    console.log(colors[color]);
    console.log(color);
}

var colorss={
    color:'red',
    brand:'nike'
}
console.log(Object.keys(colorss));
d=Object.values(colorss)
console.log(d)
d=Object.entries(colorss)
console.log(d)

//looping
for( index1 of Object.keys(colorss) ) {
    console.log(index1, ":", colorss[index1])
}