function solve(arr){
    let pattern = /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
 
    arr = arr.trim().split(/\s*,\s*/);
    for (let line of arr){
        let match = pattern.exec(line);
 
        if (match){
            if (match.groups.match.length >= 6 && match.groups.match.length <= 9){
                console.log(`ticket "${line}" - ${match.groups.match.length}${match.groups.ch}`)
            } else if (match.groups.match.length == 10){
                console.log(`ticket "${line}" - ${match.groups.match.length}${match.groups.ch} Jackpot!`)                                
            }          
        } else if (line.length !== 20){
            console.log('invalid ticket')
        } else {
            console.log(`ticket "${line}" - no match`)
        }
    }
}
function rageQuit(input){
    let pattern = /(?<str>[^\d]+)(?<num>\d+)/gm;
    let uniqueCount = [];
    let valid;
    let print = "";

    
    while((valid = pattern.exec(input)) !== null){
        let strings = valid.groups["str"];
        let quantity = valid.groups["num"];
      	if(quantity > 0){
        let counter = strings.toUpperCase().split("");
        uniqueCount.push(counter);
        let message = strings.repeat(quantity).toUpperCase();
        print += message;
        }
    }
    uniqueCount = uniqueCount.flat();
    uniqueCount = new Set(uniqueCount);
    uniqueCount = Array.from(uniqueCount);
    console.log(`Unique symbols used: ${uniqueCount.length}`);
    console.log(print.trim());
}
function post(params) {
    params = params.join('');
    let [partOne, partTwo, parthThree] = params.split('|');
    let regExOne = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g
    let regExTwo = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g
    let capitalL = regExOne.exec(partOne);
    capitalL = capitalL[1].split('');
    capitalL.shift();
    capitalL.pop();
    let lenAndLetters = partTwo.match(regExTwo);
    let myMap = new Map();
    for (let letter of capitalL) {
        myMap.set(letter, 0)
    }
    let unique = [];
    for (let combination of lenAndLetters) {
        let [asciiLetters, length] = combination.split(':');
        asciiLetters = String.fromCharCode(asciiLetters);
        if (!unique.includes(asciiLetters)) {
            unique.push(asciiLetters);
        } else {
            continue;
        }
        length = Number(length) + 1;
        if (myMap.has(asciiLetters)) {
            myMap.set(asciiLetters, length);
        }
    }
    parthThree = parthThree.split(' ');
    for (let letter of capitalL) {
        for (let word of parthThree) {
            if (letter === word[0] && word.length === myMap.get(letter)) {
                console.log(word);
            }
        }
    }
}
function santa(input) {
    let children = [];
    let key = Number(input[0]);
    let decrypted = [];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "end") {
            break;
        }
        let str = "";
        for (let letter of input[i]) {
            let ascii = letter.charCodeAt(0);
            ascii -= key;
            str += String.fromCharCode(ascii);
        }
        decrypted.push(str);
    }
    let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*\!(?<behav>[GN])\!/;

    for (let message of decrypted) {
        let valid = pattern.exec(message);
        if (valid !== null) {
            let behaviour = valid.groups["behav"];
            let name = valid.groups["name"];
            if (behaviour === "G") {
                children.push(name);
            }
        }
    }
    children.forEach(child => console.log(child));
}