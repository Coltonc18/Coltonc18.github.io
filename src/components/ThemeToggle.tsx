export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        background: 'var(--framer-color-bg-secondary)',
        border: '1px solid var(--framer-color-border)',
        color: 'var(--framer-color-text-primary)',
        borderRadius: '0.5rem',
        padding: '0.4rem 0.75rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        lineHeight: 1,
      }}
    >
      Theme
    </button>
  );
}
