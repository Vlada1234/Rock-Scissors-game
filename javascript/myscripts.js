
function main (clicked_id) {
    //**** User choice  ******//
    var bt1 = document.getElementById("Scissors");
    var bt2 = document.getElementById("Rock");
    var bt3 = document.getElementById("Paper");
    alert("You choice is: " + clicked_id);
    
    //**** Computer Choice ******//
    var choices = ["Scissors","Rock", "Paper"];
    var random = Math.floor(Math.random() * 3);
    var computerChoice = choices[random];
    alert("Computer choice is: " + computerChoice);

    //***** Result ********//
    if(clicked_id === computerChoice) {
        alert("Draw");
    }
    else if (clicked_id === "Paper" && computerChoice ==="Rock" || 
    clicked_id ==="Rock" && computerChoice ==="Scissors" ||
    clicked_id ==="Scissors" && computerChoice ==="Paper") {
        alert("User win");
    } 
    else {
        alert("Computer win");
    }
    

}
    




    





