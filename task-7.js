const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function changeSize(event) {
    textRef.style.fontSize = `${Number(event.target.value)}px`;    
}

rangeRef.addEventListener('input', changeSize);

