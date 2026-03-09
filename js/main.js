// ── SCROLL TO TOP ON LOAD ──
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {

  // ── SCROLL REVEAL ──
  // Small delay so the page settles before the observer kicks in
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i * 0.05) + 's';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }, 100);

    // ── ACTIVE NAV LINK HIGHLIGHT ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
    let current = '';
    const scrollBottom = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // If at the bottom of the page, force the last section active
    if (scrollBottom >= pageHeight - 10) {
        current = sections[sections.length - 1].id;
    } else {
        sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
    }

    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
    });
    });

});

