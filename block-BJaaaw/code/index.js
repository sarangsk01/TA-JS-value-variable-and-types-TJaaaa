// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num =Number(prompt(`Enter a number:`));
if (num % 2 === 0){
    alert(`number is even.`);
}
else{
    alert(`number is odd.`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 =Number(prompt(`Enter a number:`));
let num2 =Number(prompt(`Enter a number:`));
if (num1>num2){
    alert(`${num1}is the greater`);
} else{
    alert(`${num2}is the greater`);
}

// 3. Convert the above code using`?` terniary operator
num1>num2 ? alert(`${num1}is the greater`):alert(`${num2}is the greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename =(prompt(`what is your housename:`));
if(housename ==="stark"){
    alert(`Winter is coming`);
} else if(housename ==="lannister"){
    alert(`A lannister always pays his debt`);
} else{
    alert(`All men must die`);
}
    
  
    

// 5. Convert the above code using`?` terniary operator
(housename ==="stark") ? alert(`Winter is coming`):(housename ==="lannister");alert(`All men must die`);
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName =prompt(`Enter the month`);
switch(monthName){
    case "January":
    alert(`The number of days are 31`)
    break;
    case "February":
    alert(`The number of days are 28`);
    break;
    case "March":
    alert(`The number of days are 31`);
    break;
    case "April":
    alert(`The number of days are 30`);
    break;
    case "May":
    alert(`The number of days are 31`);
    break;
    case "June":
    alert(`The number of days are 30`);
    break;
    case "July":
    alert(`The number of days are 31`);
    break;
    case "August":
    alert(`The number of days are 31`);
    break;
    case "September":
    alert(`The number of days are 30`);
    break;
    case "October":
    alert(`The number of days are 31`);
    break;
    case "November":
    alert(`The number of days are 30`);
    break;
    case "December":
    alert(`The number of days are 31`);
    break;
    default:
    alert(`Not a valid input`);
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt(`Enter your salary`);
switch(true){
    case salary <= 20000:
        let tax =(salary * 10) /100;
        alert(`Your in-hand amount ${salary-tax}`);
        break;
    case salary <= 40000:
        let tax2 =(salary * 20) /100;
        alert(`Your in-hand amount ${salary-tax2}`);
        break;
    case salary <= 50000:
        let tax3 =(salary * 30) /100;
        alert(`Your in-hand amount ${salary-tax3}`);
        break;
    default:
        alert(`Not a valid input`);
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt(`Enter your marks`));
if (marks > 100){
    alert(`Marks can't be greater than 100`);
} else if(marks > 80 && marks < 100){
    alert(`Grade A`);
}else if(marks > 50 && marks < 80){
    alert(`Grade B`);
} else if(marks > 30 && marks < 50){
    alert(`Grade C`);
} else{
    alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`What is the weather like outside?`);
switch(weather){
    case "sunny":
        alert(`Wear a T-shirt`);
        break;
        case "rainy":
            alert(`Don't forget to take your raincoat`);
            break;
            case "hot":
                alert(`Get a hanky`);
                break;
                case "freezing":
                    alert(`Get your sweeter on`);
                    break;
                    default:
                        alert(`Not a valid input`);
}
