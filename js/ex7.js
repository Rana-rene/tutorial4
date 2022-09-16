
// Asks the user to enter three inputs
const time = prompt("Please enter the current time(hr:min:s):");

//Takes the three inputs, sererates them at the commas, if there were any spaces between the commas then they are stripped
let timeInput = time.split(':').map(item => item.trim());


// Creates in an array to convert the previous string array into a numbers array(String array not yet converted to Number array)
let numberArray = [];

//Gets the length of string array it itterate over
length = timeInput.length;

//Converts the string array into a number array
for (let i = 0; i < length; i++)

    numberArray.push(Number(timeInput[i]));

    console.log(numberArray);
//


//Checks to see if this is a valid time interval
if ((numberArray[0] > 23)||(numberArray[1] > 59)||(numberArray[2] > 59)) {
    console.log("One of these entries is not a vaild time interval.")
}

//If time intevals are valid
else{

        // Outputs the Users original input
    console.log(`Time input: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);

    // Checks to see if the seconds is at 59
    if (numberArray[2] ===59) {
        numberArray[2] = 0;
        numberArray[1] ++;
        // It then checks to see if the minutes has been pushed to 60
        if (numberArray[1] ===60) {
            numberArray[1] = 0;
            numberArray[0] ++;
            // It then checks to see if the hours is at 24hr to be converted to 0
            if (numberArray[0] ===24) {
                numberArray[0] = 0
            }
        }
        //Output completed
        console.log(`One second later: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);
    }
    // If the second is anything less then 59
    else {
        numberArray[2] ++;
        console.log(`One second later: ${numberArray[0]}h${numberArray[1]}min${numberArray[2]}s`);
    }

}
