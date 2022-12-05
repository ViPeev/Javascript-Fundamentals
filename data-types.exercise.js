function sumDigits(input){
    let sum = 0;
    let num = String(input).split("").forEach((char) => {
        sum += Number(char);
    })

    console.log(sum);
}

function primeChecker(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime)
}

function cone(param1,param2){
    let radius = Number(param1);
    let height = Number(param2)
    let volume = 1/3 * Math.PI * (radius**2) * height;
    let s = Math.sqrt(radius**2 + height**2);
    let B = Math.PI * radius * s;
    let S = Math.PI * (radius**2);
    let S1 = B+S
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${S1.toFixed(4)}`)
}

function biggest(one,two,three){
    let arr = [Number(one),Number(two),Number(three)];
    console.log(Math.max(...arr));
}

function binaryToDecimal(input){
    console.log(parseInt(input,2));
}

function chessBoard(input) {
    let dimensions = Number(input);

    let str = `<div class="chessboard">\n`;
    let counter = 1;
    for (let i = 1; i <= dimensions; i++) {
        str += `  <div>\n`;
        for (let j = 1; j <= dimensions; j++) {
            let color = "";
            if(dimensions % 2 === 0 && i % 2 === 0){
                if (counter % 2 > 0) {
                    color = "white";
                } else {
                    color = "black";
                }
            } else {
                if (counter % 2 > 0) {
                    color = "black";
                } else {
                    color = "white";
                }
            }

            str += `    <span class="${color}"></span>\n`
            counter++;
        }
        str += `  </div>\n`
    }
    str += `</div>`;
    console.log(str)
}

function triangleArea(param1,param2,param3){
    let side1 = Number(param1), side2 = Number(param2), side3 = Number(param3);
    let s = (side1+side2+side3)/2
    let area = Math.sqrt(s*(s - side1)*(s - side2)*(s - side3));
    console.log(area)
}


// function charsToString(char1,char2,char3){
//     console.log(char1.concat(char2,char3));
// }
// function townInfo(town,pop,area){
//     console.log(`Town ${town} has population of ${pop} and area ${area} square km.`);
// }
// function convertMtoKm(input){
//     console.log((input/1000).toFixed(2));
// }
// function poundsToDollars(input){
//     console.log((input*1.31).toFixed(3));
// }
// function reversedChars(char1,char2,char3){
//     console.log(`${char3} ${char2} ${char1}`);
// }
// function lowerUpper(input){
//     if(input === input.toUpperCase()){
//         console.log("upper-case");
//     } else {
//         console.log("lower-case");
//     }
// }
// function calculator(num1,operator,num2){
//     let result = 0;

//     switch(operator){
//         case "+": result = num1 + num2;
//         break;
//         case "-": result = num1 - num2;
//         break;
//         case "/": result = num1 / num2;
//         break;
//         case "*": result = num1 * num2;
//         break;
//     }
//     console.log(result.toFixed(2));
// }
// function gladiatorExpenses(param1,param2,param3,param4,param5){
//     let lostFights = param1;
//     let helmet = param2;
//     let sword = param3;
//     let shield = param4;
//     let armor = param5;
//     let expenses = 0;

//     for(let i = 1; i <= lostFights; i++){
//         if(i % 12 === 0){
//             expenses += helmet + sword + shield + armor;
//         } else if( i % 6 === 0){
//             expenses += helmet + sword + shield;
//         } else if( i % 3 === 0){
//             expenses += sword;
//         } else if( i % 2 === 0){
//             expenses += helmet;
//         }
//     }
//     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
// }
// function spiceMustFlow(input) {
//     let startingYield = Number(input);
//     let spice = 0;
//     let day = 0;
//     let eaten = 0;

//     while(startingYield >= 100){

//         day++;
//         spice += startingYield;
//         spice -= 26;

//         if(spice < 0){
//             spice = 0;
//         }
        
//         startingYield -= 10;

//     }

//     spice -=26;
//     if(spice < 0){
//         spice = 0;
//     }

//     console.log(day);
//     console.log(spice);
// }