const input = prompt("Hello what is your name and how many units have you completed: \n(Please seperate with a comma.)");
const inputSplit = input.split(",")
const name = inputSplit[0]
const inputNumber = inputSplit[1]

if ((inputNumber >= 0) && (inputNumber <= 30)) {
    let a = "Freshmen";
    console.log(`${inputNumber}`);
    alert(`Hello ${inputSplit[0]} \n${a}`);
}
 else if ((inputNumber >= 31) && (inputNumber <= 60)) {
    let b = "Sophomore";
    alert(`Hello ${inputSplit[0]} \n${b}`);
} 
else if ((inputNumber >= 61) && (inputNumber <= 90)) {
    let c = "Junior";
    alert(`Hello ${inputSplit[0]} \n${c}`);
}
else if (inputNumber > 90) {
    let d = "Senior";
    alert(`Hello ${inputSplit[0]} \n${d}`);
}


// alert(`Hello ${inputSplit[0]} \n `);