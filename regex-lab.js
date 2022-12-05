function myFirstRegex(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result ;
    let nameArr = [];
    while((result = pattern.exec(input)) !== null){
        nameArr.push(result[0]);
    }
    console.log(nameArr.join(" "));
}
function myFirstRegex(input){
    let pattern = /[+][3][5][9]([ |-])[2]\1\d{3}\1\d{4}/gm
    let result ;
    let nameArr = [];
    while((result = pattern.exec(input)) !== null){
        nameArr.push(result[0]);
    }
    console.log(nameArr.join(", "));
}
function dateMatch(input){
    let text = input;
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate;
    while((validDate = pattern.exec(text)) !== null){
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}