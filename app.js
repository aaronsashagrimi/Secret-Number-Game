let secretNumber = 0;
let attempts = 0;
let listDrawnNumbers = [];
let maximumNumber = 10;


function assignTextElement(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function userVerification(){
    let userNumber = parseInt(document.getElementById("userValue").value);
    console.log(attempts);
    if (userNumber === secretNumber){
        assignTextElement("p", `You got the number at ${attempts} ${(attempts === 1) ? "attempt" : "attempts"}`);
        document.getElementById("restart").removeAttribute("disabled");
    } else{
        //I didn't get the number right.
        if (userNumber > secretNumber){
            assignTextElement("p", "The secret number is lower");
        } else {
            assignTextElement("p", "The secret number is greater");
        }
        attempts++;
        cleanBox();
    }
    return;
}

function cleanBox(){
    document.querySelector("#userValue").value = "";
}

function generateSecretNumber(){
    let generatedNumber = Math.floor(Math.random()*maximumNumber)+1;

    console.log(generatedNumber);
    console.log(listDrawnNumbers);
    //If we have already drawn all the numbers
    if(listDrawnNumbers.length == maximumNumber){
        assignTextElement("p", "All possible numbers have already been drawn.");
    } else {
            //Yes the generated number is included in the list
        if (listDrawnNumbers.includes(generatedNumber)){
            return generateSecretNumber();
        } else {
            listDrawnNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialConditions(){
    assignTextElement("h1","Secret Game Number");assignTextElement("p",`Choose a number from 1 to ${maximumNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame(){
    //Clean Box
    cleanBox();
    //Indicate number range message
    //generate secret number
    //Start the number of attempts
    initialConditions();
    //disable the new game button
    document.querySelector("#restart").setAttribute("disabled", "true");
}

initialConditions();