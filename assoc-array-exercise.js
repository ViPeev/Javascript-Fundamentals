function wordTracker(input){
    const wordsToTrack = input[0].split(" ");
    input.shift();
    
    let arr = new Map();
    for(let i = 0; i < wordsToTrack.length;i++){
        arr.set(wordsToTrack[i],0)
    }

    for(let i = 0; i < input.length;i++){
        if(arr.has(input[i])){
           let current = arr.get(input[i]);
           current++;
           arr.set(input[i],current)
        } 
    }
    
    let sortedArr = Array.from(arr).sort((a,b) => b[1]-a[1]);
    arr = new Map(sortedArr);
    for(let [value,key] of arr.entries()){
        console.log(`${value} - ${key}`)
    }
}
function oddOccurrences(input){
    let sentence = input.toLowerCase().split(" ");
    let arr = new Map();
    for(let i = 0; i < sentence.length; i++){
        if(arr.has(sentence[i])){
            let occurence = arr.get(sentence[i]);
            occurence++
            arr.set(sentence[i],occurence);
        } else {
            arr.set(sentence[i],1);
        }
    }
    let str = []
    for(let [value,key] of arr.entries()){
        if(key % 2 > 0){
            str.push(value)
        }
    }
    console.log(...str)
}
function picolo2(input) {
    const parkingLot = new Map();
    const inParkingLot = [];

    for (let car of input) {
        let action = car.split(',')[0];
        let plate = car.split(',')[1];

        parkingLot.set(plate, action);
    }

    for (let car of parkingLot.keys()) {
        if (parkingLot.get(car) !== 'OUT') {
            inParkingLot.push(car);
        }
    }

    if (inParkingLot.length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    
    inParkingLot.sort().forEach(lot => console.log(lot.trim()));
}

function partyTime(input){
    let vipInvites = [];
    let regularInvites = [];

    let isParty = false;

    for(let line of input){
        if (line === "PARTY"){
            isParty = true;
            continue;
        }

        if(!isParty){
            let firstChar = line[0];
            if(isNaN(firstChar)){
                regularInvites.push(line);
            } else {
                vipInvites.push(line);
            }
        }else {
            let firstChar = line[0];
            if(isNaN(firstChar)){
                let index = regularInvites.indexOf(line);
                regularInvites.splice(index,1);
            } else {
                let index = vipInvites.indexOf(line);
                vipInvites.splice(index,1);
            }
        }
    }
    let size = vipInvites.length + regularInvites.length;
    console.log(size);
    for(let code of vipInvites){
        console.log(code);
    }
    for(let code of regularInvites){
        console.log(code);
    }
}

function cardGame(input){
    let players = new Map();

    for(let player of input){
        let currPlayer = player.split(": ")[0];
        let cards = player.split(": ")[1].split(", ");
        if(players.has(currPlayer)){
            let oldCards = players.get(currPlayer);
            for(let i = 0; i < cards.length;i++){
                if(!oldCards.includes(cards[i])){
                    oldCards.push(cards[i])
                }
            }
        } else {
            players.set(currPlayer,Array.from(new Set(cards)))
        }
    }

    let playersArr = Array.from(players);
    for(let i = 0; i < playersArr.length;i++){
        let cards = playersArr[i][1];
        for(let j = 0; j < cards.length; j++){
            let t = cards[j].slice(cards[j].length-1);
            let p = cards[j].slice(0,cards[j].length-1);
            
            p = p === "J"? 11 : p === "Q" ? 12 : p === "K"? 13 : p === "A" ? 14 : Number(p);
            t = t === "S"? 4 : t === "H" ? 3 : t === "D"? 2 : 1;
            cards[j] = p * t;            
        }
        cards = cards.reduce((a,b) => (a+b),0);
        playersArr[i][1] = cards;
    }
    players = new Map(playersArr)
    
    for(let [key,value] of players.entries()){
        console.log(`${key}: ${value}`)
    }
}
function companyUsers(input) {
    let map = new Map();

    for(let elem of input){
        let company = elem.split(" -> ")[0];
        let id = elem.split(" -> ")[1];

        if(!map.has(company)){
            map.set(company,[id]);
        } else {
            let prevId = map.get(company);
            prevId.push(id);
            map.set(company,Array.from(new Set(prevId)));
        }
    }
    let sortMap = Array.from(map).sort();
    
    for(let i = 0; i < sortMap.length;i++){
        console.log(sortMap[i][0]);
        let ids = sortMap[i][1];
        for(let j = 0; j < ids.length; j++){
            console.log(`-- ${ids[j]}`);
        }
    }
}
function miner(input){
    let map = new Map();
    
    for(let i = 0; i < input.length;i+=2){
        let resource = input[i];
        let quantity = Number(input[i+1]);

        if(!map.has(resource)){
            map.set(resource,quantity)
        } else {
            let prevQuantity = map.get(resource);
            prevQuantity += quantity;
            map.set(resource,prevQuantity);
        }
    }

    for (let [key, value] of map.entries()){
        console.log(`${key} -> ${value}`)
    }
}
function travelTime(input) {
    let map = new Map();
    for(let elem of input){
        let country = elem.split(" > ")[0];
        let town = elem.split(" > ")[1];
        let price = Number(elem.split(" > ")[2]);
        
        if(!map.has(country)){
            map.set(country,[[town,price]]);
        } else {
            let townsArr = map.get(country);
            for(let i = 0; i < townsArr.length;i++){
                let flag = true;
                let oldPrice = townsArr[i][1];

                if(townsArr[i].includes(town) && oldPrice >= price){
                    townsArr[i]= [town,price];
                    break;
                } else if(townsArr[i].includes(town) && oldPrice < price){
                    break;
                }

                if(flag){
                    townsArr.push([town,price]);
                    break;
                }
            }
            townsArr.sort(function(a,b) {
               return a[1] - b[1]});
        }
    }
    let sortedMap = Array.from(map).sort((str1, str2) => String(str1).localeCompare(String(str2), undefined, { sensitivity: 'accent' }));
    map = new Map(sortedMap);

    for(let [key,value] of map.entries()){
        let str = `${key} ->`;
        for(let x of value){
            str += ` ${x[0]} -> ${x[1]}`
        }
        console.log(str)
    }
}
function gladiator(input) {
    let map = new Map();

    for (let elem of input) {
        // Enough!
        if (elem === "Ave Cesar") {
            break;
        }

        // Dick-measurement time
        if (elem.split(" ")[1] === "vs") {
            let duelist = elem.split(" ");
            // are those two on the list?
            if (map.has(duelist[0]) && map.has(duelist[2])) {
                // guess they are
                let duelistOne = map.get(duelist[0]);
                let duelistTwo = map.get(duelist[2]);
                let commonSkill = false;
                // do they have a common skill?
                for (let i = 0; i < duelistOne.length; i++) {
                    for (let j = 0; j < duelistTwo.length; j++) {
                        if (duelistTwo[j].includes(duelistOne[i][0])) {
                            commonSkill = true;
                            break;
                        }
                    }
                    if (commonSkill) {
                        break;
                    }
                }

                // total skill for both brawlers
                let duelistOnePoints = duelistOne.reduce(function (prev, next) {
                    return prev + next[1];
                }, 0);
                let duelistTwoPoints = duelistTwo.reduce(function (prev, next) {
                    return prev + next[1];
                }, 0);

                // Guess they do have something in common, we have a battle here!
                if (commonSkill) {
                    if (duelistOnePoints > duelistTwoPoints) {
                        map.delete(duelist[2]);
                    } else if (duelistOnePoints < duelistTwoPoints) {
                        map.delete(duelist[0]);
                    }
                }
            }
            continue; //we want more bloodshed!
        }

        // Recruitment time
        let fighter = elem.split(" -> ")[0];
        let fightMove = elem.split(" -> ")[1];
        let skill = Number(elem.split(" -> ")[2]);

        // is that the new guy?
        if (!map.has(fighter)) {
            map.set(fighter, [[fightMove, skill]]);
        } else { // nope, I've seen him before
            let prevMoves = map.get(fighter);
            let flag = true;
            //Does he have new moves?
            for (let innerElem of prevMoves) {
                let prevSkill = innerElem[1]
                if (innerElem.includes(fightMove) && skill >= prevSkill) { 
                    // nope, but he worked on his old ones
                    let fightMoveIndex = prevMoves.indexOf(innerElem);
                    innerElem = [fightMove, skill];
                    prevMoves[fightMoveIndex] = innerElem;
                    flag = false;
                    break;
                } else if (innerElem.includes(fightMove) && skill < prevSkill) {
                    // same old gladiator
                    flag = false;
                    break;
                }
            }
            //Yeah, he does
            if (flag) {
                prevMoves.push([fightMove, skill]);
                prevMoves.sort().sort(function (a, b) { //sort by name and by skillLevel
                    if (a[1] < b[1]) return 1;
                    if (a[1] > b[1]) return -1;
                    return 0;
                });
            }
        }
    }

    for (let mapValue of map.values()) { //total skill points for each gladiator, even those who did not fight,push it to the front 
        let totalSkill = 0;
        for (let i = 0; i < mapValue.length; i++) {
            totalSkill += mapValue[i][1];
        }
        mapValue.unshift(totalSkill);
    }

    let sortedArr = Array.from(map).sort(function (a, b) { // sort each left gladiator by his total skill points,descending order
        if (a[1][0] < b[1][0]) return 1;
        if (a[1][0] > b[1][0]) return -1;
        return 0;
    });
    
    map = new Map(sortedArr); //print them out
    for(let [key,value] of map.entries()){
        console.log(`${key}: ${value[0]} skill`);
        for(let i = 1; i < value.length;i++){
            console.log(` - ${value[i][0]} <!> ${value[i][1]}`)
        }
    }
}
function farm(input) {
    input = input.toLowerCase().split(" ");
    let legendary = new Map();
    let junk = new Map();
    legendary.set("shards", 0)
    legendary.set("motes", 0)
    legendary.set("fragments", 0)

    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1];

        if (material === "shards" || material === "motes" ||
            material === "fragments") {
            let prevQuantity = legendary.get(material);
            prevQuantity += quantity;
            legendary.set(material, prevQuantity);
        } else {
            if (!junk.has(material)) {
                junk.set(material, quantity)
            } else {
                let prevQuantity = junk.get(material);
                prevQuantity += quantity;
                junk.set(material, prevQuantity);
            }
        }
        let flag = false;
        for (let [key, value] of legendary.entries()) {
            if (value >= 250) {
                flag = true;
                if (key === "shards") {
                    console.log("Shadowmourne obtained!");
                } else if (key === "fragments") {
                    console.log("Valanyr obtained!");
                } else if (key === "motes") {
                    console.log("Dragonwrath obtained!");
                }
                legendary.set(key, value - 250)
            }
        }
        if (flag) {
            break;
        }
    }

    let sortLegend = Array.from(legendary).sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        return -1;
    });
    let sortJunk = Array.from(junk).sort();
    sortLegend = sortLegend.concat(sortJunk);
    legendary = new Map(sortLegend);
    for (let [key, value] of legendary.entries()) {
        console.log(`${key}: ${value}`)
    }
}
