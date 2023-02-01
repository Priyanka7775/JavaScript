const age=["aman","arnav","priyanka","james","ramesh","suresh","alan"];
let count=0;
let ageOfPeople=age
                .map(a=>a.toUpperCase())
                .filter(a=>a.startsWith('A'))
                .reduce((count,a)=>{
                    return ++count;
                },count);
console.log(ageOfPeople)