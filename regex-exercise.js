function furniture(input) {
    let text = input.join(" ");
    let furnitureArr = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>\d[\d|.]+)[!](?<quantity>\d+)\b/g;
    let valid;
    while((valid = pattern.exec(text)) !== null){
            let validName = valid.groups["furniture"];
            let validPrice = Number(valid.groups["price"]);
            let validQuantity = Number(valid.groups["quantity"]);
            totalSum += validPrice * validQuantity;
            furnitureArr.push(validName);
    }
    console.log("Bought furniture:")
    furnitureArr.forEach((elem) => {console.log(elem)})
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
function race(input) {
    let nameMap = new Map();
    let names = input[0].split(", ");
    input.shift();
    names.forEach((competitor) => {
        nameMap.set(competitor, 0);
    });

    let letterPattern = /[A-Za-z]/gmi;
    let digitPattern = /\d/gmi;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "end of race") {
            break;
        }
        let name = (input[i].match(letterPattern)).join("");
        let distance = (input[i].match(digitPattern)).reduce((a, b) => {
            return Number(a) + Number(b);
        }, 0);

        if(nameMap.has(name)){
            let prev = nameMap.get(name);
            prev += distance;
            nameMap.set(name,prev);
        }
    }
    sortName = Array.from(nameMap).sort((a,b) => {
        return b[1]-a[1];
    });
    sortName.pop();
    console.log(`1st place: ${sortName[0][0]}`);
    console.log(`2nd place: ${sortName[1][0]}`);
    console.log(`3rd place: ${sortName[2][0]}`);
}
function solve(input){
    let totalIn = 0;
    for(let line of input){
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
        let result = regex.exec(line);
        if(result){
            let totalPrice = Number(result.groups.quantity) * Number(result.groups.price);
            console.log(`${result.groups.customer}: ${result.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIn += totalPrice;
        } else if(line === "end of shift"){
            console.log(`Total income: ${totalIn.toFixed(2)}`);
        }
    }
}
function starEnigma(input) {
    let messages = Number(input.shift());
    let regex = /@([A-z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
    let attacked = [];
    let destroyed = [];
    for (let index = 0; index < messages; index++) {
        let encryptedMessages = input[index];
        let count = encryptedMessages
            .toLowerCase()
            .split("")
            .filter(
                (char) => char === "s" || char === "t" || char === "a" || char === "r"
            ).length;
        let decryptedMessage = encryptedMessages
            .split("")
            .map((c) => String.fromCharCode(c.charCodeAt(0) - count))
            .join("");
        let regexMatch = decryptedMessage.match(regex);
        if (regexMatch) {
            if (regexMatch[2] === "A") {
                attacked.push(regexMatch[1]);
            } else if (regexMatch[2] === "D") {
                destroyed.push(regexMatch[1]);
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    Object.entries(attacked)
    .sort((a,b) => a[1].localeCompare(b[1]))
    .forEach((p) => console.log(`-> ${p[1]}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    Object.entries(destroyed)
    .sort((a,b) => a[1].localeCompare(b[1]))
    .forEach((p) => console.log(`-> ${p[1]}`));
}
function netherRealms(input) {
    let regex = /[^\s\,]+/g;
    let demons = input.match(regex);
    let demonArr = []

    for (let demon of demons) {
        let numRegex = /[-]*\d+[.]*\d*/g;
        let damageRegex = /[\*|\/]/g;
        let healthRegex = /[^\d\+\-\*\/\.]/g;
        let baseDamage = 0;

        if (demon.match(numRegex)) {
            baseDamage = demon.match(numRegex)
                .reduce((a, b) => Number(a) + Number(b), 0);
            let damage = demon.match(damageRegex);
            if(damage){
                damage.forEach((elem) => {
                    if (elem === "*") {
                        baseDamage *= 2;
                    } else if (elem === "/") {
                        baseDamage /= 2;
                    }
                });
            }
        }


        let health = demon.match(healthRegex)
            .map(elem => elem = elem.charCodeAt(0))
            .reduce((a, b) => a + b, 0);
        demonArr.push([demon, health, baseDamage.toFixed(2)]);
    }

    demonArr.sort((a,b) => a[0].localeCompare(b[0]));

    for(let demon of demonArr){
        console.log(`${demon[0]} - ${demon[1]} health, ${demon[2]} damage`)
    }
}
function solve(input){
    let regex = /(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let result = input.match(regex);
    for(const elem of result){
        console.log(elem);
    }
}
