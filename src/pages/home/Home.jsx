import { useState, useEffect, useRef, useContext } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, MapPin,
  Clock, Star, Quote, CheckCircle, TrendingUp, Users,
  Award, Target, Zap, Search, BarChart2, Share2, Globe,
  Layers, Calendar, ChevronDown, MessageCircle, Send,
  Facebook, Instagram, Youtube, Play
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Marquee from "../../components/Marquee";
import FlowingMenu from "../../components/FlowingMenu";
import Money from "./Money";
import { CallModalContext } from "../../contexts/CallModalContext";
import { Link } from "react-router-dom";

const WA = "https://wa.me/918122652903";

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
function Hero({ openModal }) {
  return (
    <section style={{
      background: "var(--color-bg)",
      color: "var(--color-text)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Plus Jakarta Sans','DM Sans',sans-serif",
    }}>

      
      {/* BG texture grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(color-mix(in srgb,var(--color-accent) 4%, transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--color-accent) 4%, transparent) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      {/* Accent glow top-right */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 700, height: 700,
        background: "radial-gradient(circle,color-mix(in srgb,white 12%, transparent) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Thin diagonal accent */}
      <div
      className="hidden md:block"
      style={{
        position: "absolute", top: 0, right: "35%", bottom: 0,
        width: 1, background: "linear-gradient(to bottom,transparent,color-mix(in srgb,var(--color-accent) 30%, transparent),transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 40px 100px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "60% 40%", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div className="relative">
            <Money />
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32,
                border: "1px solid color-mix(in srgb,var(--color-accent) 35%, transparent)", padding: "8px 18px",
              }}>
              <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
                Websites That Convert
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(48px,6vw,80px)",
              fontWeight: 900, color: "var(--color-text-strong)",
              lineHeight: 1.05, marginBottom: 28, letterSpacing: -1,
            }}>
              We build websites<br />
              <span style={{ color: "var(--color-accent)" }}>that turn visitors</span><br />
              into paying clients.
            </h1>

            <p style={{ color: "var(--color-text-soft)", fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 44, fontWeight: 300 }}>
              Strategy-driven websites backed by SEO, performance, and conversion systems - built to grow your business 24/7.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={openModal}
                style={{
                  background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                  color: "var(--color-accent-contrast)",
                  padding: "16px 36px",
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Get Free Strategy Call <ArrowRight size={15} />
              </button>
              <button
                onClick={openModal}
                style={{
                  color: "var(--color-text-strong)",
                  padding: "16px 36px",
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--color-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "border-color 0.2s,color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-text-strong)"; }}
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Right – stats card cluster */}
          <div style={{ position: "relative" }}>
            {/* Main card */}
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "40px", position: "relative",
            }}>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
                Performance Snapshot
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--color-accent-soft)" }}>
                {[
                  { n: "50+", l: "Projects\nCompleted", icon: Award },
                  { n: "30+", l: "Satisfied\nClients", icon: Users },
                  { n: "90%+", l: "Retention\nRate", icon: TrendingUp },
                  { n: "4+", l: "Years\nExperience", icon: Target },
                ].map(({ n, l, icon: Icon }) => (
                  <div key={n} style={{
                    background: "var(--color-surface-strong)", padding: "28px 24px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-surface)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--color-surface-strong)"}
                  >
                    <Icon size={18} color="var(--color-accent)" style={{ marginBottom: 12, display: "block" }} />
                    <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 38, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1 }}>{n}</div>
                    <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 400 }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--color-accent-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Trusted across Chennai & Tamil Nadu</span>
                <div style={{ display: "flex", gap: 0 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              background: "var(--color-accent)", padding: "12px 20px",
              fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700,
              color: "var(--color-accent-contrast)", letterSpacing: 1.5, textTransform: "uppercase",
            }}>
              🏆 Top Agency 2024
            </div>
          </div>
        </div>


      </div>

      <style>{`@media(max-width:900px){section>div>div{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE / TICKER
═══════════════════════════════════════════════ */
const items = [
  "Conversion-Focused Websites",
  "SEO Optimization",
  "Landing Pages",
  "E-commerce Stores",
  "Custom Web Apps",
  "Performance Marketing",
  "Brand Positioning",
  "Growth Strategy"
];

/* ═══════════════════════════════════════════════
   ABOUT SECTION
═══════════════════════════════════════════════ */
function About() {
  const points = [
    "World-class Search Engine Optimization",
    "Creative & Professional Content Writing",
    "Optimize Your Business to the Next Level",
  ];

  return (
    <section id="about" style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>About Company</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(36px,4vw,52px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Proven Expertise.<br />
              <span style={{ color: "var(--color-accent)" }}>Real Results.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 32, fontWeight: 300 }}>
              As a leading digital marketing agency in Chennai, Twinsun Digital combines creativity with technology to deliver end-to-end solutions. Whether you are a startup or an enterprise, our services are built to engage your audience and optimize your brand's digital presence.
            </p>

            <div style={{ marginBottom: 40 }}>
              {points.map((p) => (
                <div key={p} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 18, height: 18, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={10} color="var(--color-accent)" />
                  </div>
                  <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Mission quote */}
            <div style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 24, marginBottom: 36 }}>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontStyle: "italic", fontFamily: "'Plus Jakarta Sans',serif" }}>
                "We create results-driven strategies that elevate your brand, connect with your audience, and drive sustainable growth."
              </p>
            </div>

            <button type="button" onClick={open} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              color: "var(--color-accent)", textDecoration: "none", fontSize: 12,
              fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              borderBottom: "1px solid var(--color-accent-soft)", paddingBottom: 4,
              transition: "gap 0.2s", background: "none", border: "none", cursor: "pointer"
            }}
              onMouseEnter={e => e.currentTarget.style.gap = "18px"}
              onMouseLeave={e => e.currentTarget.style.gap = "10px"}
            >
              Get Free Consultation <ArrowRight size={14} />
            </button>
          </div>

          {/* Right – experience badge + sub-stats */}
          <div>
            {/* Badge */}
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "50px 40px", textAlign: "center", marginBottom: 3,
            }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 80, fontWeight: 900, color: "var(--color-accent)", lineHeight: 1 }}>4+</div>
              <div style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginTop: 8 }}>Years of Excellence</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {[
                { n: "50+", l: "Projects" }, { n: "30+", l: "Clients" },
                { n: "15", l: "Team Members" }, { n: "Chennai", l: "Headquarters" },
              ].map(({ n, l }) => (
                <div key={l} style={{ background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)", padding: "24px 20px" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)" }}>{n}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 4, letterSpacing: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════ */
function Services() {
  const services = [
  {
    icon: Globe,
    num: "01",
    title: "Conversion-Focused Websites",
    short: "Core Build",
    desc: "High-converting design, mobile-first performance, and a clear lead flow built into every page."
  },
  {
    icon: Search,
    num: "02",
    title: "SEO Optimization",
    short: "Visibility",
    desc: "Keyword research, on-page structure, technical setup, and local SEO aligned with how buyers search."
  },
  {
    icon: Globe,
    num: "03",
    title: "Domain & Hosting Setup",
    short: "Launch Stack",
    desc: "Domain guidance, secure hosting with SSL, and business email configured the right way from day one."
  },
  {
    icon: Layers,
    num: "04",
    title: "Website Revamp",
    short: "Revamp",
    desc: "Redesign outdated websites, improve speed and UX, and fix structural gaps hurting conversions."
  },
  {
    icon: Layers,
    num: "05",
    title: "Revisions & Optimization",
    short: "Refine",
    desc: "Two to three revision rounds, UI and UX improvements, and performance tuning before launch."
  },
  {
    icon: BarChart2,
    num: "06",
    title: "1-Year Maintenance",
    short: "Support",
    desc: "Bug fixes, minor updates, security, backups, and ongoing support to keep the system performing."
  }
];

  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 70, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>System Overview</span>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
              Complete<br />Growth System
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 2,
            textTransform: "uppercase", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-soft)"}
          >
            Built As One Offer <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {services.map(({ icon: Icon, num, title, short, desc }) => (
            <div
              key={num}
              onMouseEnter={() => setHovered(num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === num ? "var(--color-surface-strong)" : "var(--color-surface-alt)",
                border: hovered === num ? '1px solid var(--color-border-strong)' : '1px solid var(--color-border-soft)',
                padding: "40px 32px",
                cursor: "default",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: hovered === num ? 60 : 0, height: 3,
                background: "var(--color-accent)", transition: "width 0.3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                <div style={{
                  width: 48, height: 48,
                  border: hovered === num ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "border-color 0.25s",
                }}>
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <span style={{ color: "rgba(255,255,255,0.12)", fontFamily: "'Plus Jakarta Sans',serif", fontSize: 32, fontWeight: 700 }}>{num}</span>
              </div>

              <div style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>{short}</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',serif", color: "var(--color-text-strong)", fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>

              <div style={{
                marginTop: 28, display: "flex", alignItems: "center", gap: 8,
                color: hovered === num ? "var(--color-accent)" : "var(--color-text-faint)",
                fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600,
                transition: "color 0.25s",
              }}>
                Included In The System <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <div style={{ display: "inline-block", border: "1px solid var(--color-border)", padding: "30px 50px", background: "var(--color-surface-alt)" }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, marginBottom: 18, fontWeight: 300 }}>
              Everything is built to work together from day one.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
              padding: "13px 32px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            }}>
              <MessageCircle size={14} /> Get Free Strategy Call
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:nth-child(2){grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

function GrowthSystem() {
  const inclusions = [
    "Strategy + Design + Development",
    "SEO-Ready Website",
    "Domain & Hosting Setup",
    "Conversion Optimization",
    "Ongoing Support",
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>System Advantage</span>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 20 }}>
              Everything You Need.<br />One System.
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.9, maxWidth: 520, fontWeight: 300 }}>
              From strategy to launch and long-term maintenance, we handle everything required to build, grow, and scale your online presence.
            </p>
          </div>

          <div style={{ display: "grid", gap: 3 }}>
            {inclusions.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--color-surface-strong)",
                  border: "1px solid var(--color-border-soft)",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ width: 28, height: 28, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={14} color="var(--color-accent)" />
                </div>
                <span style={{ color: "var(--color-text-strong)", fontSize: 15, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════════════ */
function WhyUs() {
  const reasons = [
    { icon: Target, title: "Built for conversions, not just design", desc: "Every page is structured to move visitors toward enquiry, booking, or sale with less friction." },
    { icon: TrendingUp, title: "Focused on ROI and measurable growth", desc: "Decisions are tied to performance, lead quality, and the outcomes that matter to your business." },
    { icon: Award, title: "Transparent process and reporting", desc: "Clear milestones, clear communication, and reporting that shows what is working and what improves next." },
    { icon: Zap, title: "Long-term support, not one-time delivery", desc: "We stay involved after launch to refine, maintain, and protect the system as your business grows." },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          {/* Left text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 24 }}>
              Why Businesses Choose<br /><span style={{ color: "var(--color-accent)" }}>This System.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.9, maxWidth: 420, fontWeight: 300 }}>
              Premium execution, measurable outcomes, and support that continues after launch.
            </p>

            {/* Marketing skill bar */}
            <div style={{ marginTop: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Marketing Excellence</span>
                <span style={{ color: "var(--color-accent)", fontFamily: "'Plus Jakarta Sans',serif", fontWeight: 600 }}>95%</span>
              </div>
              <div style={{ height: 2, background: "var(--color-border-soft)" }}>
                <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))", transition: "width 1s ease" }} />
              </div>
            </div>

            <Link to={"/contact-us"} style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 44,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
              padding: "14px 32px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            }}>
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right – reasons list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                padding: "28px 28px", display: "flex", gap: 24, alignItems: "flex-start",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
              >
                <div style={{ width: 44, height: 44, border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',serif", color: "var(--color-text-strong)", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{title}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOUNDER + PROCESS
═══════════════════════════════════════════════ */
function Team() {
  const process = [
    {
      step: "01",
      title: "Strategy",
      desc: "Understanding your business, audience, and goals to create a clear execution plan."
    },
    {
      step: "02",
      title: "Build",
      desc: "Designing and developing high-converting websites focused on performance and clarity."
    },
    {
      step: "03",
      title: "Launch",
      desc: "Deploying, testing, and refining everything to ensure smooth performance."
    },
    {
      step: "04",
      title: "Scale",
      desc: "Driving growth through ads, SEO, and automation to maximize results."
    }
  ];

  return (
    <section
      style={{
        background: "var(--color-surface-alt)",
        padding: "100px 0",
        fontFamily: "'DM Sans',sans-serif"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Top Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{
            color: "var(--color-accent)",
            fontSize: 10,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600
          }}>
            About
          </span>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start"
        }}>

          {/* Founder */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(32px,3.5vw,46px)",
              fontWeight: 700,
              color: "var(--color-text-strong)",
              lineHeight: 1.15,
              marginBottom: 6,
              letterSpacing: -0.5
            }}>
              Saravanan
            </h2>

            <div style={{
              color: "var(--color-accent)",
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 24
            }}>
              Founder & Digital Strategist
            </div>

            <p style={{
              color: "var(--color-text-faint)",
              fontSize: 14,
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 18
            }}>
              I help businesses turn their websites into client-generating assets through strategy, performance, and conversion-focused design.
            </p>

            <p style={{
              color: "var(--color-text-faint)",
              fontSize: 14,
              lineHeight: 1.9,
              fontWeight: 300
            }}>
              Every build is designed to create clarity, trust, and measurable business growth without unnecessary complexity.
            </p>
          </div>

          {/* Process */}
          <div>
            <div style={{
              color: "var(--color-text-soft)",
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 30
            }}>
              My Process
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16
            }}>
              {process.map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: "var(--color-surface-strong)",
                    border: "1px solid var(--color-border-soft)",
                    padding: "28px 24px",
                    transition: "all 0.25s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-soft)";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  {/* Step Number */}
                  <div style={{
                    fontSize: 12,
                    letterSpacing: 2,
                    color: "var(--color-accent)",
                    fontWeight: 600,
                    marginBottom: 10
                  }}>
                    {item.step}
                  </div>

                  {/* Title */}
                  <div style={{
                    color: "var(--color-text-strong)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 6
                  }}>
                    {item.title}
                  </div>

                  {/* Description */}
                  <div style={{
                    color: "var(--color-text-faint)",
                    fontSize: 13,
                    lineHeight: 1.6
                  }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { name: "Kanimozhi K.", text: "Helped run social media campaigns with real results. Totally recommended if you're looking to learn digital marketing.", stars: 5 },
    { name: "Kavya Mani", text: "Very professional and supportive. Strategies helped gain more visibility and engagement. Highly recommended to any business.", stars: 5 },
    { name: "Sobana S.", text: "Young and energetic digital marketing team. Creative, responsive and deliver great results. Perfect choice for any brand.", stars: 5 },
    { name: "Ishu Mithra", text: "Best digital marketing agency in Chennai. Social media campaigns brought real results. Highly recommend their branding services.", stars: 5 },
    { name: "Keerthi S.", text: "Incredibly informative and engaging course. Clear and concise teaching style — complex topics made easy to understand.", stars: 5 },
    { name: "P Kaviya", text: "Super interactive course. SEO, social media, and Google Ads explained simply. Very useful — totally recommend.", stars: 5 },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Client Testimonials</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
            What Our Clients<br />Say About Us
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 8 }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>
              Real words from real clients. We measure success by the growth of the brands we partner with.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 50 }}>
          {reviews.map(({ name, text, stars }) => (
            <div key={name} style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
              padding: "36px 32px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
            >
              <Quote size={22} color="var(--color-accent-glow)" style={{ marginBottom: 20 }} />
              <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.85, fontWeight: 300, marginBottom: 24, fontStyle: "italic" }}>
                "{text}"
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "var(--color-text-strong)", fontSize: 13, fontWeight: 600 }}>{name}</div>
                  <div style={{ display: "flex", gap: 3, marginTop: 5 }}>
                    {[...Array(stars)].map((_, i) => <Star key={i} size={11} fill="var(--color-accent)" color="var(--color-accent)" />)}
                  </div>
                </div>
                <div style={{ width: 32, height: 32, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "var(--color-accent)", fontFamily: "'Plus Jakarta Sans',serif", fontSize: 16, fontWeight: 700 }}>
                    {name[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
      {/* BG text */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontFamily: "'Plus Jakarta Sans',serif", fontSize: 220, fontWeight: 900,
        color: "var(--color-accent-contrast)", lineHeight: 1, whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none",
        opacity: 0.08,
      }}>GROW</div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
          <span style={{ color: "var(--color-text-faint)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Let's Work Together</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Ready to turn your website<br />into a growth engine?
        </h2>
        <p style={{ color: "var(--color-text-soft)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          We handle everything - strategy, design, SEO, and maintenance.
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
            <MessageCircle size={15} /> Start Your Project
          </a>
          <a href="tel:+918122652903" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(0,0,0,0.3)", color: "var(--color-accent-contrast)",
            padding: "16px 40px", fontSize: 12, fontWeight: 600,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>
            <Phone size={14} /> +91 8122652903
          </a>
        </div>
      </div>
    </section>
  );
}



const websiteTypes = [
  {
    text: "E-commerce",
    desc: "Online stores built to maximize conversions and sales",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    link: "#"
  },
  {
    text: "Business / Consulting",
    desc: "Professional websites that build trust and generate leads",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    link: "#"
  },
  {
    text: "SaaS Platforms",
    desc: "Scalable web apps with dashboards, subscriptions, and APIs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "#"
  },
  {
    text: "HRMS Systems",
    desc: "Employee management, payroll, attendance & automation tools",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    link: "#"
  },
  {
    text: "Custom Web Apps",
    desc: "Tailored solutions built exactly for your business workflows",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "#"
  },
  {
    text: "Admin Panels",
    desc: "Powerful dashboards to manage data, users, and operations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#"
  },
  {
    text: "Landing Pages",
    desc: "High-converting pages designed for ads and lead generation",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    link: "#"
  },
  {
    text: "Portfolio Websites",
    desc: "Personal branding websites for creators and professionals",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    link: "#"
  }
];

/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
export default function Home() {
  useGoogleFonts();
  const { open } = useContext(CallModalContext);

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>

      <Hero openModal={open} />
      <Marquee items={items} />
      <About />
      <Services />
      <GrowthSystem />
      <FlowingMenu
        items={websiteTypes}
        speed={12}
        textColor="var(--color-text-strong)"
        bgColor="var(--color-surface-alt)"
        marqueeBgColor="var(--color-accent)"
        marqueeTextColor="var(--color-accent-contrast)"
      />
      <WhyUs />
      <Team />
      <Testimonials />
      <CTA />
    </div>
  );
}

/* Responsive Enhancements */
<style>{`
  @media (max-width: 900px) {
    /* Hero Section */
    section > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    h1 {
      font-size: clamp(32px, 5vw, 60px) !important;
    }

    /* About Section */
    #about > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    /* Services Section */
    #services > div > div:last-child {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .service-card {
      padding: 20px !important;
    }
  }

  @media (max-width: 600px) {
    /* General Adjustments */
    body {
      font-size: 14px !important;
    }
    h1, h2 {
      font-size: clamp(24px, 4vw, 40px) !important;
    }
    p {
      font-size: 14px !important;
    }
  }
`}</style>