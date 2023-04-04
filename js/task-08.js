const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', e => {
	e.preventDefault();

	const email = loginFormEl.elements.email.value.trim();
	const password = loginFormEl.elements.password.value.trim();

	if (!email || !password) {
		alert('Please fill in all fields');
	return;
	}

	const formData = {
		email,
		password
	};

	console.log(formData);

	loginFormEl.reset();
});
