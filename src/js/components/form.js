const form = () => {
	const form = document.querySelector('form');
	const formInput = form.querySelector('input');
	const submitButton = form.querySelector('button');
	const indicator = form.querySelector('.form__indicator');

	const checkValidity = () => {
		const value = formInput.value;
		formInput.setCustomValidity(' ');
		let validity = true;
		if (!value.includes('@')) {
			validity = false;
			form.classList.add('form--error');
			indicator.textContent = "Whoops, make sure it's an email";
		}
		if (value.length === 0) {
			form.classList.add('form--error');
			validity = false;
			indicator.textContent = 'Line is too short!';
		}
		return validity;
	};

	const submitButtonHandler = (evt) => {
		const validity = checkValidity();
		if (!validity) {
			evt.preventDefault();
			return;
		} else {
			form.classList.add('form--success');
			indicator.textContent = 'You are subscribe';
			form.reset();
		}
	};

	const submitHandler = (evt) => {
		evt.preventDefault();
	};

	submitButton.addEventListener('click', submitButtonHandler);
	form.addEventListener('submit', submitHandler);
};

export default form;
