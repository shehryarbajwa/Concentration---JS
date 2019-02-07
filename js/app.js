/*
 * Create a list that holds all of your cards
 */
 var deck = document.querySelector('.deck');
deck.addEventListener('click', openCards, false);

var button = document.querySelector('button');
button.addEventListener('click', deregister, false);

var button2 = document.querySelector('.register');
button2.addEventListener('click', registerAgain, false);

var toggledCards = [];



function openCards(){
 alert("A card was clicked");
 var clickTarget = event.target;
  if (clickTarget.classList.contains('card') && (!clickTarget.classList.contains('match')) && toggledCards.length < 2 && !toggledCards.includes(clickTarget)){
   toggleCard(clickTarget);
   addToggledCards(clickTarget);
   if(toggledCards.length === 2){
     checkforMatch(clickTarget);
   }
  }
}

function deregister(){
alert("All card moves have been deregistered")
deck.removeEventListener('click', openCards);
}


function registerAgain(){
   alert("Register again request was initiated");
   deck.addEventListener('click', openCards, false);
   var clickTarget = event.target;
   if (clickTarget.classList.contains('card')){
   toggleCard(clickTarget);
   addToggledCards(clickTarget);
}
}

function toggleCard(clickTarget){
   clickTarget.classList.toggle('open');
   clickTarget.classList.toggle('show');
}

function addToggledCards(clickTarget){
   toggledCards.push(clickTarget);
   console.log(toggledCards);
}

function checkforMatch(){
  if (toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className){
    toggledCards[0].classList.toggle('match');
    toggledCards[1].classList.toggle('match');
    toggledCards = [];
    console.log("It is a match");
  } else {
    console.log("It is not a match");
    setTimeout(() => {
      toggleCard(toggledCards[0]);
      toggleCard(toggledCards[1]);
      toggledCards = [];
    }, 1500);
  }
}


function shuffleDeck(){
  const cardstoShuffle = document.querySelectorAll('.deck li');
  console.log("Cards to shuffle", cardstoShuffle);
  const arraytoShuffle = Array.from(cardstoShuffle);
  const shuffledCards = shuffle(arraytoShuffle);
  console.log("Shuffled Cards", shuffledCards);
  for(card of shuffledCards){
    deck.appendChild(card);
  }
}

shuffleDeck();



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
