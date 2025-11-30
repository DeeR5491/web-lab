import './styles/tw.css';
import './styles/main.scss';

import { initThemeToggle } from '/src/js/common/theme.js';

initThemeToggle();

const page = document.body.dataset.page;

const routes = {
    about:    () => import('./js/app/aboutPage.js').then(m => m.initAbout()),
};

if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка ініціалізації сторінки:', err);
    });
}
