function ages(age){
    let type = ""
    if(age < 3 && age >= 0){
        type = "baby";
    } else if(age < 14 && age >= 3){
        type = "child";
    } else if(age < 20 && age >= 14){
        type = "teenager";
    } else if(age < 66 && age >= 20){
        type = "adult";
    } else if(age >= 66){
        type = "elder";
    } else {
        type = "out of bounds";
    }
    console.log(type);
}

function rounding(num,rounder){
    if(rounder > 15){
        rounder = 15;
    }
    console.log(parseFloat(num.toFixed(rounder)))
}

function divisible(num) {
    if (num % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (num % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (num % 6 === 0) {
        console.log(`The number is divisible by 6`);
    } else if (num % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (num % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`)
    }
}

function vacation(amount,type,day){
    let total = 0;

    if(type === "Students"){
        if(day === "Friday"){
            price = 8.45;
        } else if(day === "Saturday"){
            price = 9.8;
        } else {
            price = 10.46;
        }
        total = price * amount;

        if(amount >= 30){
            total *= 0.85;
        }
    } else if(type === "Business"){
        if(day === "Friday"){
            price = 10.9;
        } else if(day === "Saturday"){
            price = 15.6;
        } else {
            price = 16;
        }

        if(amount >= 100){
            amount -= 10;
        }
        total = price * amount;
    } else {
        if(day === "Friday"){
            price = 15;
        } else if(day === "Saturday"){
            price = 20;
        } else {
            price = 22.5;
        }
        total = price * amount;
        if(amount >= 10 && amount <= 20){
            total *= 0.95;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

function leapYear(input){
    if((input % 4 === 0 && input % 100 > 0) || input % 400 === 0){
        console.log("yes");
    } else {
        console.log("no");
    }
}

function printAndSum(num1,num2){
    let sum = 0;
    let start = num1;
    let end = num2;
    let arr = [];

    if(num1 > num2){
        start = num2;
        end = num1;
    }

    for(let i = start; i <= end;i++){
        sum += i;
        arr.push(i);
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

function triangleOfNum(num){
    for(let i = 1; i <= num; i++){
        let text = "";
        for(let j = 1; j <= i;j++){
            text +=`${i} `;
        }
        console.log(text);
    }
}

function multiplicationTable(input){
    for(let i = 1; i <= 10;i++){
        let sum = input * i;
        console.log(`${input} X ${i} = ${sum}`);
    }
}

function login(input){
    let username = input[0];
    let correctPass = username.split("").reverse().join("");
    let tries = 0;
    input.shift();

    for(let passTry of input){
        if(passTry === correctPass){
            console.log(`User ${username} logged in.`);
        } else {
            tries++;
            if(tries === 4){
                return console.log(`User ${username} blocked!`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}

function pyramidOfDjoser(base, integer) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let step = 0;

    for (let i = base; i > 0; i -= 2) {
        step++;

        if (i === 1 || i === 2) {
            gold += Math.pow(i, 2) * integer;
            continue;
        }

        let floor = Math.pow(i, 2);
        let curMaterial = (2 * i + 2 * (i - 2))
        if (step % 5 > 0) {
            marble += curMaterial * integer;
            stone += (floor - curMaterial) * integer;
        } else {
            lapis += curMaterial * integer;
            stone += (floor - curMaterial) * integer;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * integer)}`);
}

function bitcoinMining(input){
    let money = 0;
    let day = 0;
    let coinPrice = 11949.16;
    let boughtCoins = 0;
    let firstDay;

    for(let i = 0; i < input.length;i++){
        day++;

        let goldPerDay = Number(input[i]);

        if(day % 3 === 0){
            goldPerDay *= 0.7;
        }

        money += goldPerDay * 67.51;

        if(money > coinPrice){
            if(boughtCoins === 0){
                firstDay = day;
            }
            boughtCoins += Math.floor(money/coinPrice);
            money -= Math.floor(money/coinPrice) * coinPrice;
        }
    }

    console.log(`Bought bitcoins: ${boughtCoins}`);
    if(boughtCoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}