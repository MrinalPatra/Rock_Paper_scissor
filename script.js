let userScore = 0; //for updating scores 
let compScore = 0;

// accessing all the necessary classes and id's 
const choices = document.querySelectorAll(".choice"); 
const mssg = document.querySelector("#msg");
let compS = document.querySelector("#comp-score");
let userS = document.querySelector("#user-score");

//function block where computer chooses his play
const compChoice = () => {
    const available = ["Scissors" , "Rock" , "Paper"];
    const result = Math.floor(Math.random()*3); //random function is used to make the game fair 
    return available[result]; //multipled with 3 to make the index fall btw 0,1,2 using floor function as random gives values btw 0 and 1
};

//draw function executes when it's a draw btw user and computer 
const draw = (userChoice) => {
    if (mssg instanceof HTMLElement) { //style tag was not acessable so i used this approach 
        mssg.style.backgroundColor = "Grey";
    }
    mssg.innerText = ` It's a DRAW! You both choosed ${userChoice}`; //draw msg 
};

//when win or lose condition arrises this function block executes 
const showWinner = (userwin, userChoice,genComchoice) => {
    if (userwin){ //check is done using boolean value stored in  userwin 
        userScore++; //score is updated 
        if (mssg instanceof HTMLElement) {
            mssg.style.backgroundColor = "Green";
        }
        mssg.innerText = `You WON! Your ${userChoice} beats Computer's ${genComchoice}`;
        userS.innerText = userScore; //actual scores are manipulated on the webpage 
    }
    else{
        compScore++; //score is updated 
        if (mssg instanceof HTMLElement) {
            mssg.style.backgroundColor = "Red";
        }
        mssg.innerText = ` You LOSE! Computer's ${genComchoice} beats Your ${userChoice}`;
        compS.innerText = compScore; //actual scores are manipulated on the webpage 
    }
};

//this function block each time user press his play 
const startgame = (userChoice) => {
    const genComchoice = compChoice(); //computer choice is generated 
   
    if(userChoice === genComchoice){ //check for draw condition   
        draw(userChoice);
    }
    
    else { 
       let userwin = true; //win or lose condition decision is taken by this value 
        if( userChoice === "Rock" ){ //conditions are checked 
            userwin = genComchoice === "Paper" ? false : true;
        }
        else if( userChoice === "Scissors" ){
            userwin = genComchoice === "Rock" ? false : true; 
        }
        else{
            userwin = genComchoice === "Scissors" ? false : true;
        }
        showWinner(userwin, userChoice, genComchoice); //checking and printing winner 
    }
}

//on click event is defined 
choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id"); //user choice is accesed using id's on the images 
        startgame(userChoice); //id's are passed for references of userchoices 
    })
})

//happy coding, though it sucks!