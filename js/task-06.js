const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
	const inputLength = inputEl.value.trim().length;
	const dataLength = parseInt(inputEl.dataset.length);

	if (inputLength === dataLength) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	} else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	}
});