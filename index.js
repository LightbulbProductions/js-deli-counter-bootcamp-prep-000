var katzDeli=[];                  

function takeANumber(katzDeli, name = "Guest"){
    katzDeli.push(name)
    console.log(`Welcome,${name}. You are number ${katzDeli.length} in line.`);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli){
  let i = 0;
   while (i < katzDeli.length) {
    i++;
  }
 if( katzDeli.length === 0){

   return "There is nobody waiting to be served!";
  }else{
    return(`Currently serving ${katzDeli.shift()}.`);
   }
}
var line = [];
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty";
  }else{
    var newLine = [],i;
    for(i=0; i < line.length; i++){
      newLine.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${newLine}`;
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"