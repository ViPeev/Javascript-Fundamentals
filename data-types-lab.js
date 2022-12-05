function echo(input) {
    let print = input;
    if (typeof print === "string" || typeof print === "number") {
        console.log(typeof print);
        console.log(print);
    } else {
        console.log(typeof print);
        console.log(`Parameter is not suitable for printing`)
    }
}

function concatNames(firstName, lastName, delimiter) {
    let str = firstName.concat(delimiter, lastName);
    console.log(str)
}

function rightPlace(string1, char, string2) {
    let str = string1.replace("_", char);
    let output = str === string2 ? "Matched" : "Not Matched";
    console.log(output)
}

function integerOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let check = Number.isInteger(sum);
    let output = check ? `${sum} - Integer` : `${sum} - Float`
    console.log(output)
}

function amazing(input){
    let sum = 0;
    let num = input.toString();
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes(`9`);
    console.log(result ? `${num} Amazing? True`:`${num} Amazing? False`)
}

function gramophone(band,album,song){
    let songSeconds = (album.length * band.length) * song.length / 2 ;
    let rotations = songSeconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}

function reading(pages,pagesPerHour,days){
    let hoursPerDay = pages/pagesPerHour/days;
    console.log(hoursPerDay)
}

function centuriesToMinutes(centuries){
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

function specialNum(num){
    let endNum = Number(num);

    for(let i = 1; i <= endNum; i++){
        let str= i.toString();
        let flag = `False`;
        let sum = 0;
        for(let j = 0; j < str.length; j++){
            sum += Number(str[j]);
        }

        if(sum === 5 || sum === 7 || sum === 11){
            flag = `True`;
        }
        console.log(`${i} -> ${flag}`)
    }
}

function latin(input) {
    let endNum = Number(input);
    let str = "";

    for(let i = 0; i < endNum; i++){
        for(let j = 0; j < endNum; j++){
            for(let n = 0; n < endNum; n++){
                str += `${String.fromCharCode(i+97,j+97,n+97)}\n`;
            }
        }
    }
    console.log(str)
}