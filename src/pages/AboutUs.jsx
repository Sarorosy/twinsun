import { useState, useEffect, useContext } from "react";
import {
  ArrowRight, CheckCircle, Target, Users, TrendingUp, Award,
  Lightbulb, Shield, BarChart2, Heart, MessageCircle, Phone,
  Zap, Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import { CallModalContext } from "../contexts/CallModalContext";

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
      paddingTop: 100,
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
          <span style={{ color: "var(--color-accent)" }}>About Us</span>
        </div>

        {/* Pre-headline pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
          border: "1px solid var(--color-border)", padding: "8px 18px",
        }}>
          <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
            Our Story
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',serif",
          fontSize: "clamp(42px,6vw,72px)",
          fontWeight: 900, color: "var(--color-text-strong)",
          lineHeight: 1.08, marginBottom: 24, letterSpacing: -1,
          maxWidth: 700,
        }}>
          Who We Are
        </h1>

        <p style={{
          color: "var(--color-text-soft)", fontSize: 17, lineHeight: 1.85,
          maxWidth: 560, fontWeight: 300, marginBottom: 0,
        }}>
          Passionate Marketers. Proven Strategists. <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>Your Growth Partners.</span>
        </p>
      </div>

      <style>{`@media(max-width:600px){h1{font-size:clamp(32px,8vw,52px)!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE / TICKER
═══════════════════════════════════════════════ */
const items = ["Innovation", "Integrity", "Impact", "Inclusivity", "Chennai", "Growth", "Strategy", "Results"];


/* ═══════════════════════════════════════════════
   OUR STORY
═══════════════════════════════════════════════ */
function OurStory() {
  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Our Story</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(34px,4vw,50px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Born in Chennai.<br />
              <span style={{ color: "var(--color-accent)" }}>Built for Results.</span>
            </h2>

            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 28, fontWeight: 300 }}>
              Founded in Chennai, The Twinsun Digital was born from a simple belief — that every business, big or small, deserves powerful digital marketing that drives real results. Starting with a small but dedicated team, we have grown to serve 30+ satisfied clients across industries, completing 50+ projects with measurable impact.
            </p>

            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 36, fontWeight: 300 }}>
              We are not just a service provider — we are your digital growth partner, combining creativity with technology to deliver end-to-end solutions that yield genuine, lasting impact.
            </p>

            {/* Mission quote */}
            <div style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 24, marginBottom: 40 }}>
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

          {/* Right – stats cluster */}
          <div>
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "40px", marginBottom: 3,
            }}>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
                At a Glance
              </div>
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
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--color-accent-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Trusted across Chennai & Tamil Nadu</span>
                <div style={{ display: "flex", gap: 0 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              background: "var(--color-accent)", padding: "16px 24px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <Zap size={16} color="var(--color-accent-contrast)" />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, color: "var(--color-accent-contrast)", letterSpacing: 1.5, textTransform: "uppercase" }}>
                15-member team · Est. 2020 in Chennai
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#about-story>div>div{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MISSION & VISION
═══════════════════════════════════════════════ */
function MissionVision() {
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

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Purpose & Direction</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[
            {
              label: "Our Mission",
              icon: Target,
              headline: "Empower Every Business to Grow Online",
              body: "To provide innovative digital marketing services tailored to help businesses grow and succeed online. We create results-driven strategies that elevate your brand, connect with your audience, and drive sustainable growth.",
            },
            {
              label: "Our Vision",
              icon: TrendingUp,
              headline: "South India's Most Trusted Digital Partner",
              body: "To become the most trusted digital marketing partner in South India, empowering businesses with cutting-edge strategies and future-ready digital solutions built for a rapidly evolving landscape.",
            },
          ].map(({ label, icon: Icon, headline, body }) => (
            <div key={label} style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "52px 44px", position: "relative", overflow: "hidden",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border-strong)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border)"}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))" }} />

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color="var(--color-accent)" />
                </div>
                <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>{label}</span>
              </div>

              <h3 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.25, marginBottom: 20 }}>
                {headline}
              </h3>

              <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.85, fontWeight: 300 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.mv-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CORE VALUES
═══════════════════════════════════════════════ */
function CoreValues() {
  const [hovered, setHovered] = useState(null);

  const values = [
    {
      icon: Lightbulb, num: "01", label: "Innovation",
      desc: "We embrace the latest tools and technologies, including AI-driven solutions, to keep our clients ahead in a rapidly evolving digital landscape.",
    },
    {
      icon: Shield, num: "02", label: "Integrity",
      desc: "Transparent communication and honest reporting are at the core of every client relationship. No vanity metrics — just real data.",
    },
    {
      icon: BarChart2, num: "03", label: "Impact",
      desc: "Every campaign is measured by real business outcomes. We don't celebrate impressions; we celebrate conversions, leads, and revenue.",
    },
    {
      icon: Heart, num: "04", label: "Inclusivity",
      desc: "Tailored solutions for startups, SMEs, and enterprises alike. Every business deserves powerful digital marketing, regardless of size.",
    },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>What We Stand For</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
            Core Values
          </h2>
          <p style={{ color: "var(--color-text-soft)", fontSize: 14, maxWidth: 360, lineHeight: 1.7, fontWeight: 300 }}>
            The principles that guide every campaign, every client call, and every decision we make.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
          {values.map(({ icon: Icon, num, label, desc }) => (
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
                <div style={{
                  width: 48, height: 48,
                  border: hovered === num ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "border-color 0.25s",
                }}>
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <span style={{ color: "var(--color-accent-soft)", fontFamily: "'Plus Jakarta Sans',serif", fontSize: 32, fontWeight: 700, opacity: 0.4 }}>{num}</span>
              </div>

              <h3 style={{ fontFamily: "'Plus Jakarta Sans',serif", color: "var(--color-text-strong)", fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.3 }}>{label}</h3>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.values-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.values-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MILESTONES
═══════════════════════════════════════════════ */
function Milestones() {
  const timeline = [
    { year: "2020", title: "Founded", desc: "The Twinsun digital established in Chennai with a small, passionate team and a big vision." },
    { year: "2021", title: "First 10 Clients", desc: "Surpassed the first 10 satisfied clients milestone, proving our model works." },
    { year: "2022", title: "Academy Launched", desc: "Digital Marketing Academy launched — empowering students and professionals." },
    { year: "2023", title: "Event Management", desc: "Added Event Management as a third business vertical, expanding our service offering." },
    { year: "2025", title: "50+ Projects", desc: "Grew to a 15-member team serving 30+ clients with 90%+ retention rate." },
  ];

  return (
    <section style={{ background: "var(--color-bg)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Our Journey</span>
        </div>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 70 }}>
          Milestones That<br /><span style={{ color: "var(--color-accent)" }}>Define Us</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical spine */}
          <div style={{
            position: "absolute", left: 100, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom,transparent,var(--color-border),transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} style={{
                display: "grid", gridTemplateColumns: "100px 60px 1fr", alignItems: "center", gap: 0,
                background: "var(--color-surface-alt)", border: "1px solid var(--color-border-soft)",
                padding: "32px 36px 32px 0",
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.background = "var(--color-surface-strong)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-soft)"; e.currentTarget.style.background = "var(--color-surface-alt)"; }}
              >
                {/* Year */}
                <div style={{ paddingLeft: 0, textAlign: "right", paddingRight: 24 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 20, fontWeight: 700, color: "var(--color-accent)" }}>{year}</span>
                </div>

                {/* Node */}
                <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                  <div style={{ width: 12, height: 12, background: "var(--color-accent)", border: "3px solid var(--color-bg)" }} />
                </div>

                {/* Content */}
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 18, fontWeight: 600, color: "var(--color-text-strong)", marginBottom: 6 }}>{title}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
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
   FOUNDER SPOTLIGHT
═══════════════════════════════════════════════ */
function FounderSpotlight() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>About the Founder</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "center" }}>
          {/* Left – founder card */}
          <div>
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "52px 40px", textAlign: "center", position: "relative", overflow: "hidden",
            }}>
              {/* Top bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))" }} />

              <div style={{
                width: 100, height: 100, margin: "0 auto 24px",
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 36, fontWeight: 900, color: "var(--color-accent-contrast)" }}>RP</span>
              </div>

              <h3 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 24, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 6 }}>
                Saravanan
              </h3>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 24 }}>
                Founder & Digital Strategist
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 28 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />)}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--color-accent-soft)" }}>
                {[{ n: "5+", l: "Years Exp." }, { n: "50+", l: "Projects" }].map(({ n, l }) => (
                  <div key={l} style={{ background: "var(--color-surface-strong)", padding: "20px 16px" }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)" }}>{n}</div>
                    <div style={{ color: "var(--color-text-faint)", fontSize: 11, marginTop: 4, letterSpacing: 1 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – bio */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(30px,3.5vw,44px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.2, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Visionary Leadership<br />
              <span style={{ color: "var(--color-accent)" }}>Driving Digital Impact</span>
            </h2>

            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 24, fontWeight: 300 }}>
              Saravanan holds a Bachelor's degree in Electronics & Communication Engineering from Vel Tech Technical University. With over 5 years of extensive experience in digital marketing, he combines analytical precision with creative storytelling to excel in the digital space.
            </p>

            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 36, fontWeight: 300 }}>
              Rajendra specialises in developing data-driven advertising strategies, interpreting performance metrics, and optimising customer journeys that deliver genuine growth and long-term engagement. Committed to innovation, he continuously leverages the latest tools — including AI-driven solutions — to ensure clients stay ahead.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {[
                "Data-Driven Advertising", "Performance Metrics", "AI-Driven Solutions", "Customer Journey Optimisation",
              ].map(skill => (
                <div key={skill} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 18, height: 18, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={10} color="var(--color-accent)" />
                  </div>
                  <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{skill}</span>
                </div>
              ))}
            </div>

            <button type="button" onClick={open} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
              color: "var(--color-accent-contrast)", padding: "14px 30px",
              fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
              textDecoration: "none", transition: "transform 0.2s", border: "none", cursor: "pointer"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Connect With Rajendra <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.founder-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
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
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Let's Work Together</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>

        <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Ready to Work With Us?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          Get a free consultation and let us build a digital strategy tailored for your business.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" onClick={open} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--color-accent-contrast)", color: "var(--color-accent)",
            padding: "16px 40px", fontSize: 12, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            transition: "background 0.2s", border: "none", cursor: "pointer"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.85)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--color-accent-contrast)"}
          >
            <MessageCircle size={15} /> Free Consultation
          </button>
          <a href="tel:+918122652903" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(255,255,255,0.4)", color: "var(--color-accent-contrast)",
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



/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function AboutUs() {
  useGoogleFonts();
  const { open } = useContext(CallModalContext);

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      <Hero />
      <Marquee items={items} />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Milestones />
      <FounderSpotlight />
      <CTA />
    </div>
  );
}