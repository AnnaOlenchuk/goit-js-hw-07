const inputRef = document.querySelector('#validation-input');
const validLength = Number(inputRef.dataset.length);

inputRef.addEventListener('input', inputValidation);


function inputValidation(event) {
    let inputValue = event.target.value.length;
    console.log(event.target.value.length);
    
    if (inputValue === validLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');

    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } 
};