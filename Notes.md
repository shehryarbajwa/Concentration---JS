Learnings from the project:

1- To query a class:

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
