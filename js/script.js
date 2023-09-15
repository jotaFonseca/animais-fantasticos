import Scroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropdow from "./modules/dropdow.js";
import menuMobile from "./modules/menu-mobile.js";
import funcionamneto from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import animationScroll from "./modules/scroll-animacao.js";

const scroll = new Scroll('[data-menu="suave"] a[href^="#"]');
scroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

modal();
tooltip();
dropdow();
menuMobile();
funcionamneto();
initFetchAnimais();
initFetchBitcoin();
animationScroll();
