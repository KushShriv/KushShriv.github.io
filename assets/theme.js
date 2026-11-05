// Applies the saved or system theme before first paint, then wires the toggle.
(() => {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let pref = 'system';
  try { const s = localStorage.getItem('site-theme'); if (s === 'light' || s === 'dark') pref = s; } catch (_) {}
  const apply = () => { document.documentElement.dataset.theme = pref === 'system' ? (system.matches ? 'dark' : 'light') : pref; };
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const c = document.getElementById('theme');
    if (!c) return;
    c.querySelector(`input[value="${pref}"]`).checked = true;
    c.addEventListener('change', e => {
      pref = e.target.value;
      try { localStorage.setItem('site-theme', pref); } catch (_) {}
      apply();
    });
  });
})();
