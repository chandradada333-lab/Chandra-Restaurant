document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');
    const yearElement = document.querySelector('#current-year');

    navigationLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', link.getAttribute('href'));
        });
    });

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navigationLinks.forEach((link) => {
                    const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
                    link.toggleAttribute('aria-current', isCurrent);
                });
            });
        }, { rootMargin: '-35% 0px -55% 0px' });

        sections.forEach((section) => sectionObserver.observe(section));
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
