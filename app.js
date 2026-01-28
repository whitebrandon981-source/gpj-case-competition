/**
 * APP.JS
 * Main logic for GPJ Case Competition Website
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Animations FIRST (so site isn't invisible if data fails)
    initScrollAnimations();
    initStickyNav();

    // 2. Render Content (Safely)
    if (typeof siteContent !== 'undefined') {
        try {
            initContentRendering();
        } catch (e) {
            console.error("Content rendering failed:", e);
        }
    } else {
        console.error("siteContent is missing. Check content/siteContent.js");
        // Fallback: Make things visible if data is missing
        document.querySelectorAll('.section-reveal').forEach(el => el.classList.add('visible'));
    }
});

function initContentRendering() {
    // 1. Render Announcements
    const updatesContainer = document.getElementById('updates-wrapper');
    if (updatesContainer && siteContent.announcements) {
        // Sort by date descending
        const sortedUpdates = [...siteContent.announcements].sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );

        updatesContainer.innerHTML = sortedUpdates.map(item => {
            // Format date slightly
            const dateObj = new Date(item.date);
            const dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            return `
                <div class="update-card" onclick="${item.link ? `window.location.href='${item.link}'` : ''}">
                    <span class="update-date">${dateStr}</span>
                    <h3 class="update-title">${item.title}</h3>
                    <p>${item.description}</p>
                    ${item.link ? `<a href="${item.link}" class="update-link">${item.linkText || 'Read More'} -></a>` : ''}
                </div>
            `;
        }).join('');
    }

    // 2. Render Timeline
    const timelineContainer = document.getElementById('timeline-wrapper');
    if (timelineContainer && siteContent.keyDates) {
        timelineContainer.innerHTML = siteContent.keyDates.map((item, index) => {
            const isActive = item.status === 'active' || item.status === 'upcoming';
            return `
                <div class="timeline-item ${isActive ? 'active' : ''}">
                    <div class="timeline-node"></div>
                    <span class="timeline-date">${item.date}</span>
                    <span class="timeline-status">${item.status}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                </div>
            `;
        }).join('');
    }

    // 3. Render FAQ
    const faqContainer = document.getElementById('faq-wrapper');
    if (faqContainer && siteContent.faq) {
        faqContainer.innerHTML = siteContent.faq.map(item => `
            <div class="faq-item" style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-gpj-green-primary); margin-bottom: 0.5rem;">${item.question}</h4>
                <p style="color: var(--color-text-muted);">${item.answer}</p>
            </div>
        `).join('');
    }
}

function initScrollAnimations() {
    // Set up delayed animations on load
    const delayedElements = document.querySelectorAll('[data-delay]');
    delayedElements.forEach(el => {
        const delay = el.getAttribute('data-delay');
        el.style.animationDelay = `${delay}ms`;
    });

    // Intersection Observer for Section Reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-reveal').forEach(section => {
        sectionObserver.observe(section);
    });
}

function initStickyNav() {
    const nav = document.querySelector('.sticky-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Simple smooth scroll offset correction
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}
