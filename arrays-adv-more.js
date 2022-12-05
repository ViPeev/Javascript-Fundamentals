function equalNeighbours(input){
    let compare = 0;
    for(let i = 0; i < input.length-1;i++){
        for(let j = 0; j < input[i].length;j++){
            if(input[i][j] === input[i+1][j]){
                compare++;
            }
        }
    }
    for(let i = 0; i < input.length;i++){
        for(let j = 0; j < input[i].length-1;j++){
            if(input[i][j] === input[i][j+1]){
                compare++;
            }
        }
    }
    console.log(compare)
}
function bunnyKill(input) {
    let bombIndex = input.pop().split(" ");
    let totalDamage = 0;
    let kills = 0;

    bombIndex = bombIndex.map(elem => {
        return elem.split(",").map(Number);
    });

    input = input.map(elem => {
        return elem.split(" ").map(Number);
    });

    for (let coords of bombIndex) {
        let row = coords[0];
        let bunny = coords[1];
        let damage = input[row][bunny];
        if(damage > 0){
            totalDamage += damage;
            kills++;
    
            let rowStart = row - 1;
            let rowEnd = row + 1;
            let bunnyStart = bunny - 1;
            let bunnyEnd = bunny + 1;
    
            if (rowStart < 0) {
                rowStart = 0;
            }
    
            if (rowEnd >= input.length) {
                rowEnd = input.length - 1;
            }
    
            if (bunnyStart < 0) {
                bunnyStart = 0;
            }
    
            if (bunnyEnd >= input[row].length) {
                bunnyEnd = input[row].length - 1;
            }
    
            for (let i = rowStart; i <= rowEnd; i++) {
                for (let j = bunnyStart; j <= bunnyEnd; j++) {
                    input[i][j] = input[i][j] - damage;
                    if (input[i][j] < 0) {
                        input[i][j] = 0
                    }
                }
            }
        }
    }
    input = input.flat();

    for(let bunny of input){
        if(bunny > 0){
            kills++;
            totalDamage += bunny;
        }
    }
    console.log(totalDamage);
    console.log(kills);
}
function airPollution(blocks, forces) {
    let pollutedAreas = [];
    blocks = blocks.map(row => {
        return row.split(" ").map(Number);
    });

    for (let command of forces) {
        let cmd = command.split(" ")[0];
        let value = Number(command.split(" ")[1]);

        if (cmd === "breeze") {
            for (let i = 0; i < blocks[value].length; i++) {
                blocks[value][i] = blocks[value][i] - 15;
                if (blocks[value][i] < 0) {
                    blocks[value][i] = 0;
                }
            }
        } else if (cmd === "gale") {
            for (let i = 0; i < blocks.length; i++) {
                blocks[i][value] = blocks[i][value] - 20;
                if (blocks[i][value] < 0) {
                    blocks[i][value] = 0;
                }
            }
        } else if (cmd === "smog") {
            for (let i = 0; i < blocks.length; i++) {
                for (let j = 0; j < blocks[i].length; j++) {
                    blocks[i][j] = blocks[i][j] + value;
                }
            }
        }
    }

    for(let i = 0; i < blocks.length;i++){
        for(let j = 0; j < blocks[i].length;j++){
            if(blocks[i][j] >= 50){
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }
    if(pollutedAreas.length === 0){
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    }
}
function janRotation(input){
    let numArr = [];

    for(let elem of input){
        if(isNaN(Number(elem))){
            if(numArr.length < 2){
                return console.log(`Error: not enough operands!`);
            }
            let operator = elem;
            let result = 0;
            let num2 = numArr.pop();
            let num1 = numArr.pop();
            if(operator === "+"){
                result = num1 + num2;
            } else if(operator === "-"){
                result = num1 - num2;
            } else if(operator === "*"){
                result = num1 * num2;
            } else if(operator === "/"){
                result = num1 / num2;
            }
            numArr.push(result);
        } else {
            numArr.push(elem);
        }
    }

    if(numArr.length > 1){
        console.log("Error: too many operands!");
    } else {
        console.log(...numArr)
    }
}
function rosettaStone(arr) {
    let rowsTemplate = Number(arr.shift());
    let templateMatrix = [];
    let templateCol = 0;

    for (let i = 0; i < rowsTemplate; i++) {
        templateMatrix.push(arr.shift().split(' ').map(Number));
    }

    templateCol += templateMatrix[0].length;
    let messageMatrix = [];
    for (let i = 0; i < arr.length; i++) {
        messageMatrix.push(arr[i].split(' ').map(Number));
    }

    for (let row = 0; row < messageMatrix.length; row++) {
        for (let col = 0; col < messageMatrix[row].length; col++) {
            messageMatrix[row][col] += templateMatrix[row % rowsTemplate][col % templateCol];
        }
    }

    for (let i = 0; i < messageMatrix.length; i++) {
        for (let j = 0; j < messageMatrix[i].length; j++) {
            let num = messageMatrix[i][j] % 27;
            if (num != 0) {
                messageMatrix[i][j] = String.fromCharCode(num + 64);
            } else {
                messageMatrix[i][j] = ' ';
            }
        }
    }

    console.log(messageMatrix.flat().join(""))
}