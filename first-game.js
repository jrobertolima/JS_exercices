<javascript>
// Check if the user is ready to play!
confirm("Are you ready to have fun?");
var age = prompt("What's your age?"); //Asking for user age

//Decision about user age
if(age < 13)
{
    console.log("You can play on your own.");
}
else
{
    console.log("Have fun!");
}

//Telling the history
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//User answer
var userAnswer = prompt("Do you want to race Bieber on stage?");

//Conidering the answer
if(userAnswer === "yes")
{ 
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{
    console.log("Oh no! Bieber shakes his head ad sings 'I set a pace, so I can race without pacing.'");
}

//Getting user feedback
var feedback = prompt("Please, rate the game in a range from 0 to 10");

if(feedback >= "8")
{
    console.log("Thank you! We sould race at the bext concert!");
}
else
{
    console.log("I'll keep practicing coding and racing." );
}
</javascript>