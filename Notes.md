Learnings from the project:

1-To query a class:

const cards = document.querySelector('.card');

2-By declaring it with a const, we can then not change the value of the const. Thus we need to be able to modify it.

let cards = document.querySelector('.card');

Now, we can go ahead and modify it since the querySelector method we just used above will return a single card and we want to display the entire list

cards = document.querySelectorAll('.card');

This will allow us to change our cards method to now include all the cards

3- Next we want to add an eventListener so that once a card is clicked, we can then change the position or print a message and all sorts of different things

for (card of cards){
  card.addEventListener('click' () => {
    console.log("Hello, I am a card");
    });
}

4-There is a problem with this approach. It will handle 16 different events which will impact performance. Instead, we could just use eventDelegation instead of eventHandling

5-We could do better. Instead, we could modify the method by adding an event target which will let us know what element was clicked

const deck = document.querySelectorAll('.deck');
deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('card')){
    console.log("I am a card")
  }
}

6-Contains and classList refer to two unique concepts. Contains refers if the specified element contains the given text. ClassList refers to the entire classList within an element. In our case, the deck's entire ClassList

7-Adding the toggle events

deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('card')){
    clickTarget.classList.toggle('open');
    clickTarget.ClassList.toggle('show');
  }
}

8-To avoid complexity, we can create our own function to deal with the eventTargetListeners

func toggleCard(clickTarget){
  clickTarget.classList.toggle('open');
  clickTarget.classList.toggle('show');
}

9-Now we can just call the function from within the deck.addEventListener command

deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('card')){
    toggleCard(clickTarget);
  }
  });

10-This just cleaned our code much faster

11-Next we create an empty array of toggledCards and then push each toggled card to the array.

let toggledCards = [];

deck.addEventListener('click', event => {
      const clickTarget = event.target;
      if (clickTarget.classList.contains('card')){
        toggleCard(clickTarget);
        addToggleCard(clickTarget);
      }
  })

  function toggleCard(clickTarget){
    clickTarget.classList.toggle('open');
    clickTarget.ClassList.toggle('show');
  };

  function addToggleCard(clickTarget){
    toggledCards.push(clickTarget);
    console.log(toggledCards);
  }

12-Now we want 2 cards in the toggledCards array. We need 2 cards since only 2 cards are allowed to match. If we compare three cards, we will not be able to create the match logic. Thus, we can create a conditional that demands that the length of the toggledArray is less than 2 and if it is 2, we can display a message to the console.


deck.addEventListener('click', event => {
  const clickTarget = event.target;

  if (clickTarget.classList.contains('card') && toggledCards.length < 2){
    toggleCard(clickTarget);
    addToggleCard(clickTarget);

    if (toggledCards.length === 2){
      console.log("There are two toggled Cards");
    }
  }
})

13-
