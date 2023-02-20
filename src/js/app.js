import { burger } from './burger.js';
import { dropdownMenu } from './dropdown.js';
import { introSwiper } from './intro-swiper.js';
import * as flsFunctions from './modules/functionsWebP.js';
import { productDaySwiper, productDaySwiperImg } from './product-day-swiper.js';
import { timer } from './product-day-timer.js';
import { productDayTippy } from './product-day-tippy.js';
import { saleTab } from './sale-tab.js';
import { saleSwiper, tabsSwiper } from './tabs-swiper.js';

flsFunctions.isWeb();
burger();
dropdownMenu();
introSwiper();
saleTab();
tabsSwiper();
saleSwiper();
productDaySwiper();
productDaySwiperImg();
timer();
productDayTippy();