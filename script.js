(function() {
    const app = document.getElementById('app');

    function detectAndCompensateZoom() {
        const browserZoom = window.outerWidth / window.innerWidth;

        // Фиксируем точные значения для проблемных зумов
        let finalZoom;

        if (browserZoom >= 1.09 && browserZoom <= 1.11) {
            finalZoom = 1.10; // Точное значение для 110%
        } else if (browserZoom >= 0.89 && browserZoom <= 0.91) {
            finalZoom = 0.90; // Точное значение для 90%
        } else if (browserZoom >= 1.74 && browserZoom <= 1.76) {
            finalZoom = 1.75; // Точное значение для 175%
        } else {
            // Для остальных - оригинальное значение
            finalZoom = browserZoom;
        }

        document.documentElement.style.setProperty('--browser-zoom', finalZoom);
        window.scrollTo(0, 0);
    }

    window.addEventListener('resize', detectAndCompensateZoom);

    window.addEventListener('scroll', () => {
        window.scrollTo(0, 0);
    });

    window.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });

    detectAndCompensateZoom();

    setInterval(() => {
        window.scrollTo(0, 0);
    }, 100);
})();