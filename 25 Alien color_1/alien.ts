
let alien_color : string = 'green';
if (alien_color == 'green'){
    console.log("Player just earned 5 points!");
};

alien_color = "red";
if( alien_color === 'green'){
    console.log("Player just earned 5 points!");
}

else{
    console.log("You are out!! try again.");
}