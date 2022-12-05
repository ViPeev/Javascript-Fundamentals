function sum(myArr){
    let result = Number(myArr[0]) + Number(myArr[myArr.length-1]);
    console.log(result);
}
function day(input){
    let day = Number(input) -1;
    let dayArray = ["Monday",'Tuesday',"Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(day < 0 || day > 6){
        console.log("Invalid day!")
    } else {
        console.log(dayArray[day]);
    }
}
function reverse(param1,param2) {
    let position = Number(param1);
    let arr = param2;

    let newArr = arr.slice(0,position);
    newArr.reverse();
    console.log(...newArr)
}
function reverse(param1) {
    let arr = param1.reverse();
    console.log(...arr)
}
function sumEven(param1){
    let arr = param1;
    let evenSum = 0;
    for(let i = 0; i < arr.length;i++){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i]); 
        }
    }
    console.log(evenSum)
}
function sumEven(param1){
    let arr = param1;
    let evenSum = 0;
    let oddSum = 0
    for(let i = 0; i < arr.length;i++){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i]); 
        } else {
            oddSum += Number(arr[i]); 
        }
    }
    console.log(evenSum-oddSum)
}
function identical(param1,param2) {
    let equal = true;
    let sum = 0;

    for(let i = 0; i < param1.length;i++){
        if(Number(param1[i]) !== Number(param2[i])){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            break;
        }
        sum += Number(param1[i]);

    }
    if(equal){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
function condense(arr) {
    if (arr.length === 1) {
        return console.log(...arr)
    }

    for (let j = 0; arr.length > 1; j++) {
        let condensed = []
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = condensed;
    }

    console.log(...arr)
}
