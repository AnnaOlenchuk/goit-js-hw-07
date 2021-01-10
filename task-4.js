const counterValueRef = document.querySelector('#value');
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);

function increment () {
    counterValue += 1;

    counterValueRef.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;

    counterValueRef.textContent = counterValue;
};