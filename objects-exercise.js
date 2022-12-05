function solve(input){
    let list = {};

    for(let employee of input){
        list.name = employee;
        list.num = employee.length;
        console.log(`Name: ${list.name} -- Personal Number: ${list.num}`)
    }
}
function towns(input){
    class city {
        constructor(town,latitude,longitude){
            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    for(let i = 0; i < input.length;i++){
        let [name,lat,long] = input[i].split(" | ");
        let currCity = new city(name,lat,long);
        console.log(`{ town: '${currCity.town}', latitude: '${currCity.latitude}', longitude: '${currCity.longitude}' }`);
    }
}
function solve(availableStock, deliveredStock){
    let stored = {};

    for(let i = 0; i < availableStock.length; i+=2){
        let currProduct = availableStock[i];
        stored[currProduct] = Number(availableStock[i+1]);
    }

    for(let i = 0; i < deliveredStock.length; i += 2){
        let currProduct = deliveredStock[i];
        if(!stored.hasOwnProperty(currProduct)){
            stored[currProduct] = 0;
        }
        stored[currProduct] += Number(deliveredStock[i+1]);
    }
    for(let iterator in stored){
        console.log(`${iterator} -> ${stored[iterator]}`);
    }
}
function solve(input) {
    let list = [];
    for (const lines of input) {
        if (lines.includes("addMovie")) {
            let nameOfMovie = lines.split("addMovie ")[1];
            list.push({ name:nameOfMovie })
        } else if (lines.includes("directedBy")) {
            let info = lines.split("directedBy ");
            let name = info[0].trim();
            let director = info[1];
            let movie = list.find((movieObj) => movieObj.name === name)
            if (movie) {
                movie.director = director;
            }
        } else if (lines.includes("onDate")) {
            let info = lines.split("onDate ");
            let name = info[0].trim();
            let date = info[1];
            let movie = list.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for(const movie of list){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}
function inventory(input) {
    class hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let str = input[i].split(" / ");
        let currHero = new hero(str[0], str[1], str[2].split(", "));
        arr.push(currHero)
    }

    arr.sort(function (a, b) {
        return a.level - b.level;
    });

    function print(item, index, argArr){
        console.log(`Hero: ${argArr[index].name}`);
        console.log(`level => ${argArr[index].level}`);
        console.log(`items => ${argArr[index].items.join(", ")}`)
    }
    arr.forEach(print)
}
function dictionary(input) {
    let dict = {};
    let arr = [];
    for (let elem of input) {
        let obj = JSON.parse(elem);
        let key = Object.keys(obj);
        dict[key] = obj[key];
    }

    for(let key in dict){
        arr.push(`Term: ${key} => Definition: ${dict[key]}`);
    }

    arr.sort((a,b) => a.localeCompare(b));
    arr.forEach(elem => console.log(elem));
}
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = Number(parts.engine) * Number(parts.power)
        this.fuel = Number(fuel);
    }
    drive(x) {
        return this.fuel = this.fuel-x;
    }
}
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(x) {
        this.capacity = this.capacity - Number(x.quantity);
        this.storage.push(x);
        this.totalCost += x.price * x.quantity
    }
    getProducts() {
        return String(this.storage.map(s => JSON.stringify(s)).join(" "));
    }
}
function catalogueFunct(input) {
    class catalogue {
        constructor() {
            this.list = [];
        }
        addProduct(x) {
            this.list.push(x);
            this.list.sort((a,b) => a.localeCompare(b));
        }
        print() {
            this.list.sort((a,b) => a.localeCompare(b))
            let letter = this.list[0][0];
            let arr = [letter];
            for (let i = 0; i < this.list.length; i++) {
                let curLetter = this.list[i][0];

                if (curLetter !== letter) {
                    arr.push(curLetter);
                    letter = curLetter;
                }
                arr.push(`  ${this.list[i]}`);
            }
            return this.list = arr;
        }
    }

    let newCatalogue = new catalogue();

    for(let elem of input){
        elem = elem.split(" : ");
        newCatalogue.list.push(`${elem[0]}: ${elem[1]}`);
    }


    newCatalogue.print().forEach(elem => console.log(elem));
}
