function print(input){
    for(let x of input){
        console.log(x)
    }
}
function subs(input,index,count){
    input = input.substr(index,count);
    console.log(input)
}
function censored(text,word){
    let censore = "*";
    censore = censore.repeat(word.length)
    while(text.includes(word)){
        text = text.replace(word,censore)
    }
    console.log(text)
}
function censored(text,word){
    text = text.split(" ");
    let counter = 0;
 
    for(let x of text){
        if(x === word){
            counter++;
        }
    }
    console.log(counter)
 }
 