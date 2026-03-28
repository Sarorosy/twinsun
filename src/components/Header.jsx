import { ArrowRight, Menu, Zap, X, Sun, Moon } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CallModalContext } from "../contexts/CallModalContext";
/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light" || currentTheme === "dark") {
      return currentTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const WA = "https://wa.me/918056078068";

  const { open: openCall } = useContext(CallModalContext);


  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const nav = ["Home","About", "Services", "Contact Us"];
  const headerTextColor = scrolled ? "var(--color-text-strong)" : "var(--color-text)";
  const headerLinkColor = scrolled ? "var(--color-text-muted)" : "var(--color-text-soft)";

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "var(--color-header-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "14px 0" : "22px 0",
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: scrolled ? "var(--color-shadow)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none", gap: 3 }}>
            <img
              src={theme === "light" ? "/logo-black.svg" : "/logo-white.svg"}
              className="h-7"
            />
            <span style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-strong))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              paddingLeft: 1,
            }}>Digital Solutions</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-nav">
          {nav.map(n => (
            <Link key={n} to={`/${n == "Home" ? "" : n == "Contact Us" ? "contact-us" : n.toLowerCase()}`} style={{
              color: headerLinkColor, fontSize: 13, fontWeight: 500,
              letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--color-accent)"}
              onMouseLeave={e => e.target.style.color = headerLinkColor}
            >{n}</Link>
          ))}
        </nav>


        {/* CTA */}
        <button
          type="button"
          onClick={() => openCall()}
          style={{
            background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
            color: "var(--color-accent-contrast)", padding: "10px 20px", fontSize: 12,
            fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            transition: "opacity 0.2s, transform 0.2s",
            boxShadow: "var(--color-shadow)", border: "none", cursor: "pointer"
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          className="desktop-cta"
        >
          Get Free Strategy Call <ArrowRight size={14} />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            background: scrolled ? "var(--color-surface)" : "rgba(255,255,255,0.08)",
            border: "1px solid var(--color-border)",
            color: headerTextColor,
            cursor: "pointer",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backdropFilter: "blur(16px)",
          }}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}

        </button>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: headerTextColor, cursor: "pointer", padding: 4 }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(6px)",
                zIndex: 99,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100vh",
                width: "85%",
                maxWidth: 360,
                background: "var(--color-surface)",
                zIndex: 100,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.15)",
              }}
            >
              {/* Top */}
              <div>
                <div style={{ marginBottom: 30 }}>
                  <img src="/logo.png" style={{
                    height: 40, filter: theme === "light"
                      ? "invert(1) brightness(0.2)"
                      : "none"
                  }} />
                </div>

                {nav.map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      padding: "14px 0",
                      borderBottom: "1px solid var(--color-border-soft)",
                    }}
                  >
                    <Link
                      to={`/${n === "Contact" ? "contact-us" : n.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        textDecoration: "none",
                        color: "var(--color-text-strong)",
                        letterSpacing: 1,
                      }}
                    >
                      {n}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom */}
              <div>
                {/* CTA */}
                <button
                  type="button"
                  onClick={() => openCall()}
                  style={{
                    display: "block",
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                    color: "var(--color-accent-contrast)",
                    padding: "14px",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    marginBottom: 20,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Free Consultation
                </button>

                {/* Social + Contact */}
                <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                  <p style={{ marginBottom: 6 }}>📧 your@email.com</p>
                  <p style={{ marginBottom: 6 }}>📱 +91 93611 87937</p>

                  <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                    <a href="#" style={{ textDecoration: "none" }}>Instagram</a>
                    <a href="#" style={{ textDecoration: "none" }}>LinkedIn</a>
                    <a href="#" style={{ textDecoration: "none" }}>Twitter</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:900px){
          .desktop-nav,.desktop-cta{display:none!important;}
          .mobile-menu-btn{display:block!important;}
        }
        @media(min-width:901px){
          .mobile-menu-btn{display:none!important;}
          .desktop-nav,.desktop-cta{display:flex!important;}
        }
        @media(max-width:600px){
          header div { padding: 0 10px; }
          nav a { font-size: 12px; }
        }
      `}</style>
    </header>
  );
}