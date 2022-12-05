function phoneBook(input) {
    let mapArr = new Map();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        mapArr.set(command[0], command[1])
    }
    mapArr.forEach(function (value, key) {
        console.log(`${key} -> ${value}`);
    })
}
function phoneBook(input) {
    let mapArr = new Map();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        if(mapArr.has(command[0])){
            console.log(`Conflict on ${command[0]}!`)
        } else {
            mapArr.set(command[0], command[1])
            console.log(`Scheduled for ${command[0]}`);
        }
    }
    mapArr.forEach(function (value, key) {
        console.log(`${key} -> ${value}`);
    })
}
function phoneBook(input) {
    let mapArr = new Map();
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(":");
        mapArr.set(command[0], `${command[1]}`)
    }
    mapArr = Array.from(mapArr);
    mapArr.sort()
    mapArr = new Map(mapArr)
    mapArr.forEach(function (value, key) {
        console.log(`${key} -> ${value}`);
    })
}
function phoneBook(input) {
    let mapArr = new Map();
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let quantity = Number(command[1])
        if (mapArr.has(command[0])) {
            quantity += Number(mapArr.get(command[0]));
            mapArr.set(command[0], quantity)
        }
        mapArr.set(command[0], quantity)
    }

    mapArr.forEach(function (value, key) {
        console.log(`${key} -> ${value}`);
    })
}
function schoolGrades(input) {
    let grades = new Map();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let name = command.slice(0, 1);
        let currGrades = command.slice(1).map(Number);
        if (grades.has(...name)) {
            let prevGrades = grades.get(...name);
            prevGrades = prevGrades.concat(currGrades);
            grades.set(...name, prevGrades)
        } else {
            grades.set(...name, currGrades);
        }
    }

    for (let x of grades.entries()) {
        let gradesNum = x[1].length;
        let sum = x[1].reduce((a,b) => a+b,0)/gradesNum;
        grades.set(x[0],sum)
    }

    let gradesArr = Array.from(grades)
    gradesArr.sort();
    grades = new Map(gradesArr)
    grades.forEach((key,value) => console.log(`${value}: ${key.toFixed(2)}`))
}
function words(input){
    let arr = new Map();

    for(let i = 0; i < input.length;i++){
        let command = input[i].split(" ");
        for(let j = 0; j < command.length;j++){
            if(arr.has(command[j])){
                let currWord = arr.get(command[j]);
                currWord++;
                arr.set(command[j],currWord)
            } else {
                arr.set(command[j],1);
            }
        }
    }
    
    let sortedArr = Array.from(arr);
    sortedArr.sort((a,b) => b[1] - a[1]);
    arr = new Map(sortedArr);

    for(let [key,value] of arr.entries()){
        console.log(`${key} -> ${value} times`)
    }
}