class Laptop {
    constructor({ producer, age, brand }, quality) {
        this.info = { producer, age, brand }
        this.isOn = false;
        this.quality = quality;
        this.prc = 0; 

    }
    get price() {
        return this.price = Number(800 - (this.info.age * 2) + (this.quality * 0.5));
    }
    set price(price){
        this.prc = price;
    }
    turnOn() {
        this.isOn = true;
        this.quality--;
    }
    turnOff() {
        this.isOn = false;
        this.quality--;
    }
    showInfo() {
        return JSON.stringify({ producer: this.info.producer, age: this.info.age, brand: this.info.brand })
    }
}
function flightSchedule(input) {
    let flightsList = {};
    let flights = input[0];
    let statusChange = input[1];
    let printCommand = input[2][0];

    for(let flight of flights ){
        let current = flight.split(" ");
        let flightNum = current.splice(0,1);
        let dest = current.join(" ");
        flightsList[flightNum] = {
            "Destination" : `${dest}`,
        }
    }

    for(let command of statusChange){
        let current = command.split(" ");
        let flightNum = current[0];
        let status = current[1];

        if(flightsList.hasOwnProperty(flightNum)){
            flightsList[flightNum]["Status"] = status;
        }
    }

    if(printCommand === "Ready to fly"){
        for(let key in flightsList){
            if(!flightsList[key].hasOwnProperty("Status")){
                flightsList[key]["Status"] = "Ready to fly";
                console.log(flightsList[key]);
            }
        }
    } else {
        for(let key in flightsList){
            if(flightsList[key].hasOwnProperty("Status")){
                console.log(flightsList[key]);
            }
        }
    }
}
function schoolRegister(input) {
    let school = {};

    for (let student of input) {
        student = student.split(", ").map(elem => {
            return elem = elem.split(": ");
        });

        let name = student[0][1];
        let grade = Number(student[1][1]);
        let score = Number(student[2][1]);

        if (score >= 3) {
            grade++;
            if (school.hasOwnProperty(grade)) {
                let nameArr = school[grade]["names"];
                let scoreArr = school[grade]["scores"];
                nameArr.push(name);
                scoreArr.push(score);
                school[grade]["names"] = nameArr;
                school[grade]["scores"] = scoreArr;
            } else {
                let nameArr = [];
                let scoreArr = [];
                nameArr.push(name);
                scoreArr.push(score);
                school[grade] = {}
                school[grade]["names"] = nameArr;
                school[grade]["scores"] = scoreArr;
            }
        }
    }

    for(let key in school){
        console.log(`${key} Grade`);
        console.log(`List of students: ${school[key]["names"].join(", ")}`);
        let average = school[key]["scores"].reduce((a,b) => a+b,0);
        average/= school[key]["names"].length;
        console.log(`Average annual score from last year: ${average.toFixed(2)}\n`);
    }
}
function browserHistory(obj, input) {
    for (let command of input) {
        command = command.split(" ");
        let cmd = command.splice(0, 1)[0];
        let name = command.join(" ");
        let logLine = `${cmd} ${name}`

        if (cmd === "Close") {
            if (obj["Open Tabs"].includes(name)) {
                let oldTabs = obj["Open Tabs"];
                let index = oldTabs.indexOf(name);
                oldTabs.splice(index, 1);
                obj["Open Tabs"] = oldTabs;

                let oldClosed = obj["Recently Closed"];
                oldClosed.push(name);
                obj["Recently Closed"] = oldClosed;

                let logs = obj["Browser Logs"];
                logs.push(logLine);
                obj["Browser Logs"] = logs;
            }
        } else if (cmd === "Open") {
            let oldTabs = obj["Open Tabs"];
            oldTabs.push(name);
            obj["Open Tabs"] = oldTabs;

            let logs = obj["Browser Logs"];
            logs.push(logLine);
            obj["Browser Logs"] = logs;
        } else if (cmd === "Clear") {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        }
    }

    console.log(obj[`Browser Name`]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
function sequences(input){
    let arr = [];

    for(let elem of input){
        elem = JSON.parse(elem).sort((a,b) => b-a);
        elem = JSON.stringify(elem);
        if(arr.includes(elem)){
            continue;
        } else {
            arr.push(elem);
        }
    }

    arr = arr.map(elem => {
        return elem = JSON.parse(elem);
    })

    arr = arr.sort((a,b) => {
        if(a.length === b.length){
            return 0;
        }
        return a.length - b.length
    });
    arr.forEach(elem => {
        console.log(`[${elem.join(", ")}]`);
    })
}