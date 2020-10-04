export default class Tabs {
	constructor({
		tabsContainerSelector,
		tabsSelector,
		contentSelector,
		tabActiveSelector,
		contentActiveSelector,
	}) {
		this.tabsContainer = document.querySelector(tabsContainerSelector);
		this.tabs = document.querySelectorAll(tabsSelector) || [];
		this.tabSelector = tabsSelector.slice(1);
		this.content = document.querySelectorAll(contentSelector) || [];
		this.tabActiveClass = tabActiveSelector;
		this.contentActiveClass = contentActiveSelector;
		this.init();
	}

	clearActive() {
		this.tabs.forEach((item) => {
			item.classList.remove(this.tabActiveClass);
		});
		this.content.forEach((item) => {
			item.classList.remove(this.contentActiveClass);
		});
	}

	findIndex(value) {
		let index;
		this.tabs.forEach((item, i) => {
			if (item === value) {
				index = i;
			}
		});
		return index;
	}

	addActive(index) {
		this.tabs[index].classList.add(this.tabActiveClass);
		this.content[index].classList.add(this.contentActiveClass);
	}

	tabsContainerHandler(evt) {
		const target = evt.target;
		if (target.classList.contains(this.tabSelector)) {
			this.clearActive();
			const index = this.findIndex(target);
			this.addActive(index);
		}
	}

	init() {
		this.tabsContainer.addEventListener('click', (evt) => this.tabsContainerHandler(evt));
	}
}
