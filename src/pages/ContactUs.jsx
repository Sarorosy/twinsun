import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, Mail, Clock,
  MessageCircle, Send, Facebook, Instagram, Youtube,
  ChevronDown, ChevronUp, CheckCircle
} from "lucide-react";
import Marquee from "../components/Marquee";
import FloatingOfferButton from "../components/FloatingOfferButton";
import ClaimOfferSection from "../components/ClaimOfferSection";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

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
      minHeight: "50vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
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
        background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 0, right: "35%", bottom: 0,
        width: 1, background: "linear-gradient(to bottom,transparent,rgba(139,92,246,0.3),transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 40px 80px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32,
          border: "1px solid var(--color-border)", padding: "8px 18px",
        }}>
          <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
            Let's Talk
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans',serif",
          fontSize: "clamp(48px,6vw,80px)",
          fontWeight: 900, color: "var(--color-text-strong)",
          lineHeight: 1.05, marginBottom: 24, letterSpacing: -1,
          maxWidth: 700,
        }}>
          Get in <span style={{ color: "var(--color-accent)" }}>Touch</span><br />
          With Us.
        </h1>

        <p style={{ color: "var(--color-text-soft)", fontSize: 16, lineHeight: 1.85, maxWidth: 500, fontWeight: 300 }}>
          Ready to grow your business? Let's talk. Our team is available Monday – Saturday, 8:00 AM – 5:00 PM.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE / TICKER
═══════════════════════════════════════════════ */
const items = ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Web Design", "Branding", "Event Management", "Digital Academy"];


/* ═══════════════════════════════════════════════
   CONTACT SECTION (Form + Info)
═══════════════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const info = [
    { icon: Phone, label: "Phone", val: "+91 93611 87937" },
    { icon: Mail, label: "Email", val: "info@twinsundigital.com" },
    { icon: Clock, label: "Working Hours", val: "Monday – Saturday, 8:00 AM – 5:00 PM" },
  ];

  const socials = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/twinsundigital/" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://twinsundigital.com/twinsunback/api/contact_enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Contact Us</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left – Contact Form */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(32px,4vw,48px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 16, letterSpacing: -0.5,
            }}>
              Send Us a<br />
              <span style={{ color: "var(--color-accent)" }}>Message.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.85, fontWeight: 300, marginBottom: 40 }}>
              Fill in the form and our team will get back to you within one business day.
            </p>

            {sent ? (
              <div style={{
                background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)",
                padding: "32px", display: "flex", gap: 16, alignItems: "flex-start",
              }}>
                <CheckCircle size={22} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ color: "var(--color-text-strong)", fontWeight: 600, marginBottom: 6 }}>Message Sent!</div>
                  <div style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>
                    Thank you for reaching out. We'll be in touch shortly. You can also reach us instantly via WhatsApp.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: "block", color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{
                        width: "100%", background: "var(--color-surface-strong)",
                        border: "1px solid var(--color-border-soft)", color: "var(--color-text-strong)",
                        padding: "14px 18px", fontSize: 14, fontFamily: "'DM Sans',sans-serif",
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--color-accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--color-border-soft)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Message / Service of Interest</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project or service you're interested in..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{
                      width: "100%", background: "var(--color-surface-strong)",
                      border: "1px solid var(--color-border-soft)", color: "var(--color-text-strong)",
                      padding: "14px 18px", fontSize: 14, fontFamily: "'DM Sans',sans-serif",
                      outline: "none", resize: "vertical", boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--color-accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--color-border-soft)"}
                  />
                </div>
                <button type="submit" style={{
                  background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                  color: "var(--color-accent-contrast)", padding: "16px 36px",
                  fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
                  border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
                  transition: "transform 0.2s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right – Info + Socials */}
          <div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',serif",
              fontSize: "clamp(32px,4vw,48px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 16, letterSpacing: -0.5,
            }}>
              Reach Out.<br />
              <span style={{ color: "var(--color-accent)" }}>Connect.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.85, fontWeight: 300, marginBottom: 40 }}>
              Call, email, or drop a message on WhatsApp — I'll get back to you promptly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 32 }}>
              {info.map(({ icon: Icon, label, val }) => (
                <div key={label} style={{
                  background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                  padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
                >
                  <div style={{ width: 40, height: 40, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="var(--color-accent)" />
                  </div>
                  <div>
                    <div style={{ color: "var(--color-text-faint)", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{label}</div>
                    <div style={{ color: "var(--color-text-strong)", fontSize: 14, lineHeight: 1.6 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 14, marginBottom: 32,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
              color: "var(--color-accent-contrast)", padding: "18px 28px",
              textDecoration: "none", transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={20} fill="currentColor" />
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Chat on WhatsApp</div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>+91 80560 78068 — Instant Reply</div>
              </div>
              <ArrowRight size={16} style={{ marginLeft: "auto" }} />
            </a>

            {/* Social Links */}
            <div style={{ color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Follow Us</div>
            <div style={{ display: "flex", gap: 3 }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                  width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-text-soft)", textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-soft)"; e.currentTarget.style.color = "var(--color-text-soft)"; }}
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Phone Link */}
            <a href="tel:+919361187937" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.4)", color: "var(--color-accent-contrast)",
              padding: "16px 40px", fontSize: 12, fontWeight: 600,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            }}
              aria-label="Call us at +91 93611 87937"
            >
              <Phone size={14} /> +91 93611 87937
            </a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:60px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "What services do you offer?", a: "We provide website development, SEO-friendly websites, mobile-friendly design, old website revamp, and custom web applications." },
    { q: "Do you work with startups and small businesses?", a: "Yes. We work with startups, SMEs, and growing brands, and we build solutions that can scale as your business grows." },
    { q: "Do you provide domain and hosting?", a: "Yes. We include free domain and hosting support with eligible website packages. Contact us for package details." },
    { q: "Can you redesign or revamp my existing website?", a: "Absolutely. We revamp outdated websites with modern UI, better performance, mobile responsiveness, and SEO-ready structure." },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Frequently Asked Questions</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 20 }}>
              Got Questions?<br />
              <span style={{ color: "var(--color-accent)" }}>We Have Answers.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.85, fontWeight: 300, marginBottom: 36 }}>
              Can't find what you're looking for? Reach us directly on WhatsApp — we respond fast.
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
              Ask Us Directly <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map(({ q, a }, idx) => (
              <div key={q} style={{
                background: openIdx === idx ? "var(--color-surface)" : "var(--color-surface-strong)",
                border: "1px solid",
                borderColor: openIdx === idx ? "var(--color-border)" : "var(--color-border-soft)",
                transition: "all 0.2s",
              }}>
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    padding: "20px 24px", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 16, textAlign: "left",
                  }}
                >
                  <span style={{ color: "var(--color-text-strong)", fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{q}</span>
                  {openIdx === idx
                    ? <ChevronUp size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={16} color="var(--color-text-faint)" style={{ flexShrink: 0 }} />
                  }
                </button>
                {openIdx === idx && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
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
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Let's Work Together</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Ready to Transform<br />Your Digital Game?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          Partner with a results-driven Digital Marketing Agency.
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
export default function ContactUs() {
  useGoogleFonts();
  const offerRef = useRef(null);

  return (
    <div>
      <Helmet>
        <title>Contact Us - Twinsun Digital</title>
        <meta
          name="description"
          content="Get in touch with Twinsun Digital for inquiries, support, or to discuss your next web project. We're here to help!"
        />
      </Helmet>
      <Hero />
      <Marquee items={items} />
      <ContactSection />
      <ClaimOfferSection sectionRef={offerRef} />
      <FAQ />
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