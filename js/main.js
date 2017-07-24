/*let username = prompt("Please enter your name");
let helloMess = "Hello " + username;
document.write(helloMess);
console.log(helloMess);*/

//let age = Number(prompt("Enter your age"));
//let age = Number(prompt("Enter your age"));
/*let nextage = age + 1 ;
document.write("Next year you will be " + nextage);*/



/*if(isNaN(age)){
    document.write(" Please enter correct number "); 
}else{
   if(age < 40){
  document.write(" You are young ");  
}else{document.write(" You are not young ");} 
}*/


let mark = Number(prompt('Enter mark'));

let textMark;

switch (mark) {
    case 1:
        textMark = "Bad";
        break;
    case 2:
        textMark = "Average";
        break;
    case 3:
        textMark = "Good";
        break;
    
    default:
        textMark = "Incorrect mark";
}

document.write(textMark);

function add3 (num1, num2, num3){
    let result = num1 + num2 + num3;
    return result;
}

let a = Number(prompt("Your first number"));
let b = Number(prompt("Your second number"));
let c = Number(prompt("Your third number"));
add3(a,b,c);
document.write(add3(a,b,c));



 



