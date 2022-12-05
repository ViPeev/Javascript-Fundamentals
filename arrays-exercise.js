function addAndSubtract(input){
    let sum1 = input.reduce((a,b) => a+b,0);
    input = input.map(elem => {
        if(elem % 2 === 0){
            return elem + input.indexOf(elem);
        } else {
            return elem - input.indexOf(elem);
        }
    })
    let sum2 = input.reduce((a,b) => a+b,0);

    console.log(input);
    console.log(sum1);
    console.log(sum2);
}
function commonElements(input1,input2){
    let commonArr = [];

    for(let elem of input1){
        if(input2.includes(elem)){
            commonArr.push(elem);
        }
    }
    commonArr.forEach(elem => console.log(elem));
}
function mergeArray(input1, input2) {
    let thirdArr = [];

    for (let key in input1) {
        if (key % 2 === 0) {
            thirdArr.push(Number(input1[key]) + Number(input2[key]));
        } else {
            thirdArr.push(input1[key].concat(input2[key]));
        }
    }
    console.log(thirdArr.join(" - "));
}
function arrayRotation(input,rotate) {
    if(rotate > input.length){
        rotate %= input.length;
    }

    let splicer = input.splice(0,rotate);
    input.push(splicer);
    input = input.flat()
    console.log(...input)
}
function maxNumber(input){
    let maxArr = [];
    input = input.map(Number);

    while(input.length > 0){
        let current = input[0];
        input.shift();
        let checker = input.every(elem => {
            return elem < current;
        })
        if(checker){
            maxArr.push(current);
        }
    }
    console.log(...maxArr);
}
function equalSums(input){
    for(let i= 0; i < input.length;i++){
        let leftSum = 0;
        let rightSum = 0;
        
        for(let j = 0; j < i;j++){
            leftSum += input[j]
        }

        for(let j = i+1;j < input.length;j++){
            rightSum += input[j];
        }

        if(leftSum === rightSum){
            return console.log(i);
        }
    }

    if(input.length === 1){
        console.log("0");
    } else {
        console.log("no");
    }
}
function maxSequence(input){
    let str = [];
    let index = 0;
    let innerIndex = 0;
    while(index < input.length){
        let str2 = [];
        while(input[index] === input[innerIndex]){
            str2.push(input[innerIndex]);
            innerIndex++;
        }

        if(str.length < str2.length){
            str = str2;
        }
        index++;
    }

    console.log(...str);
}
function MagicSum(input,num){
    let sum = Number(num);
    let arr = [];

    for(let i = 0; i < input.length;i++){
        for(let j = i+1; j < input.length;j++){
            if(Number(input[i]) + Number(input[j]) === sum){
                arr.push(`${input[i]} ${input[j]}`);
            }
        }
    }

    arr.forEach(elem => console.log(elem));
}
function darkDungeon(input) {
    let health = 100;
    let coins = 0;
    let rooms = input[0];
    rooms = rooms.split("|");

    for (let i = 0; i < rooms.length; i++) {
        let level = rooms[i];
        level = level.split(" ");
        if (level[0] === "potion") {
            if (health < 100) {
                if(health + Number(level[1]) > 100){
                    console.log(`You healed for ${100 - health} hp.`)
                } else {
                    console.log(`You healed for ${Number(level[1])} hp.`)
                }
                health += Number(level[1]);
                if (health > 100) {
                    health = 100;
                } 
                console.log(`Current health: ${health} hp.`)
            }
        } else if(level[0] === "chest"){
            coins += Number(level[1]);
            console.log(`You found ${Number(level[1])} coins.`)
        } else {
            health -= Number(level[1]);
            if(health <= 0){
               return console.log(`You died! Killed by ${level[0]}.\nBest room: ${i+1}`)
            } else {
                console.log(`You slayed ${level[0]}.`)
            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)
}
function ladyBugs(input) {
    let n = Number(input.shift());
    let field = (new Array(n)).fill(0);

    let ladyBugIndexes = input.shift().split(" ");
    for (let index of ladyBugIndexes) {
        index = Number(index);
        if (index >= 0 && index < n) {
            field[index] = 1;
        }
    }

    for (let command of input) {
        let tokens = command.split(' ');
        let startingIndex = Number(tokens[0]);

        if (field[startingIndex] === 0 || startingIndex< 0 || startingIndex >= field.length) {
            continue;
        }

        let currentIndex = startingIndex;
        let direction = tokens[1];
        let offset = Number(tokens[2]);

        if (direction === 'left') {
            offset *= -1;
        }

        while (currentIndex >= 0 && currentIndex < n && field[currentIndex] == 1) {
            currentIndex += offset;
        }

        field[startingIndex] = 0;
        if (currentIndex >= 0 && currentIndex < n) {
            field[currentIndex] = 1;
        }
    }
    console.log(field.join(' '));
}