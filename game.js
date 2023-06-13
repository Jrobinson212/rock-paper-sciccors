//variables
    var  wins = 0;
    var  losses = 0;
    var  ties = 0;
    
    var choices = ["R", "P", "S"]

// alert, confirm, prompt

// p[ayers choose R, P , S

    //human choice - get choice from user input
    var humanChoice = prompt("choose R, P or S")
    console.log(humanChoice)

    //computer randomly chooses 
    var randomNum = Math.floor(Math.random() * 3)
    console.log(choices[randomNum])

// compare choices
    //if humanChoice is S, and computerChoice is P
    //if the humanChoice is R ans computerChoice is S OR 
    //if humanChoice is R and computerChoice is S OR
    //if humanChoice is P and computerChoice is R
        //alert that we win
        //increase wins
    
    //if humanChoice === computerChoice

        //alert that we ties- 
     //increse ties

    //else
    //alert that welost
    //increase losses

    //ask user "do you want to play again?"
        // if yes
            //restart game
    //if no
            //exit game


