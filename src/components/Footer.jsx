import { Zap, Facebook, Instagram, Youtube, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
export default function Footer() {
  const WA = "https://wa.me/918056078068";
  const brandGradient = "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))";

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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 200,
     color: "var(--color-accent-contrast)",
      width: 54, height: 54,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "var(--color-shadow)",
      transition: "transform 0.2s, box-shadow 0.2s",
      textDecoration: "none",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
    >
      <img src="/whatsapp.svg"  />
    </a>
  );
}


  return (
    <footer style={{ background: "var(--color-surface-alt)", borderTop: "1px solid var(--color-border)", fontFamily: "'DM Sans',sans-serif" }}>
      <WhatsAppFloat />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 20px 0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 40,
          paddingBottom: 60,
          borderBottom: "1px solid var(--color-border-soft)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Link to="/">
                <img
                  src={theme === "light" ? "/logo-black.svg" : "/logo-white.svg"}
                  className="h-7"

                />
              </Link>
            </div>
            <p style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.8, maxWidth: 280, fontWeight: 300, marginBottom: 24 }}>
              We build conversion-focused websites and growth systems that turn visitors into clients — trusted by businesses worldwide.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ icon: Facebook, href: "https://www.facebook.com/share/v/1Lr5Pty1S8/" },
              { icon: Instagram, href: "https://www.instagram.com/the_stratedge/" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCCtbaoyWA3y9GB2WFcYDXEQ" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 36, height: 36, border: "1px solid var(--color-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-text-soft)", textDecoration: "none", transition: "all 0.2s",
                  background: "var(--color-surface)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-soft)"; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Services</div>
            {[
              "Business Websites",
              "Landing Pages",
              "E-commerce Stores",
              "Custom Web Apps",
              "Website Revamp",
              "Website Maintenance"
            ].map(s => (
              <div key={s} style={{ marginBottom: 12 }}>
                <a
                  href="#"
                  style={{
                    color: "var(--color-text-soft)",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-soft)"}
                >
                  {s}
                </a>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Company</div>
            {"About Us,Contact,Privacy Policy, Terms and Conditions".split(",").map(s => (
              <div key={s} style={{ marginBottom: 12 }}>
                <Link
                  to={s == "About Us" ? "/about" : s == "Contact" ? "/contact-us" : s == "Privacy Policy" ? "privacy-policy" : "terms-and-conditions"}
                  style={{ color: "var(--color-text-soft)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "var(--color-accent)"}
                  onMouseLeave={e => e.target.style.color = "var(--color-text-soft)"}
                >{s}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ icon: Phone, text: "+91 93611 87937\nWhatsApp: +91 80560 78068" },
              { icon: Mail, text: "admin@twinsundigital.com" },
              { icon: Clock, text: "Mon – Sat\n8:00 AM – 5:00 PM" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon size={14} color="var(--color-accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-line", fontWeight: 300 }}>{text}</span>
                </div>
              ))}
            </div>

          
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>© 2026 The Twinsun Digital. All rights reserved.</span>
          <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Made with ❤️ by <a href="https://saravanan-dev.vercel.app" target="_blank" className="font-bold text-(--color-accent)"> Saravanan </a></span>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer div { padding: 0 10px; }
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}