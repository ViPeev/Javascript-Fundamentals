function smallestNumber(num1,num2,num3){
    console.log(Math.min(num1,num2,num3));
}
function addAndSubtract(num1,num2,num3){
    console.log(num1+num2-num3)
}
function charsInRange(a,b){
    let arr = [];
    let start = a.charCodeAt();
    let end = b.charCodeAt();

    if(start > end){
        start = b.charCodeAt();
        end = a.charCodeAt();
    }

    for(let i = start + 1; i < end;i++){
        arr.push(String.fromCharCode(i));
    }

    console.log(arr.join(" "));
}
function oddAndEvenSum(input){
    let odd = 0;
    let even = 0;
    input = String(input);
    for(let char of input){
        if(Number(char) % 2 === 0){
            even += Number(char);
        } else {
            odd += Number(char);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
function palindrome(input){
    for(let elem of input){
        let current = String(elem);
        let reversed = String(elem).split("").reverse().join("");
        if(current === reversed){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
function passValidator(input) {
    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let digitCounter = 0;

    if (input.length < 6 || input.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        flag1 = false;
    }

    for (let char of input) {
        if ((char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) &&
            (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) &&
            (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57)) {
            flag2 = false;
            console.log("Password must consist only of letters and digits");
            break;
        }
    }

    for (let digit of input) {
        flag3 = false;
        if (digit.charCodeAt(0) >= 48 && digit.charCodeAt(0) <= 57) {
            digitCounter++;
        }
        if (digitCounter >= 2) {
            flag3 = true;
            break;
        }
    }

    if (!flag3) {
        console.log("Password must have at least 2 digits");
    }

    if(flag1 && flag2 && flag3){
        console.log("Password is valid");
    }
}
function nxnMatrix(input){
    input = Number(input);
    for(let i = 0; i < input;i++){
        let text = "";
        for(let j = 0; j < input;j++){
            text += `${input} `
        }
        console.log(text);
    }
}
function perfectNum(input){
    let sum = 0;
    for(let i = 1; i < input; i++){
        if(input/i === Math.floor(input/i)){
            sum += i;
        }
    }
    if(sum === input){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
function loadingBar(input){
    let bar = "[..........]";

    for(let i = 0; i <= input; i+=10){
        if(i > 0){
            bar = bar.replace(".","%");
        }
    }

    if(input < 100){
        console.log(`${input}% ${bar}`);
        console.log(`Still loading...`);
    } else {
        console.log(`${input}$ Complete!`);
        console.log(`${bar}`);
    }
}
function factorialDivision(num1, num2) {
    function calculator(number) {
        let result = 1;
        while (number != 1) {
            result *= number;
            number -=1;
        }
        return result;
    }
    console.log(
        (calculator(num1)/calculator(num2)).toFixed(2)
    );
}