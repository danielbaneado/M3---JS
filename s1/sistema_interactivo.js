const prompt = require("prompt-sync")();
let name= prompt("Type your name >> ")
let age= parseInt(prompt("Your age >> ")) // Specifies age as integer with parseInt

while(isNaN(age)){ // While typed age is not a number, asks for an age until it passes as a number
  console.error("Please type a valid age")
  age= parseInt(prompt("Your age >> "))
}

if (age < 18){
  console.log(`Hi ${name}, youre a minor. ¡Still enjoying and practicing with JavaScript!`)
}
else if (age >= 18){
  console.log(`Hi ${name}, youre legally an adult. ¡Prepare yourself for great opportunities in programming world!`)
}