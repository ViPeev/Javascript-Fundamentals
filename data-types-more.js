function digitsWithWords(input) {
    if (input === "zero") {
        console.log(0);
    } else if (input === "one") {
        console.log(1);
    } else if (input === "two") {
        console.log(2);
    } else if (input === "three") {
        console.log(3);
    } else if (input === "four") {
        console.log(4);
    } else if (input === "five") {
        console.log(5);
    } else if (input === "six") {
        console.log(6);
    } else if (input === "seven") {
        console.log(7);
    } else if (input === "eight") {
        console.log(8);
    } else if (input === "nine") {
        console.log(9);
    }
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