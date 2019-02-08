/*
 * Create a list that holds all of your cards
 */
 var deck = document.querySelector('.deck');
deck.addEventListener('click', openCards, false);

/*toggledCards array is an empty array that will hold the 2 cards clicked on for a potential match */
var toggledCards = [];

/*gameMoves allows us to initialize the gameMoves to be zero */
let gameMoves = 0;

/*openCards will have a clickTarget, if the click is on a card, and it is not a matched card, and the arrayLength is less than 2
toggledCards doesn't already include the clickTarget, then we toggle the cards accordingly */
function openCards(){
 alert("A card was clicked");
 var clickTarget = event.target;
  if (clickTarget.classList.contains('card') && (!clickTarget.classList.contains('match')) && toggledCards.length < 2 && !toggledCards.includes(clickTarget)){
   toggleCard(clickTarget);
   addToggledCards(clickTarget);
   if(toggledCards.length === 2){
     checkforMatch(clickTarget);
     addMove();
   }
  }
}

function checkScore(){
  if(moves === 2 || moves === 24){
    hideStar();
  }
}
/*hideStar will use the CSS property of style.display = none to hide a star */

function hideStar(){
  const starsNodeList = document.querySelectorAll('.stars li');
  console.log(starsNodeList);
  for(star of starsNodeList){
    star.style.display = 'none';
  }
}





/*toggleCard allows us to toggle the classList to open and show once a card is clicked on*/
function toggleCard(clickTarget){
   clickTarget.classList.toggle('open');
   clickTarget.classList.toggle('show');
}

/*addToggledCards allows us to chose the clickTarget and add it to the toggledCards array */
function addToggledCards(clickTarget){
   toggledCards.push(clickTarget);
   console.log(toggledCards);
}



/*checkForMatch allows us to check the toggledCards array and determines whether the first card chosen matches
the second card chosen. If they do match, then we change the classList and toggle it to match and then
reset the toggledCards array. In case it doesn't, we use the TimeOut function to make the cards toggle back to hide once a certain
time period has passed */
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

/*Shuffle deck will query the document for the deck, then create an array from the NodeList and perform the shuffle function on it.
Once the cards are shuffled, we then append the child elements of the deck. Since no new objects are being referenced, appendChild will not
create new elements for the deck */


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

/* addMove functionality allows us to increment the moves as 2 cards open each time */
function addMove(){
  gameMoves++;
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = gameMoves;
}


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
