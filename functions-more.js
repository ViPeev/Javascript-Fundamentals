function carWash(input){
    let clean = 10;

    for(let i = 1; i < input.length; i++){
        if(input[i] === "soap"){
            clean += 10;
        } else if(input[i] === "water"){
            clean *= 1.2;
        } else if(input[i] === "vacuum cleaner"){
            clean *= 1.25;
        } else {
            clean *= 0.9;
        }
    }

    console.log(`The car is ${clean.toFixed(2)}% clean.`)
}
function numMod(input){
    let num = String(input);
    let avg = 0;
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }

    avg = sum/num.length;

    while(avg <= 5){
        num += `9`;
        sum += 9;
        avg = sum/num.length
    }
    console.log(num)
}
function validityChecker(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let coordinates = [[x1,y1],[x2,y2]];
    for(let coords of coordinates){
        let check1 = Math.sqrt(Math.pow((0-coords[0]),2)+Math.pow((0-coords[1]),2));
        if(check1 === Math.floor(check1)){
            console.log(`{${coords[0]}, ${coords[1]}} to {0, 0} is valid`);
        } else {
            console.log(`{${coords[0]}, ${coords[1]}} to {0, 0} is invalid`);
        }
    }

    let check2 = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    if(check2 === Math.floor(check2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
function quartzCrystal(input){
    let desiredTarget = Number(input[0]);

    for(let i = 1; i < input.length;i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);
        while(thickness !== desiredTarget){
            let xrayIndex = 0;
            let actionIndex = 0;
            if(desiredTarget * 4 <= thickness){
                while(desiredTarget * 4 <= thickness){
                    thickness /= 4;
                    actionIndex++;
                }
                console.log(`Cut x${actionIndex}`)
            } else if(desiredTarget <= thickness*0.8){
                while(desiredTarget <= thickness*0.8){
                    thickness *= 0.8;
                    actionIndex++;
                }
                console.log(`Lap x${actionIndex}`)
            } else if(desiredTarget <= thickness-20){
                while(desiredTarget <= thickness-20){
                    thickness -= 20;
                    actionIndex++;
                }
                console.log(`Grind x${actionIndex}`)
            } else if(desiredTarget <= thickness-2 || thickness === desiredTarget+1){
                while(desiredTarget <= thickness-2 || thickness === desiredTarget+1){
                    thickness -= 2;
                    actionIndex++;
                }
                console.log(`Etch x${actionIndex}`);
            } else if(xrayIndex === 0){
                thickness +=1;
                console.log(`X-ray x1`);
                xrayIndex++;
              	continue;
            }
            console.log(`Transporting and washing`)
            thickness = Math.floor(thickness);
        }
        console.log(`Finished crystal ${desiredTarget} microns`)
    }
}
function dna(input) {
    let strArr = [["A", "T"], ["C", "G"], ["T", "T"], ["A", "G"], ["G", "G"]];
    let counter = 0;
    let strCount = 0;
    for (let i = 1; i <= input; i++) {
        counter++;
        if(counter === 1){
            console.log(`**${strArr[strCount][0]}${strArr[strCount][1]}**`);
        } else if(counter === 2 || counter === 4){
            console.log(`*${strArr[strCount][0]}--${strArr[strCount][1]}*`);
        } else {
            console.log(`${strArr[strCount][0]}----${strArr[strCount][1]}`);
        }

        strCount++;
        if(strCount === 5){
            strCount = 0;
        }
        if (counter === 4) {
            counter = 0;
        }
    }
}