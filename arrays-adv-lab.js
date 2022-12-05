function sum(input) {
    let sum = Number(input[0]) + Number(input[input.length - 1]);
    console.log(sum);
}
function negativeOrPositiveNumbers(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i])
        }
    }
    for(let i = 0; i < newArr.length;i++){
        console.log(newArr[i])
    }
}
function firstLast(num){
    let index = Number(num[0]);
    num.shift();
    let start = [];
    let end = [];
    for(let i = 0; i < index; i++){
        start.push(num[i]);
    }
    for(let i = num.length - index; i < num.length; i++){
        end.push(num[i]);
    }

    console.log(...start);
    console.log(...end)
}
function lastK(n,k){
    let sumArr = [1];

    for(let i = 1; i < n;i++){
        let num = 0;
        for(let j = i; j >= i - k +1;j--){
            num += sumArr[j-1];
            if(j === 1){
                break;
            }
        }
        sumArr.push(num);
    }
    console.log(...sumArr)
}
function process(input){
    let arr = [];

    for(let i = 0; i < input.length;i++){
        if(i % 2 > 0){
            arr.push(Number(input[i])*2);
        }
    }

    console.log(...arr.reverse())
}
function smallestTwo(input){
    let arr = []
    for(let i = 0; i < 2;i++){
        let min1 = Math.min(...input);
        arr.push(min1);
        let index= input.indexOf(min1);
        input.splice(index,1);
    }
    console.log(...arr)
}
function productList(input) {
    input.sort();
    let index = 1;
    for(let i = 0; i < input.length;i++){
        console.log(`${index}.${input[i]}`);
        index++
    }
}
function solve(input) {
    let arr = input.shift().split(" ").map(Number);
    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(" ")
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arr.push(firstNum)
                break;
            case "Remove":
                arr = arr.filter(el => el !== firstNum)
                break;
            case "RemoveAt":
                arr.splice(firstNum,1)
                break;
            case "Insert":
                arr.splice(secondNum, 0, firstNum)
                break;
        }
    }
    console.log(...arr)
}