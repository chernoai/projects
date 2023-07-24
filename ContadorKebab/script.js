const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');

let count = 0;

increaseButton.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
});

decreaseButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
});
