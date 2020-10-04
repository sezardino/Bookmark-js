import form from './components/form';
import Menu from './components/menu';
import Tabs from './components/tabs';
import counter from './components/counter';
import Popup from './components/popup';

form();
counter();
new Menu({
	openMenuBtnSelector: '.header__hamburger',
	menuCloseBtnSelector: '.header__close',
	menuSelector: 'nav',
	headerSelector: '.header',
	activeMenuClass: 'nav--active',
	activeHeaderClass: 'header--active',
});
new Tabs({
	tabsContainerSelector: '.tabs',
	tabsSelector: '.tabs__item',
	contentSelector: '.content__item',
	tabActiveSelector: 'tabs__item--active',
	contentActiveSelector: 'content__item--active',
});

new Tabs({
	tabsContainerSelector: '.questions',
	tabsSelector: '.questions__button',
	contentSelector: '.questions__text',
	tabActiveSelector: 'questions__button--active',
	contentActiveSelector: 'questions__text--shown',
});

new Popup({
	popupSelector: '.popup',
	popupOpenTrigger: null,
	popupCloseTrigger: '.popup__close',
	popupActiveClass: 'popup--active',
});
