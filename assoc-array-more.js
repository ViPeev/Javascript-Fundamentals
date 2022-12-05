function garage(input) {
    let garageMap = new Map;
    for(let elem of input){
        let garageNum = elem.split(" - ")[0];
        let info = elem.split(" - ")[1].split(", ");
        let properties = []
        for(let i = 0; i < info.length;i++){
            let key = info[i].split(": ")[0];
            let value = info[i].split(": ")[1];
            properties.push(`${key} - ${value}`)
        }
        
        if(!garageMap.has(garageNum)){
            garageMap.set(garageNum,[properties]);
        } else {
            let prevCars = garageMap.get(garageNum);
            prevCars.push(properties);
            garageMap.set(garageNum,prevCars);
        }
    }
    for(let [key,value] of garageMap.entries()){
        console.log(`Garage № ${key}`);
        for(let currValue of value){
            currValue = currValue.join(", ")
            console.log(`--- ${currValue}`)
        }
    }
}
function armies(input) {
    let leaderMap = new Map();
    for (let elem of input) {
        let armyName = "";
        let armyCount = 0;
        let leader = "";
        if (elem.endsWith("arrives")) {
            leader = elem.split(" arrives")[0];
            leaderMap.set(leader, []);
            continue;
        }
        if (elem.includes(", ")) {
            leader = elem.split(": ")[0];
            armyName = elem.split(": ")[1].split(", ")[0];
            armyCount = Number(elem.split(": ")[1].split(", ")[1]);
            if (leaderMap.get(leader)) {
                let prevArmy = leaderMap.get(leader);
                prevArmy.push([armyName, armyCount]);
                leaderMap.set(leader, prevArmy);
                continue;
            }
        }
        if (elem.split(" ")[1] === "+") {
            armyName = elem.split(" + ")[0];
            armyCount = Number(elem.split(" + ")[1]);
            for (let element of leaderMap.values()) {
                for (let i = 0; i < element.length; i++) {
                    let flag = false;
                    if (element[i].includes(armyName)) {
                        element[i][1] += armyCount;
                        flag = true;
                        break;
                    }
                    if (flag) {
                        break;
                    }
                }
            }
            continue;
        }
        if (elem.endsWith("defeated")) {
            leader = elem.split(" defeated")[0];
            leaderMap.delete(leader);
            continue;
        }
    }
    let totalSums = []
    for (let [key, value] of leaderMap.entries()) {
        let totalSum = 0;
        for (let i = 0; i < value.length; i++) {
            totalSum += value[i][1];
        }
        value.unshift(totalSum)
        totalSums.push(totalSum)
    }
    totalSums.sort((a, b) => { return b - a })
    let sorted = Array.from(leaderMap);
    sorted.sort((a, b) => { return b[1][0] - a[1][0]; });
    leaderMap = new Map(sorted);
    for (let [key, value] of leaderMap.entries()) {
        value.shift()
    }
    for (let [key, value] of leaderMap.entries()) {
        value.sort((a, b) => { return b[1] - a[1]; });
    }
    sorted = Array.from(leaderMap);
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${sorted[i][0]}: ${totalSums[i]}`)
        for (let j = 1; j < sorted[i].length; j++) {
            for(let n = 0; n < sorted[i][j].length;n++)
            console.log(`>>> ${sorted[i][j][n][0]} - ${sorted[i][j][n][1]}`)
        }
    }
}
function comments(input) {
    let articles = new Map();
    let users = new Set();

    for (let command of input) {
        if (command.startsWith("user")) {
            let userName = command.split(" ")[1];
            users.add(userName);
        } else if (command.startsWith("article")) {
            let articName = command.split(" ")[1];
            articles.set(articName,[]);
        } else {
            command = command.split(": ");
            let userName = command[0].split(" posts on ")[0];
            let articName = command[0].split(" posts on ")[1];
            let [commentTitle,comment] = command[1].split(", ");
            if (users.has(userName) && articles.has(articName)) {
                let prevComments = articles.get(articName);
                prevComments.push([userName, commentTitle, comment]);
            }
        }
    }

    articles = Array.from(articles).sort((a,b) => b[1].length-a[1].length);
    articles.forEach( article => {
        article[1].sort( (a,b) => a[0].localeCompare(b[0]));
    });

    for(let article of articles){
        console.log(`Comments on ${article[0]}`);
        for(let comment of article[1]){
            console.log(`--- From user ${comment[0]}: ${comment[1]} - ${comment[2]}`);
        }
    }
}
function bookShelf(input){
    let shelves = {};
    let books = new Map();
    
    for(let command of input){
        if(command.includes(" -> ")){
            let [id,genre] = command.split(" -> ");
            if(!shelves.hasOwnProperty(id)){
                shelves[id] = genre;
            } 
        } else if(command.includes(": ")){
            let bookTitle = command.split(": ")[0];
            let author = command.split(": ")[1].split(", ")[0];
            let genre = command.split(": ")[1].split(", ")[1];

            let values = Object.entries(shelves);
            for(let elem of values){
                if(elem[1] === genre){
                    if(!books.has(genre)){
                        books.set(genre,[[bookTitle,author]]);
                    } else {
                        let prev = books.get(genre);
                        prev.push([bookTitle,author])
                    }
                }
            }
        }
    }


    books = Array.from(books).sort((a,b) => {
        return b[1].length - a[1].length;
    })
    
    books.forEach(elem => {
        elem[1].sort((a,b) => {
            return a[0].localeCompare(b[0]);
        })
    });

    for(let shelve of books){
        
        let  id;
        for(let key in shelves){
            if(shelves[key] === shelve[0]){
                id = key;
                break;
            }
        }

        console.log(`${id} ${shelve[0]}: ${shelve[1].length}`);
        for(let books of shelve[1]){
            console.log(`--> ${books[0]}: ${books[1]}`)
        }
    }
}
function solve(arr){
    let register = {};

    arr.forEach(line => {
        if (line.includes(':')){
            let [courseName, capacity] = line.split(':').map(e => e.trim())
            capacity = Number(capacity);
            if (!register[courseName]){
                register[courseName] = {capacity, students: []}
            } else {
                register[courseName].capacity += capacity
            }
        }

        else if (line.includes('with email')){
            let [user, word, word1, email, word2, course] = line.split(' ').map(e => e.trim());
            let [userName, creditCount] = user.split('[');
            creditCount = creditCount.replace(']', '')

            if (register.hasOwnProperty(course)){
                if (register[course].capacity > 0){
                    register[course].students.push({userName, creditCount, email, courseName: course})
                    register[course].capacity -= 1
                }
            }
        }
    });

    Object.keys(register).sort((a, b) => register[b].students.length - register[a].students.length).map(k=> {
        register[k].students = register[k].students.sort((a, b) => b.creditCount - a.creditCount)
        return k;
    })
    .forEach(k => {
        const {courseName, capacity, students} = {courseName: k, ...register[k]}
        console.log(`${courseName}: ${capacity} places left`);
        if(students.length > 0){
            console.log(`${students.map(s=>`--- ${s.creditCount}: ${s.userName}, ${s.email}`).join('\n')}`)
        }
    })
}