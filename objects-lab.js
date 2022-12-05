function personInfo(firstName, lastName, age){
    let result = {
        firstName,
        lastName,
        age
    };

    return result;
}
function city(input){
    for(let x in input){
        console.log(`${x} -> ${input[x]}`)
    }
}
function convert(input){
    input = JSON.parse(input);
    for(let x in input){
        console.log(`${x}: ${input[x]}`)
    }
}
function convert2(input1, input2, input3) {
    let person = { name: input1, lastName: input2, hairColor: input3 }
    person = JSON.stringify(person)
    console.log(person)
}

function cats(input) {
    class cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for(let i = 0; i < input.length;i++){
        let grumpyCat = input[i].split(" ");
        let currCat = new cat(grumpyCat[0],grumpyCat[1]);
        currCat.meow()
    }
}
function songFunction(input) {
    let listType = input[input.length-1];
    input.pop();
    input.shift()
    class song {
        constructor(list, title, time) {
            this.list = list;
            this.title = title;
            this.time = time;
        }
    }

    for(let i = 0; i < input.length;i++){
        let [thisList,thisTitle,thisTime] = input[i].split("_");
        let currSong = new song(thisList,thisTitle,thisTime);
        if(listType === "all"){
            console.log(currSong.title)
        } else {
            if(currSong.list === listType){
                console.log(currSong.title)
            }
        }
    }
}