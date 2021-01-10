
const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    if (event.target.value === '') {
        return nameLabelRef.textContent = 'незнакомец';
    }
    nameLabelRef.textContent = event.target.value;
});
