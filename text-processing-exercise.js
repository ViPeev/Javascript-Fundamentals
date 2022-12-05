function reveal(words, sentence) {
    let wordsToReveal = words.split(", ");
    let sentenceArr = sentence.split(" ");
    let result = "";

    for (let elem of wordsToReveal) {
        for (let word of sentenceArr) {
            if (word.includes("*") && word.length === elem.length) {
                sentence = sentence.replace(word, elem)
            }
        }
    }
    console.log(sentence)
}
function modernTimes(input) {
    let sentence = input.split(" ");

    for (let word of sentence) {
        if (word.startsWith("#") && word.length > 1) {
            let flag = true;
            let wordLower = word.toLowerCase();
            for (let i = 1; i < wordLower.length; i++) {
                if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.split("#")[1])
            }
        }
    }
}
function extract(input) {
    let extracted = input.split("\\");
    let fileName = extracted[extracted.length - 1].split(".");
    extension = fileName[fileName.length - 1];
    fileName.pop()
    fileName = fileName.join(".");
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}
function solve(searchedWord, sentence) {
    let words = sentence.split(" ");

    for (let word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}
function replace(input) {
    let index = 1;
    let end = input.length;
    let text = input[0];

    while (index < end) {
        if (input[index] !== input[index - 1]) {
            text += input[index];
        }
        index++;
    }
    console.log(text)
}
function Splitter(input){
    let index = 1;
    let end = input.length;
    let arr = [];
    let cut = 0;
    while(index < end){
        if(input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90){
            arr.push(input.slice(cut,input.length));
            cut = index;
        }
        index++
    }
    arr.push(input.slice(cut,input.length));

    for(let i = 1; i < arr.length;i++){
        arr[i-1] = arr[i-1].replace(arr[i],"")
    }
    console.log(arr.join(", "))
}
function cutAndReverse(input){
    let reversed = input.split("").reverse().join("");
    let sliceOne = reversed.slice(reversed.length/2,reversed.length);
    let sliceTwo = reversed.slice(0,reversed.length/2)
    let arr = [sliceOne,sliceTwo];
    arr.forEach(elem => console.log(elem))
}
function hardWords(input) {
    let text = input[0]
    let missingWords = input[1];
    let underscores = [];

    for(let elem of missingWords){
        let underscore = "_";
        underscore = underscore.repeat(elem.length);
        underscores.push(underscore);
    }

    missingWords.sort((a,b) => b.length - a.length);
    underscores.sort((a,b) => b.length - a.length)

    for(let i = 0; i < underscores.length;i++){
        text = text.replace(underscores[i],missingWords[i]);
    }
    console.log(text)
}
function passwordGenerator(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2];
    let index = 0;
    let innerIndex = 0;

    let concatString = first.concat(second).split("");
    let vowelArr = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

    while (index < concatString.length) {
        if (vowelArr.includes(concatString[index])) {
            concatString[index] = third[innerIndex].toUpperCase();
            innerIndex++;
        }
        if(innerIndex === third.length){
            innerIndex = 0;
        }
        index++;
    }
    console.log(`Your generated password is ${concatString.reverse().join("")}`)
}
function mathGame(input) {
    let commands = input.split(" ");
    let totalSum = 0;
    let alphabet = ["start", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z']

    for (let command of commands) {
        if (command) {
            let letterOne = command[0];
            let letterTwo = command[command.length - 1];
            let num = Number(command.replace(letterOne, "").replace(letterTwo, ""));
            let position = 0;
            if (letterOne.charCodeAt(0) >= 65 && letterOne.charCodeAt(0) <= 90) {
                position = alphabet.indexOf(letterOne);
                num /= position;
            } else {
                position = alphabet.indexOf(letterOne.toUpperCase());
                num *= position;
            }
            if (letterTwo.charCodeAt(0) >= 65 && letterTwo.charCodeAt(0) <= 90) {
                position = alphabet.indexOf(letterTwo);
                num -= position;
            } else {
                position = alphabet.indexOf(letterTwo.toUpperCase());
                num += position;
            }
            totalSum += num;
        }
    }
    console.log(totalSum.toFixed(2))
}

