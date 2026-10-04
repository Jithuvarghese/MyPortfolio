import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { useAppPreferences } from "../context/AppPreferencesContext";
import ThemeToggle from "./ThemeToggle";
import LanguageMenu from "./LanguageMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { dictionary } = useAppPreferences();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll and allow Escape to dismiss while the mobile menu is open.
  useEffect(() => {
    if (!toggle) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setToggle(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [toggle]);

  return (
    <>
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || toggle
          ? "border-line bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`${styles.paddingX} mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6`}
      >
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-display text-fg"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          Jithu Varghese
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none items-center gap-8">
            {dictionary.navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`group relative inline-block py-2 font-mono text-xs uppercase tracking-label transition-colors hover:text-fg ${
                    active === nav.title ? "text-fg" : "text-muted"
                  }`}
                >
                  {nav.title}
                  <span className="absolute bottom-1 start-0 h-px w-0 bg-fg transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageMenu />
          </div>
        </div>

        <button
          type="button"
          className="icon-btn md:hidden"
          onClick={() => setToggle((value) => !value)}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          aria-label={toggle ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 h-px bg-current transition-all duration-300 ${
                toggle ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity duration-200 ${
                toggle ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 h-px bg-current transition-all duration-300 ${
                toggle ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>
    </motion.nav>

      {/* Sibling of the nav (not a child) so the nav's backdrop-filter cannot clip this fixed overlay. */}
      {toggle && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-bg pt-16 md:hidden"
        >
          <div className={`${styles.paddingX} flex min-h-full flex-col pb-10 pt-6`}>
            <div className="flex flex-wrap items-start gap-2">
              <ThemeToggle />
              <LanguageMenu inline />
            </div>

            <ul className="mt-8 list-none border-t border-line">
              {dictionary.navLinks.map((nav) => (
                <li key={nav.id} className="border-b border-line">
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                    className={`block py-5 font-heading text-4xl font-bold tracking-display transition-colors hover:text-fg ${
                      active === nav.title ? "text-fg" : "text-muted"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
