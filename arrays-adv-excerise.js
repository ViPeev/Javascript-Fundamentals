function train(input) {
    let wagons = input[0].split(" ").map(Number);
    let maxCap = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        if (input[i].includes("Add")) {
            let newWagon = Number(input[i]
                .split(" ")[1]);
            wagons.push(newWagon);
        } else {
            let pass = Number(input[i]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + pass <= maxCap) {
                    wagons[j] = wagons[j] + pass;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
function distinctArray(input) {
    let mySet = new Set(input);
    console.log(Array.from(mySet).join(" "));
}
function houseParty(input) {
    let people = [];

    for (let message of input) {
        let name = message.split(" ")[0];
        let command = message.split(" ")[2];
        if (command === "not") {
            if (people.includes(name)) {
                let index = people.indexOf(name);
                people.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (people.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                people.push(name);
            }
        }
    }
    people.forEach(person => console.log(person));
}
function sorting(input) {
    let arr = [...input];
    let sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 > 0) {
            let min = Math.min(...input);
            sortedArr.push(min);
            input.splice(input.indexOf(min), 1);
        } else {
            let max = Math.max(...input);
            sortedArr.push(max);
            input.splice(input.indexOf(max), 1);
        }
    }
    console.log(sortedArr.join(" "));
}
function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}
function bombNumbers(input1,input2){
    let bomb = Number(input2[0]);
    let radius = Number(input2[1]);
    
    while(input1.includes(bomb)){
        let start = input1.indexOf(bomb) - radius;
        let detonator = input1.indexOf(bomb) - radius;
        let end = input1.indexOf(bomb)+radius;
        for(let i = start; i <= end;i++){
            input1.splice(detonator,1);
        }
    }
    input1 = input1.reduce((a,b) => a+b,0);
    console.log(input1);
}
function searchNum(arr1,arr2){
    let take = Number(arr2[0]);
    let del = Number(arr2[1]);
    let search = Number(arr2[2]);

    arr1 = arr1.splice(0,take);
    arr1.splice(0,del);
    arr1 = arr1.filter(elem => {
        return elem === search;
    });
    
    console.log(`Number ${search} occurs ${arr1.length} times.`);
}
function arrayManip(input1, input2) {
    for (let command of input2) {
        if (command === "print") {
            break;
        }

        let cmdArr = command.split(" ");
        let cmd = cmdArr[0];
        let index = Number(cmdArr[1]);

        if (cmd === "add") {
            let element = Number(cmdArr[2]);
            input1.splice(index, 0, element);
        } else if (cmd === "addMany") {
            cmdArr.shift();
            cmdArr.shift();
            input1.splice(index, 0, cmdArr.map(Number));
            input1 = input1.flat();
        } else if (cmd === "contains") {
            console.log(input1.indexOf(index));
        } else if (cmd === "remove") {
            input1.splice(index, 1);
        } else if (cmd === "shift") {
            if (index >= input1.length - 1) {
                index %= input1.length;
            }
            let splicer = input1.splice(0, index);
            input1.push(splicer);
            input1 = input1.flat();
        } else if (cmd === "sumPairs") {
            let sumArr = [];
            for (let i = 0; i < input1.length; i += 2) {
                if (i === input1.length - 1) {
                    sumArr.push(input1[i]);
                } else {
                    sumArr.push(input1[i] + input1[i + 1]);
                }
            }
            input1 = sumArr;
        }
    }
    console.log(`[ ${input1.join(", ")} ]`);
}
function gladiatorInventory(input) {
    let inventory = input[0].split(" ");
    for (let i = 1; i < input.length; i++) {
        let commands = input[i].split(" ");
        let action = commands[0];
        let item = commands[1];

        if (action === "Buy") {
            if (!inventory.includes(item)) {
                inventory.push(item)
            }
        } else if (action === "Trash") {
            if (inventory.includes(item)) {
                let itemIndex = inventory.indexOf(item);
                inventory.splice(itemIndex, 1);
            }
        } else if (action === "Repair") {
            if (inventory.includes(item)) {
                let itemIndex = inventory.indexOf(item);
                inventory.push(item);
                inventory.splice(itemIndex, 1);
            }
        } else if (action === "Upgrade"){
            item = item.split('-')
            if (inventory.includes(item[0])){
                let itemIndex = inventory.indexOf(item[0]);
                inventory.splice(itemIndex+1,0,`${item[0]}:${item[1]}`)
            }
        }
    }
    console.log(inventory.join(" "))
}
function buildAWall(input){
    input = input.map(Number);
    let concrete = [];
    let smallest = Math.min(...input);

    for(let i = smallest; i < 30;i++){
        let daily = 0;
        for(let j = 0; j < input.length;j++){
            if(input[j] < 30){
                daily += 195;
                input[j] = input[j] + 1;
            }
        }
        concrete.push(daily);
    }

    console.log(concrete.join(", "));
    concrete = concrete.reduce((a,b) => a+b,0);
    console.log(`${concrete*1900} pesos`)
}
