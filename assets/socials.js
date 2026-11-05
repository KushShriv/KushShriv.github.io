// One source of truth for every icon row on the site. Edit the lists here.
(() => {
  const ICONS = {
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    substack: '<path d="M5 4h14M5 8h14M5 12v8l7-4 7 4v-8z"/>',
    x: '<path fill="currentColor" stroke="none" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>',
    facebook: '<path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.3l.7-3.5H14V8.5z"/>',
    threads: '<path d="M17.5 9.5C17 6.5 15 5 12 5c-3.3 0-5.5 2.5-5.5 7s2.2 7 5.5 7c2.8 0 4.5-1.5 4.5-3.5 0-2.2-2-3-4.2-3-1.7 0-2.8.8-2.8 2 0 1 .9 1.7 2.2 1.7 2 0 3.2-1.5 3.2-4.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.6 2.3-2.6S16.5 11.3 16.5 13V16"/>',
    github: '<path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.9 3.4 5.9 3.7 5.9 3.7a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 4.6 9.9c0 4.5 2.7 5.5 5.3 5.8a2.7 2.7 0 0 0-.8 2.1V21"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>'
  };
  const base = document.currentScript.dataset.base || '';
  const ITEMS = {
    instagram: ['Instagram', 'https://instagram.com/KushShriv'],
    youtube: ['YouTube', 'https://youtube.com/@KushShriv'],
    substack: ['Substack', 'https://KushShriv.substack.com'],
    x: ['X', 'https://x.com/KushShriv'],
    facebook: ['Facebook', 'https://facebook.com/KushShriv'],
    threads: ['Threads', 'https://threads.net/@KushShriv'],
    linkedin: ['LinkedIn', 'https://www.linkedin.com/in/kushaagra-shrivastava/'],
    github: ['GitHub', 'https://github.com/KushShriv'],
    mail: ['Email', 'mailto:' + ['kushaagrashrivastava', 'gmail.com'].join('@')],
    grid: ['All socials', base + 'socials/']
  };
  const svg = k => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-email]').forEach(a => {
      const addr = ['kushaagrashrivastava', 'gmail.com'].join('@');
      a.href = 'mailto:' + addr;
      a.textContent = addr;
    });
    document.querySelectorAll('[data-socials]').forEach(el => {
      for (const k of el.dataset.socials.split(/\s+/)) {
        const [label, url] = ITEMS[k];
        const a = document.createElement('a');
        a.className = 'icon-btn';
        a.href = url;
        a.setAttribute('aria-label', label);
        a.title = label;
        if (/^https?:/.test(url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        a.innerHTML = svg(k);
        el.appendChild(a);
      }
    });
  });
})();
