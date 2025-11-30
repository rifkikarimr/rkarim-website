import { Cloud, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Certifications",
    "Blog",
    "Contact",
  ];

  // Track active section during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      let current = "about";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (!element) return;

    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-md transition-all">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer group"
            aria-label="Go to top"
          >
            <Cloud className="text-blue-600 w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
              Rifki Karim R
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {item}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </button>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* Resume Button (Desktop) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              );
            })}

            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 py-3 rounded-lg"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-5 h-5" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5" /> Light Mode
                </>
              )}
            </button>

            {/* Resume Button (Mobile) */}
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
