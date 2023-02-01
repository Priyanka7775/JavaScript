let fruit=["apple","mango","strawberry","berries"];
console.log(fruit);

let size=fruit.length;
console.log("length of array" ,size);


console.log(fruit[2]);

fruit.push("orange");
console.log(fruit);

fruit.unshift("Watermelon")
console.log(fruit);

let sliceValue=fruit.slice(1,4)
console.log(sliceValue);

fruit.pop();
console.log(fruit);

fruit.shift();
console.log(fruit);

//object example

const car={make:"ford",model:"Explorer",color:"White",year:"2022"};
displayObjectProperties(car)

function displayObjectProperties(obj){
    console.log(`make:${obj.make}`)
    console.log(`model:${obj.model}`)
    console.log(`color:${obj.color}`)
    console.log(`year:${obj.year}`)

}