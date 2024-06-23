function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleButton(newTheme);
  }
  
  function updateThemeToggleButton(theme) {
    const button = document.querySelector('.theme-toggle');
    button.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  
  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    if (defaultDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  
    updateThemeToggleButton(defaultDark ? 'dark' : 'light');
  }
  
  document.addEventListener('DOMContentLoaded', setInitialTheme);