// const popup = () => {
// 	const popup = document.querySelector('.popup');
// 	const popupClose = document.querySelector('.popup__close');
// 	let wasOpened = false;
// 	const marginRight = window.innerWidth - document.body.clientWidth;

// 	const openPopup = () => {
// 		wasOpened = true;
// 		popup.classList.add('popup--active');
// 		document.body.style.overflow = 'hidden';
// 		document.body.style.marginRight = marginRight + 'px';
// 	};

// 	const closePopup = () => {
// 		popup.classList.remove('popup--active');
// 		document.body.style.overflow = '';
// 		document.body.style.marginRight = '';
// 	};

// 	const mouseHandler = (evt) => {
// 		if (evt.pageY < 100 && !wasOpened) {
// 			openPopup();
// 		}
// 	};

// 	setTimeout(() => {
// 		openPopup();
// 	}, 30000);

// 	popupClose.addEventListener('click', closePopup);
// 	setTimeout(() => {
// 		document.addEventListener('mousemove', mouseHandler);
// 	}, 5000);
// };

class Popup {
	constructor({popupSelector, popupOpenTrigger, popupCloseTrigger, popupActiveClass}) {
		this.popup = document.querySelector(popupSelector);
		this.popupOpen = document.querySelector(popupOpenTrigger);
		this.popupClose = document.querySelector(popupCloseTrigger);
		this.popupActiveClass = popupActiveClass;
		this.marginRight = window.innerWidth - document.body.clientWidth;
		this.wasOpened = false;
		this.init();
	}

	openPopup() {
		this.wasOpened = true;
		this.popup.classList.add(this.popupActiveClass);
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = this.marginRight + 'px';
	}

	closePopup() {
		this.popup.classList.remove('popup--active');
		document.body.style.overflow = '';
		document.body.style.marginRight = '';
	}

	mouseHandler(evt) {
		if (evt.pageY < 50 && !this.wasOpened) {
			this.openPopup();
		}
	}

	init() {
		setTimeout(() => {
			this.openPopup();
		}, 30000);

		try {
			this.popupOpen.addEventListener('click', () => this.openPopup());
		} catch (error) {}

		this.popupClose.addEventListener('click', () => this.closePopup());
		setTimeout(() => {
			document.addEventListener('mousemove', (evt) => this.mouseHandler(evt));
		}, 5000);
	}
}

export default Popup;
