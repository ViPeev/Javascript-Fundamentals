function multiplyByTwo(input) {
    console.log(input * 2);
}

function info(name,age,grade) {
    console.log(`Name: ${name}, Age: ${Number(age)}, Grade: ${Number(grade).toFixed(2)}`)
}

function excellendGrade(input){
    if(Number(input)>= 5.50){
        console.log(`Excellent`);
    } else {
        console.log(`Not excellent`)
    }
}

function foreignLanguge(input) {
    if (input === "England" || input === "USA") {
        console.log("English");
    } else if (input === "Spain" || input === "Argentina" ||
        input === "Mexico") {
        console.log("Spanish");
    } else {
        console.log("unknown");
    }
}

function monthPrinter(input){
    let index = Number(input) - 1;
    let months = ["January","February","March","April","May",
    "June","July","August","September","October","November","December"];
    if(index < 0 || index > 11){
        console.log("Error!");
    } else {
        console.log(months[index])
    }
}

function theatrePromotions(day,age){
    let price = 0;

    if(age >= 0 && age <= 18){
        if(day === "Weekday"){
            price = 12;
        } else if(day === "Weekend"){
            price = 15;
        } else {
            price = 5;
        }
    } else if(age > 18 && age <= 64){
        if(day === "Weekday"){
            price = 18;
        } else if(day === "Weekend"){
            price = 20;
        } else {
            price = 12;
        }
    } else if(age > 4 && age <= 122){
        if(day === "Weekday"){
            price = 12;
        } else if(day === "Weekend"){
            price = 15;
        } else {
            price = 10;
        }
    } else {
        return console.log("Error!");
    }

    console.log(`${price}$`)
}

function oneToFive(){
    for(let i = 1; i <=5; i++){
        console.log(i);
    }
}

function divisibleByThree(){
    for(let i = 3; i < 100; i+=3){
        console.log(i)
    }
}

function fromNtoOne(input){
    for(let i = Number(input); i > 0; i--){
        console.log(i);
    }
}

function fromMtoN(input,input2){
    for(let i = Number(input); i >= Number(input2); i--){
        console.log(i);
    }
}

function oddSum(input){
    let sum = 0;

    for(let i = 1, counter = 1; counter <= Number(input); i+=2){
        counter++;
        console.log(i);
        sum += i;
    }

    console.log(`Sum: ${sum}`);
}