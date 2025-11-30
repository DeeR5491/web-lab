import './styles/tw.css';
import './styles/main.scss';

import { initThemeToggle } from '/src/js/common/theme.js';
import { initAbout } from '/src/js/app/aboutPage.js';

initThemeToggle();
initAbout().catch(error => {
    console.error('Помилка ініціалізації About page:', error);
});