// Q no 64

function combineStringandNumber(text:string,numder:number):string{
    return text + numder
}
console.log(combineStringandNumber("Age",30));

//  Q no 65

function determineRemainder(number1:number,number2:number):number{
return number1 % number2
}
let response =determineRemainder(10,3)
console.log(`the remainder of (10,3) is:${response}`);

// Q no 66

function checkBothtrue(val1:boolean,val2:boolean):boolean{
    return val1 && val2
}
let response1 =checkBothtrue(true,false);
console.log(`your response is:${response1}`);
