// src/utils/theme.ts

export type Theme = 'light' | 'dark';

/**
 * Apply CSS variables & html class for Tailwind dark mode.
 */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

/**
 * Detect initial theme from:
 * 1. localStorage
 * 2. prefers-color-scheme
 */
export function getInitialTheme(): Theme {
  // 1. Cek localStorage
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  // 2. Cek OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}
