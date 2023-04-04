const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', input);

function input(event) {
   text.style.fontSize = `${event.target.value}px`
}