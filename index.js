// Code your solutions in this file
/*
for ([initialization]; [condition]; [iteration]) {
    [loop body]
  };
*/
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
};
*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

const myNames = ["Guadalupe", "Ollie", "Aki"];
const myEvent = "graduation"



function writeCards(arrayOfNames, event){
    const newArray = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
        
    }
    return newArray
};

writeCards(["Charlie", "Samip", "Ali"], "birthday")
writeCards(myNames, myEvent);


function countDown(number) {
    let myNumber = 10;
    while (myNumber > -1){
        console.log(myNumber--);
    }
}