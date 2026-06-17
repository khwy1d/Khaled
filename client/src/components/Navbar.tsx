import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    ar: [
      { label: "الرئيسية", href: "#home" },
      { label: "عني", href: "#about" },
      { label: "أسلوب عملي", href: "#process" },
      { label: "المشاريع", href: "#projects" },
      { label: "المهارات", href: "#skills" },
      { label: "التواصل", href: "#contact" },
    ],
    en: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "How I Work", href: "#process" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const currentNavItems = navItems[language];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-border z-50"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Wordmark */}
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Khaled<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {currentNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="px-3 h-9 rounded-full border border-border text-xs font-medium tracking-wide text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            {language === "ar" ? "EN" : "AR"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-foreground/70 hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container py-4 flex flex-col gap-1">
            {currentNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2.5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
