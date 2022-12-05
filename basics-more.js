function numSort(num1,num2,num3){
    let sortArr = [num1,num2,num3].map(Number).sort((a,b) => b-a);
    sortArr.forEach((elem) => console.log(elem));
}

function digit(input){
    let num = String(input);
    let lastDigit = num.charAt(num.length - 1)
    if(lastDigit === 0){
        console.log("zero");
    } else if(lastDigit === 1){
        console.log("one");
    } else if(lastDigit === 2){
        console.log("two");
    } else if(lastDigit === 3){
        console.log("three");
    } else if(lastDigit === 4){
        console.log("four");
    } else if(lastDigit === 5){
        console.log("five");
    } else if(lastDigit === 6){
        console.log("six");
    } else if(lastDigit === 7){
        console.log("seven");
    } else if(lastDigit === 8){
        console.log("eight");
    } else {
        console.log("nine");
    }
}

function nextDay(year,month,day){
    let date = new Date(year,month-1,day+1);
    let str = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    console.log(str);
}

function reversed(input){
    let myStr = input;
    let reversedStr = myStr.split("").reverse().join("");
    console.log(reversedStr)
}

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    console.log(Math.sqrt(x * x + y * y));
}

