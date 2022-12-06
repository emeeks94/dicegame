var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generated a random whole number 

var randomDiceImage = 'dice' + randomNumber1 + '.png'; // We have assigned a name to our random dice

var randomImageSource = 'images/' + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource); // we yave set therandom dice as an attribute for the new one


// Second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number generated from 1-6

var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

// Change the title to reflect the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Win!';
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Win!';
}
else {
    document.querySelector('h1').innerHTML = 'Draw/Tie!';
}