import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Search, TrendingUp, FileText, Monitor,
  Palette, CheckCircle, MessageCircle, Phone, Zap,
  Star, ChevronDown, ChevronUp,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import FloatingOfferButton from "../components/FloatingOfferButton";
import ClaimOfferSection from "../components/ClaimOfferSection";

const WA = "https://wa.me/918056078068";

/* ── Google Fonts injected once ── */
function useGoogleFonts() {
  useEffect(() => {
    const id = "gf-stratedgee";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: "var(--color-bg)",
      color: "var(--color-text)",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      paddingTop: 30,
    }}>
      {/* BG texture grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      {/* Accent glow top-right */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 600, height: 600,
        background: "radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Thin diagonal accent line */}
      <div style={{
        position: "absolute", top: 0, right: "40%", bottom: 0,
        width: 1, background: "linear-gradient(to bottom,transparent,rgba(139,92,246,0.25),transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px 80px", width: "100%", position: "relative", zIndex: 2 }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, color: "var(--color-text-faint)", fontSize: 12, letterSpacing: 1 }}>
          <span>Home</span>
          <span style={{ color: "var(--color-accent)" }}>›</span>
          <span style={{ color: "var(--color-accent)" }}>Services</span>
        </div>

        {/* Pre-headline pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
          border: "1px solid var(--color-border)", padding: "8px 18px",
        }}>
          <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
            What We Offer
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',serif",
          fontSize: "clamp(42px,6vw,72px)",
          fontWeight: 900, color: "var(--color-text-strong)",
          lineHeight: 1.08, marginBottom: 24, letterSpacing: -1,
          maxWidth: 700,
        }}>
          Our Services
        </h1>

        <p style={{
          color: "var(--color-text-soft)", fontSize: 17, lineHeight: 1.85,
          maxWidth: 560, fontWeight: 300, marginBottom: 0,
        }}>
          Complete website solutions designed to{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>build, improve, and launch your online presence.</span>
        </p>
      </div>

      <style>{`@media(max-width:600px){h1{font-size:clamp(32px,8vw,52px)!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE / TICKER
═══════════════════════════════════════════════ */
const items = ["Website Development", "SEO-Friendly", "Mobile-Friendly", "Website Revamp", "Custom Web Apps", "Domain", "Hosting", "Support"];


/* ═══════════════════════════════════════════════
   SERVICES GRID
═══════════════════════════════════════════════ */
const SERVICES = [
  {
    num: "01",
    icon: Monitor,
    label: "Website Development",
    short: "Web Build",
    desc: "We build modern business websites that are fast, clean, and designed to convert visitors into enquiries. From company sites to landing pages, every build is tailored to your brand and business goals.",
    deliverables: [
      "Custom business website design",
      "Multi-page website development",
      "Landing page creation",
      "Contact and enquiry forms",
      "Basic on-page setup and launch support",
    ],
  },
  {
    num: "02",
    icon: Search,
    label: "SEO-Friendly Websites",
    short: "SEO Ready",
    desc: "Our websites are built with SEO-friendly structure so your business has a stronger foundation for search visibility. We focus on page structure, speed, metadata, clean code, and search-friendly layouts.",
    deliverables: [
      "SEO-friendly page structure",
      "Metadata and heading setup",
      "Image and content optimization",
      "Speed-aware development",
      "Technical SEO basics during build",
    ],
  },
  {
    num: "03",
    icon: Zap,
    label: "Mobile-Friendly Design",
    short: "Responsive",
    desc: "Every website we create is designed to work smoothly across mobile, tablet, laptop, and desktop. We make sure your site looks professional and stays easy to use on every screen size.",
    deliverables: [
      "Responsive layout design",
      "Mobile-first section optimization",
      "Cross-device UI adjustments",
      "Touch-friendly interactions",
      "Performance-conscious front-end build",
    ],
  },
  {
    num: "04",
    icon: Palette,
    label: "Old Website Revamp",
    short: "Revamp",
    desc: "If your current website feels outdated, slow, or difficult to use, we can redesign and rebuild it with a fresh look, better structure, stronger performance, and improved usability.",
    deliverables: [
      "UI refresh and redesign",
      "Page restructuring",
      "Speed and usability improvements",
      "Mobile responsiveness upgrade",
      "Modernized business presentation",
    ],
  },
  {
    num: "05",
    icon: TrendingUp,
    label: "Custom Web Applications",
    short: "Web Apps",
    desc: "We develop custom web applications for businesses that need more than a standard website. From internal tools to advanced workflow systems, we create solutions around your exact requirements.",
    deliverables: [
      "Requirement-based application planning",
      "Admin panels and dashboards",
      "Custom business workflows",
      "Database-driven functionality",
      "Scalable front-end and back-end setup",
    ],
  },
  {
    num: "06",
    icon: FileText,
    label: "Domain & Hosting Support",
    short: "Launch Setup",
    desc: "We help you launch with less hassle by supporting domain connection, hosting setup, deployment, and live website configuration. Eligible packages can include free domain and hosting support.",
    deliverables: [
      "Domain guidance and setup",
      "Hosting configuration support",
      "Website deployment",
      "SSL and launch checks",
      "Free domain and hosting support for eligible packages",
    ],
  },
  {
    num: "07",
    icon: CheckCircle,
    label: "Website Maintenance & Support",
    short: "Support",
    desc: "After launch, we help keep your website stable, updated, and working properly. This includes content updates, issue fixes, and technical support when you need it.",
    deliverables: [
      "Bug fixes and issue resolution",
      "Content and section updates",
      "Technical maintenance support",
      "Performance review guidance",
      "Ongoing website assistance",
    ],
  },
];

function ServicesGrid() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Web Service Suite</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',serif",
            fontSize: "clamp(32px,4vw,48px)", fontWeight: 700,
            color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5,
          }}>
            Complete Website<br />
            <span style={{ color: "var(--color-accent)" }}>Solutions</span>
          </h2>
          <p style={{ color: "var(--color-text-soft)", fontSize: 14, maxWidth: 320, lineHeight: 1.7, fontWeight: 300 }}>
            Every service is tailored around your business needs, launch goals, and long-term website growth.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {SERVICES.map(({ num, icon: Icon, label, short, desc, deliverables }) => {
            const isOpen = expanded === num;
            return (
              <div
                key={num}
                style={{
                  background: isOpen ? "var(--color-surface-strong)" : "var(--color-surface-alt)",
                  border: isOpen ? "1px solid var(--color-border-strong)" : "1px solid var(--color-border-soft)",
                  transition: "all 0.25s",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Top accent when open */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: isOpen ? "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))" : "transparent",
                  transition: "background 0.25s",
                }} />

                {/* Header row */}
                <button
                  onClick={() => setExpanded(isOpen ? null : num)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 28,
                    padding: "32px 36px", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left",
                  }}
                >
                  {/* Number */}
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans',serif", fontSize: 13, fontWeight: 700,
                    color: "var(--color-accent)", letterSpacing: 1, minWidth: 28,
                  }}>{num}</span>

                  {/* Icon box */}
                  <div style={{
                    width: 48, height: 48, border: "1px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isOpen ? "var(--color-accent-soft)" : "transparent",
                    transition: "background 0.25s", flexShrink: 0,
                  }}>
                    <Icon size={20} color="var(--color-accent)" />
                  </div>

                  {/* Title */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans',serif",
                      fontSize: "clamp(17px,2vw,22px)", fontWeight: 700,
                      color: "var(--color-text-strong)", lineHeight: 1.2,
                    }}>{label}</div>
                    <div style={{
                      color: "var(--color-accent)", fontSize: 10, letterSpacing: 2,
                      textTransform: "uppercase", fontWeight: 600, marginTop: 4,
                    }}>{short}</div>
                  </div>

                  {/* Toggle icon */}
                  <div style={{
                    width: 36, height: 36, border: "1px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "var(--color-text-soft)",
                  }}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div style={{ padding: "0 36px 40px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
                    {/* Description */}
                    <div>
                      <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>
                        {desc}
                      </p>
                      <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        color: "var(--color-accent)", textDecoration: "none", fontSize: 12,
                        fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
                        borderBottom: "1px solid var(--color-accent-soft)", paddingBottom: 4,
                        transition: "gap 0.2s",
                      }}
                        onMouseEnter={e => e.currentTarget.style.gap = "18px"}
                        onMouseLeave={e => e.currentTarget.style.gap = "10px"}
                      >
                        Enquire Now <ArrowRight size={14} />
                      </a>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
                        Key Deliverables
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {deliverables.map(d => (
                          <div key={d} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                            <div style={{
                              width: 20, height: 20, background: "var(--color-accent-soft)",
                              border: "1px solid var(--color-border)", display: "flex",
                              alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                            }}>
                              <CheckCircle size={10} color="var(--color-accent)" />
                            </div>
                            <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.service-expanded-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════════════ */
function WhyUs() {
  const [hovered, setHovered] = useState(null);

  const reasons = [
    {
      num: "01", label: "Built for Business Goals",
      desc: "We create websites and web solutions around real business needs, not generic templates that look good but fail to perform.",
    },
    {
      num: "02", label: "SEO and Mobile Ready",
      desc: "Our builds are planned for search visibility and responsive performance from the start, giving your website a stronger foundation.",
    },
    {
      num: "03", label: "Revamp to Custom Build",
      desc: "Whether you need a fresh business website, a redesign of an old site, or a custom web application, we can handle the full scope.",
    },
    {
      num: "04", label: "Launch Support Included",
      desc: "We help with domain, hosting, deployment, and post-launch support so your project goes live without unnecessary friction.",
    },
  ];

  return (
    <section style={{ background: "var(--color-bg)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
      {/* BG watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontFamily: "'Plus Jakarta Sans',serif", fontSize: 180, fontWeight: 900,
        color: "var(--color-accent)", lineHeight: 1, whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none", opacity: 0.03,
      }}>Twinsun Digital</div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Why Us</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',serif",
            fontSize: "clamp(32px,4vw,48px)", fontWeight: 700,
            color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5,
          }}>
            Why Choose<br />
            <span style={{ color: "var(--color-accent)" }}>Twinsun Digital?</span>
          </h2>
          <p style={{ color: "var(--color-text-soft)", fontSize: 14, maxWidth: 320, lineHeight: 1.7, fontWeight: 300 }}>
            Your website partner for modern builds, stronger performance, and dependable launch support.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
          {reasons.map(({ num, label, desc }) => (
            <div
              key={num}
              onMouseEnter={() => setHovered(num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === num ? "var(--color-surface-strong)" : "var(--color-surface-alt)",
                border: hovered === num ? "1px solid var(--color-border-strong)" : "1px solid var(--color-border-soft)",
                padding: "40px 30px",
                cursor: "default",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent on hover */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: hovered === num ? 60 : 0, height: 3,
                background: "var(--color-accent)", transition: "width 0.3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                <span style={{ color: "var(--color-accent-soft)", fontFamily: "'Plus Jakarta Sans',serif", fontSize: 32, fontWeight: 700, opacity: 0.4 }}>{num}</span>
              </div>

              <h3 style={{ fontFamily: "'Plus Jakarta Sans',serif", color: "var(--color-text-strong)", fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.3 }}>{label}</h3>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.whyus-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.whyus-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRICING TIERS
═══════════════════════════════════════════════ */
function Pricing() {
  const [hovered, setHovered] = useState(null);

  const plans = [
    {
      name: "Starter Website",
      tagline: "For startups and local businesses",
      highlight: false,
      features: [
        "Business profile website",
        "Mobile-friendly design",
        "Contact and enquiry form",
        "Basic SEO-friendly setup",
        "Launch assistance",
      ],
    },
    {
      name: "Business Website",
      tagline: "For growing brands and service companies",
      highlight: true,
      features: [
        "Custom multi-page website",
        "SEO-friendly page structure",
        "Speed and mobile optimization",
        "Domain and hosting support",
        "Priority revisions",
        "Deployment and launch setup",
      ],
    },
    {
      name: "Custom Web App",
      tagline: "For businesses with custom workflows",
      highlight: false,
      features: [
        "Requirement-based build",
        "Dashboard or admin panel",
        "Custom functionality and integrations",
        "Scalable architecture",
        "Testing and deployment support",
        "Post-launch technical assistance",
      ],
    },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Plans</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',serif",
            fontSize: "clamp(32px,4vw,48px)", fontWeight: 700,
            color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5,
          }}>
            Flexible Packages for<br />
            <span style={{ color: "var(--color-accent)" }}>Every Business Need</span>
          </h2>
          <p style={{ color: "var(--color-text-soft)", fontSize: 14, maxWidth: 320, lineHeight: 1.7, fontWeight: 300 }}>
            Final pricing depends on scope, pages, features, and support needs. Contact us for a tailored quote.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {plans.map(({ name, tagline, highlight, features }) => (
            <div
              key={name}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: highlight ? "var(--color-accent)" : (hovered === name ? "var(--color-surface-strong)" : "var(--color-surface-alt)"),
                border: highlight ? "1px solid var(--color-accent-strong)" : (hovered === name ? "1px solid var(--color-border-strong)" : "1px solid var(--color-border-soft)"),
                padding: "44px 36px",
                transition: "all 0.25s",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Top accent bar */}
              {!highlight && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: hovered === name ? "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))" : "transparent",
                  transition: "background 0.25s",
                }} />
              )}

              {highlight && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16,
                  background: "rgba(255,255,255,0.15)", padding: "4px 12px",
                }}>
                  <Star size={10} fill="var(--color-accent-contrast)" color="var(--color-accent-contrast)" />
                  <span style={{ color: "var(--color-accent-contrast)", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>Most Popular</span>
                </div>
              )}

              <h3 style={{
                fontFamily: "'Plus Jakarta Sans',serif", fontSize: 28, fontWeight: 700,
                color: highlight ? "var(--color-accent-contrast)" : "var(--color-text-strong)",
                marginBottom: 8, lineHeight: 1.2,
              }}>{name}</h3>

              <p style={{
                color: highlight ? "rgba(255,255,255,0.7)" : "var(--color-text-faint)",
                fontSize: 13, marginBottom: 32, fontWeight: 300,
              }}>{tagline}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 18, height: 18,
                      background: highlight ? "rgba(255,255,255,0.15)" : "var(--color-accent-soft)",
                      border: highlight ? "1px solid rgba(255,255,255,0.3)" : "1px solid var(--color-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <CheckCircle size={10} color={highlight ? "var(--color-accent-contrast)" : "var(--color-accent)"} />
                    </div>
                    <span style={{
                      color: highlight ? "rgba(255,255,255,0.85)" : "var(--color-text-soft)",
                      fontSize: 13, lineHeight: 1.6,
                    }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: highlight ? "var(--color-accent-contrast)" : "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                color: highlight ? "var(--color-accent)" : "var(--color-accent-contrast)",
                padding: "13px 26px", fontSize: 11, fontWeight: 700,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                width: "100%", justifyContent: "center",
                transition: "opacity 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get Custom Quote <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   STATS STRIP
═══════════════════════════════════════════════ */
function StatsStrip() {
  const stats = [
    { n: "50+", l: "Projects\nCompleted" },
    { n: "30+", l: "Satisfied\nClients" },
    { n: "90%+", l: "Retention\nRate" },
    { n: "7", l: "Core Web\nServices" },
  ];

  return (
    <section style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border-soft)", borderBottom: "1px solid var(--color-border-soft)", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--color-border-soft)" }}>
        {stats.map(({ n, l }) => (
          <div key={n} style={{
            background: "var(--color-bg)", padding: "48px 36px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--color-surface)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--color-bg)"}
          >
            <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 44, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1 }}>{n}</div>
            <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 4, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 400, textAlign: "center" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
      {/* BG watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontFamily: "'Plus Jakarta Sans',serif", fontSize: 220, fontWeight: 900,
        color: "var(--color-accent-contrast)", lineHeight: 1, whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none", opacity: 0.08,
      }}>GROW</div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Let's Get Started</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Need the Right Website<br />for Your Business?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          Talk to us about your requirement and get the right solution for your website, revamp, or custom web application.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--color-accent-contrast)", color: "var(--color-accent)",
            padding: "16px 40px", fontSize: 12, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.85)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--color-accent-contrast)"}
          >
            <MessageCircle size={15} /> Free Consultation
          </a>
          <a href="tel:+919361187937" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(255,255,255,0.4)", color: "var(--color-accent-contrast)",
            padding: "16px 40px", fontSize: 12, fontWeight: 600,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>
            <Phone size={14} /> +91 93611 87937
          </a>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function Services() {
  useGoogleFonts();
  const offerRef = useRef(null);

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      <Hero />
      <Marquee items={items} />
      <ClaimOfferSection sectionRef={offerRef} />
      <ServicesGrid />
      <StatsStrip />
      <WhyUs />
      <Pricing />
      <CTA />
      <FloatingOfferButton
        targetRef={offerRef}
        price="₹15,000"
        title="Claim Offer"
        subtitle="Website Package · One-time"
      />
    </div>
  );
}