// const menu = () => {
// 	const menuOpenBtn = document.querySelector('.header__hamburger');
// 	const menuCloseBtn = document.querySelector('.header__close');
// 	const menu = document.querySelector('nav');
// 	const header = document.querySelector('.header');

// 	const menuOpenBtnHandler = () => {
// 		menu.classList.add('nav--active');
// 		header.classList.add('header--active');
// 	};

// 	const menuCloseBtnHandler = () => {
// 		menu.classList.remove('nav--active');
// 		header.classList.remove('header--active');
// 	};

// 	menuOpenBtn.addEventListener('click', menuOpenBtnHandler);
// 	menuCloseBtn.addEventListener('click', menuCloseBtnHandler);
// };

class Menu {
	constructor({
		openMenuBtnSelector,
		menuCloseBtnSelector,
		menuSelector,
		headerSelector,
		activeMenuClass,
		activeHeaderClass,
	}) {
		this.menuOpenBtn = document.querySelector(openMenuBtnSelector);
		this.menuCloseBtn = document.querySelector(menuCloseBtnSelector);
		this.menu = document.querySelector(menuSelector);
		this.header = document.querySelector(headerSelector);
		this.menuActiveClass = activeMenuClass;
		this.headerActiveClass = activeHeaderClass;
		this.init();
	}

	menuOpenBtnHandler(evt) {
		evt.preventDefault();
		this.menu.classList.add(this.menuActiveClass);
		this.header.classList.add(this.headerActiveClass);
	}

	menuCloseBtnHandler(evt) {
		evt.preventDefault();
		this.menu.classList.remove(this.menuActiveClass);
		this.header.classList.remove(this.headerActiveClass);
	}

	init() {
		this.menuOpenBtn.addEventListener('click', (evt) => this.menuOpenBtnHandler(evt));
		this.menuCloseBtn.addEventListener('click', (evt) => this.menuCloseBtnHandler(evt));
	}
}

export default Menu;
