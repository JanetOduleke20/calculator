// alert("Welcome to Level 1!");

// Variables - are containers
// Data types - string, number, boolean, array, object 
let name = 'Janet'; // This is a string
let num = 5; // This is a number

const username = "weezy";

// Naming conventions
// 1. A variable name cannot start with a number
const user1 = "Temiloluwa"

// 2. A variable name cannot have a white space
const user_name = "Quyum";

// Snake casing
const student_name = "Prosper"
// Camel casing
const studentNameAtSqi = "Emmanuel" // lower camel casing
const StudentNameAtSqi = "Joyce" // upper camel casing 

// 3. Variable names can start with an underscore or a dollar sign
const _student = "Michael"
const $student = "Joel"


// 4. Variable names should match with what they are or what they represent
var studentName = "Joy";

// 5. Variable names cannot be Javascript keywords
// Keywords - for, const, alert, switch, try, foreach, onclick, function, var, let, innerHTML, innerText, Math

// const foreach = 5;

const userName = "Ridwan"

var password = 567

// Displaying variables
// Alert
// alert(567778);

// Console - mostly used for debugging
console.log($student, studentName, password, userName);

// Operators +, -, *, /
let x = 5;
let y = 10;
console.log(((4 + 5 - 17) * 5 ) / 56 );

// InnerText and innerHTML
document.getElementById('display').innerHTML +=  "<br>" + "Welcome to Level 2";

// Concatenation - addition

const change = "jjkjkj"
function changeName() {
    document.getElementById('user').innerText = "Joyce";
    document.getElementById('username').innerText = "Joyce";
}


function changeText() {
    document.getElementById('welcome').style.fontSize = '40px'
    document.getElementById('welcome').style.color = "red";
    document.getElementById('welcome').style.backgroundColor = "blue"
    document.getElementById('welcome').style.marginTop = "20px"
}

function hideWelcome() {
    document.getElementById('welcome').style.display = "none";
}

function showWelcome() {
    document.getElementById('welcome').style.display = 'block'
}

function changeButtonText() {
    document.getElementById('text').innerText = 'I am open';
    document.getElementById('textButton').innerText = "Close"
}

function switchMode() {
    if (document.getElementById('switch').innerText == 'Dark mode') {
        document.getElementById('body').style.backgroundColor = "black";
        document.getElementById('body').style.color = "white";
        document.getElementById('switch').innerText = "Light mode";
    }else {
        document.getElementById('body').style.backgroundColor = "white";
        document.getElementById('body').style.color = "Black";
        document.getElementById('switch').innerText = "Dark mode";
    }
}

let sky = 'sunny'

// Assignment operators = and comparison operators  ==
// Conditional statements - If,  else, 
if (sky == 'cloudy') {
    alert('It will rain');
}else if(sky == 'sunny') {
    alert('It is sunny')
}
else {
    alert('It will not rain')
}

// If the sky is cloudy, then it will rain



// Parameterized functions
function myFunction(userInput) {
   
  console.log(userInput);   
}

function showNumber(num) {
    if (document.getElementById('displayNumber').innerText == 0 ) {
        document.getElementById('displayNumber').innerText = num;   
    }else {
        document.getElementById('displayNumber').innerText +=num
    }   
}

function calculate() {
    let userCalculation = document.getElementById('displayNumber').innerText;

    let calculation = eval(userCalculation);
    document.getElementById('displayNumber').innerText = calculation   
}