function formatGrade(input){
    if(input < 3){
        console.log(`Fail (2)`);
    } else if( input >= 3 && input < 3.5){
        console.log(`Poor (${input.toFixed(2)})`)
    } else if( input >= 3.5 && input < 4.5){
        console.log(`Good (${input.toFixed(2)})`)
    } else if( input >= 4.5 && input < 5.5){
        console.log(`Very good (${input.toFixed(2)})`)
    } else {
        console.log(`Excellent (${input.toFixed(2)})`)
    }
}
function mathpwr(num1,num2){
    console.log(Math.pow(num1,num2))
}
function repeat(input,num){
    let str = input;

    for(let i = 1; i < num; i++){
        str += input;
    }

    console.log(str)
}
function order(input, quantity) {
    let price = 0;

    if(input === "coffee"){
        price = 1.5;
    } else if(input === "water"){
        price = 1;
    } else if(input === "coke"){
        price = 1.4;
    } else if(input === "snacks"){
        price = 2;
    }

    let total = price * quantity;
    console.log(total.toFixed(2));
}
function order(a,b,input) {
    if (input === "multiply") {
        console.log(a * b)
    } else if (input === "divide") {
        console.log(a / b)
    } else if (input === "add") {
        console.log(a + b)
    } else {
        console.log(a - b)
    }
}
function negative(a,b,c){
    let flag = false;
    let sum = a*b*c
    
    if(sum < 0){
      console.log("Negative");
    } else {
      console.log("Positive");
    }
}