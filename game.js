//variables
    var  wins = 0;
    var  losses = 0;
    var  ties = 0;
    
    var choices = ["R", "P", "S"]

// alert, confirm, prompt

// p[ayers choose R, P , S

    //human choice
    var humanChoice = prompt("choose R, P or S")
    console.log(humanChoice)

    //random computer choice
    var randomNum = Math.floor(Math.random() * 3)
    var computerChoices = choices[randomNum]
 console.log("Human: " + humanChoice)
 console.log("Compter: " + computerChoices)
// compare choices

if ( 
 humanChoice === "S" && computerChoices === "P" ||
 humanChoice === "R" && computerChoices === "S" || 
 humanChoice === "p" && computerChoices === "R" 

) { alert("You won") 
    wins++

} else if (humanChoice === computerChoices){
alert("Round tied") 
    ties++
}
    
    //if humanChoice is P and computerChoice is R
        //alert that we win
        //increase wins
    
    //if 

    

    else {
        alert ("You lost")
        losses++
    }
    
    //show scores
    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)


    //alert that welost
    //increase losses

    //ask user "do you want to play again?"
        // if yes
            //restart game
    //if no
            //exit game


