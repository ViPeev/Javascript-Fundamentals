function stringValue(input){
    let str = input[0];
    let max = 0, min = 0;
    letterCase = (input[1] === "UPPERCASE") ? max = 90 : max = 122;
    letterCase = (input[1] === "UPPERCASE") ? min = 65 : min = 97;
    let totalSum = 0;

    for(let letter of str){
        if(letter.charCodeAt(0) >= min && letter.charCodeAt(0) <= max){
            totalSum += letter.charCodeAt(0);
        }
    }
    console.log(`The total sum is: ${totalSum}`);
}
function serializeString(input){
    let str = input[0]
    let map = new Map();

    for( let i = 0; i < str.length;i++){
        if(!map.has(str[i])){
            map.set(str[i],[i]);
        } else {
            let prevIndexes = map.get(str[i]);
            prevIndexes.push(i);
            map.set(str[i],prevIndexes);
        }
    }
    for(let [key,value] of map.entries()){
        console.log(`${key}:${value.join("/")}`)
    }
}
function deserialize(input){
    let indexArr = [];
    let str = "";
    let map = new Map();

    for(let elem of input){
        if(elem === "end"){
            break;
        }
        let letter = elem.split(":")[0];
        let indexes = elem.split(":")[1].split("/");
        indexArr.push(indexes);
        for(let currIndex of indexes){
            map.set(currIndex,letter);
        }
    }

    indexArr = indexArr.flat().sort((a,b) => a-b);
    for(let index of indexArr){
        str += map.get(index);
    }
    console.log(str)
}
function asciiSum(input) {
    let text = input[2];
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let sum = 0;
    if (start > end) {
        end = input[0].charCodeAt(0);
        start = input[1].charCodeAt(0);
    }

    for (let letter of text) {
        if (letter.charCodeAt(0) > start && letter.charCodeAt(0) < end) {
            sum += letter.charCodeAt(0);
        }
    }
    console.log(sum)
}
function treasureCords(input) {
    let keys = input[0].split(" ");
    input.shift();
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "find") {
            break;
        }
        coordinates = input[i].split("")
        let index = 0;
        let end = coordinates.length;
        let keyIndex = 0;
        let str = ""
        while (index < end) {
            let asciiCode = coordinates[index].charCodeAt(0);
            asciiCode -= Number(keys[keyIndex]);
            str += String.fromCharCode(asciiCode);
            index++;
            keyIndex++;
            if (keyIndex == keys.length) {
                keyIndex = 0;
            }
        }
        let type = str.split("&")[1];
        let place = str.split("<")[1].split(">")[0];
        map.set(place,type);
    }
    for(let [key,value] of map){
        console.log(`Found ${value} at ${key}`);
    }
}
function melrahShake(input) {
    let shake = input[0]
    let pattern = input[1];

    while (shake.includes(pattern) && pattern.length > 0) {
        let first = shake.indexOf(pattern);
        let last = shake.lastIndexOf(pattern);

        let shakeArr = shake.split("");
        let patternArr = pattern.split("");
        shakeArr.splice(first,pattern.length);
        shakeArr.splice(last - pattern.length,pattern.length);
        shake = shakeArr.join("");
        patternArr.splice(Math.floor(pattern.length/2),1);
        pattern = patternArr.join("");
        console.log("Shaked it.")
    }
    console.log("No shake.");
    console.log(shake);
}
