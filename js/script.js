import Scroll from "./modules/scroll-suave.js";
import animationScroll from "./modules/scroll-animacao.js";
import accordion from "./modules/accordion.js";
import tabNav from "./modules/tabNav.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropdow from "./modules/dropdow.js";
import menuMobile from "./modules/menu-mobile.js";
import funcionamneto from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scroll = new Scroll('[data-menu="suave"] a[href^="#"]');
scroll.init();

animationScroll();
accordion();
tabNav();
modal();
tooltip();
dropdow();
menuMobile();
funcionamneto();
initFetchAnimais();
initFetchBitcoin();
