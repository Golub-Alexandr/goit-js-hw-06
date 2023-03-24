const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
	const name = event.target.value.trim();
	nameOutputEl.textContent = name === '' ? 'Anonymous' : name;
});