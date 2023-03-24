const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const email = form.elements.email.value.trim();
	const password = form.elements.password.value.trim();

	if (!email || !password) {
		alert('All fields must be filled in');
	return;
	}

	const formData = {
		email,
		password
	};

	console.log(formData);

	form.reset();
});