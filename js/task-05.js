const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
	const name = event.target.value.trim();
	nameOutputEl.textContent = name === '' ? 'Anonymous' : name;
});