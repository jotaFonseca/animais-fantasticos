import Scroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import dropdow from "./modules/dropdow.js";
import menuMobile from "./modules/menu-mobile.js";
import funcionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import animationScroll from "./modules/scroll-animacao.js";

const scroll = new Scroll('[data-menu="suave"] a[href^="#"]');
scroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

dropdow();
menuMobile();
funcionamento();
initFetchAnimais();
initFetchBitcoin();
animationScroll();
