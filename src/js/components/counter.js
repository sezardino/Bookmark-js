const counter = () => {
	const counter = document.querySelector('.counter');
	const count = counter.textContent.split('.').reduce((a, b) => a + b);
	let value = +count;

	let timerId = setInterval(() => {
		value -= Math.floor(count / 20);
		const stringValue = value.toString();
		counter.textContent = `${stringValue.slice(0, -3)}.${stringValue.slice(-3)}`;
		if (value <= 0) {
			counter.textContent = 0;
			clearInterval(timerId);
		}
	}, 1000);
};

export default counter;
