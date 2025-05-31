// js/theme.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const moonIcon = '<i class="fas fa-moon"></i>'; // shown when in light mode
  const sunIcon  = '<i class="fas fa-sun"></i>';  // shown when in dark mode

  // 1. Determine initial theme
  const saved = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let current = saved || (systemDark ? 'dark' : 'light');
  apply(current);

  // 2. Toggle on click
  themeToggle.addEventListener('click', () => {
    current = (current === 'light') ? 'dark' : 'light';
    localStorage.setItem('theme', current);
    apply(current);
  });

  // 3. If user hasn’t explicitly chosen, follow system changes
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!saved) {
        current = e.matches ? 'dark' : 'light';
        apply(current);
      }
    });

  // Apply the theme by setting data-theme + button icon/label
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      themeToggle.innerHTML = sunIcon;
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.innerHTML = moonIcon;
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
});
