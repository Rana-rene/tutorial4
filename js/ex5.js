// const passwd = prompt("Password:");
var num1 = 0
while (num1 < 3){
    const passwd = prompt("Password:");
    num1++;
    if(passwd == "secret"){
        alert(`You entered the correct password after ${num1} attempts.`);
        break;
    }
    else{
        alert('You entrered the password incorrect.');
        if (num1 === 3)[
            alert(`Your account is locked! You failed to enter the correct password ${num1} times`)
        ]
    }

}