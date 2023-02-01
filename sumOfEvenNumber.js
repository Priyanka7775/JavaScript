const num=[23,56,45,67,34,44,67,65,12,14,18,82,84,88,72];

sumOfEvenNumberUsingFor();
sumOfEvenNumberUsingForOf();
sumOfOddNumberUsingFor();
sumOfOddNumberUsingForOf();

function sumOfEvenNumberUsingFor(){
    let sum=0;
    let val=0;
    for(i=0; i<num.length; i++){
        val =num[i];
        if(val%2==0){
            sum=sum+val;
        }
    }
    console.log("Using For");
    console.log(`sum of even number is ${sum}`);
}

function sumOfEvenNumberUsingForOf(){
    let sum=0;
    for(const val of num){
        if(val%2==0){
            sum+=val;
        }
    }
    console.log("Using For of");
    console.log(`sum of even number is ${sum}`);
}

function sumOfOddNumberUsingFor(){
    let sum=0;
    let val=0;
    for(i=0; i<num.length; i++){
        val =num[i];
        if(val%2!=0){
            sum=sum+val;
        }
    }
    console.log("Using For");
    console.log(`sum of odd number is ${sum}`);
}

function sumOfOddNumberUsingForOf(){
    let sum=0;
    for(const val of num){
        if(val%2!=0){
            sum+=val;
        }
    }
    console.log("Using For of");
    console.log(`sum of odd number is ${sum}`);
}

