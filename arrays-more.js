function print(input){
    let step = Number(input[input.length - 1]);
    input.pop();
    let arr = [];

    for(let i = 0; i < input.length; i+= step){
        arr.push(input[i]);
    }

    console.log(...arr);
}
function addRemove(input){
    let sum = [];
    let initial = 1;

    for(let i = 0; i < input.length; i++){
        if(input[i] === "add"){
            sum.push(initial)
        } else {
            sum.pop();
        }
        initial++;
    }

    if(sum.length === 0){
        console.log("Empty")
    } else {
        console.log(...sum);
    }
}
function rotate(input){
    let rotateIndex = Number(input[input.length-1]);
    input.pop();

    for(let i = 1; i <= rotateIndex;i++){
        input.unshift(input[input.length-1]);
        input.pop();
    }

    console.log(...input);
}
function nonDecSubset(input) {
    let arr = input;
    let max = Number(input[0]);

    let result = arr.filter((num) => {
        if (num >= max) {
            max = num;
            return true;
        }
        return false;
    });
    console.log(...result);
}
function steamAcc(input) {
    let games = input[0].split(" ");
    input.shift();

    for (let i = 0; i < input.length; i++) {
        if(input[i] === "Play"){
            break;
        }
        let actions = input[i].split(" ");
        if (actions[0] === "Install") {
            if (!games.includes(actions[1])) {
                games.push(actions[1])
            }
        } else if (actions[0] === "Uninstall") {
            if (games.includes(actions[1])) {
                let index = games.indexOf(actions[1]);
                games.splice(index, 1);
            }
        } else if (actions[0] === "Update") {
            if (games.includes(actions[1])) {
                let index = games.indexOf(actions[1]);
                games.splice(index, 1);
                games.push(actions[1]);
            }
        } else if (actions[0] === "Expansion") {
            let expansion = actions[1].split("-");
            if (games.includes(expansion[0])) {
            let index = games.indexOf(expansion[0]);
            games.splice(index + 1, 0, `${expansion[0]}:${expansion[1]}`);
            }
        }
    }
    console.log(...games)
}
function matrix(input) {
    let isMagic = true;
    let startingValue = 0;
    
    for(let i = 0; i < input[0].length;i++){
        startingValue += Number(input[0][i]);
    }

    for (let i = 0; i < input.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            rowSum += input[i][j];
        }

        let columnSum = 0;
        for (let ii = 0; ii < input.length; ii++) {
            columnSum += input[ii][i];
        }

        if (rowSum !== startingValue || columnSum !== startingValue) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}
function matrix(n,g) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }
    result.forEach((el) => console.log(...el))
}
function diagonal(input) {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let newElem = input[i].split(" ");
        arr.push(newElem);
    }

    arr = arr.map((el) => el.map(Number))
    let sum1 = 0;
    for (let i = 0; i < arr[0].length;) {
        for (let j = 0; j < arr.length; j++) {
            sum1 += arr[j][i];
            i++
        }
    }
    let sum2 = 0;
    for (let i = 0; i < arr[0].length;) {
        for (let j = arr.length - 1; j >= 0; j--) {
            sum2 += arr[j][i];
            i++
        }
    }
    if (sum1 === sum2) {
        let start = 0;
        let end = arr[0].length -1;
        for(let i = 0; i < arr.length;i++){
            for(let j = 0; j < arr[i].length;j++){
                if(j !== start && j !== end){
                    arr[i][j] = sum1;
                }
            }
            start++;
            end--;
        }
        arr.forEach((el) => console.log(...el))
    } else {
        arr.forEach((el) => console.log(...el))
    }
}
function orbit(input){
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
