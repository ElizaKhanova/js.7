let number = 45;

let string = `${number}`;
let arr = Array.from(string);
function splitNumber(number){
    for (item of arr){
        console.log (item);
    }
    console.log (`Количество цифр: ${arr.length}`);
    console.log (sumNumber());
    console.log (arr.reverse().reduce((acc,item)=> acc+item));
}
splitNumber();

function sumNumber (){
    let result = arr.reduce((acc, item)=> +acc+(+item));
    return result
}

