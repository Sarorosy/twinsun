import { useState } from "react";
import { ArrowRight, CheckCircle, Send, Zap } from "lucide-react";

const DEFAULT_FEATURES = [
  "1-Year Website Management",
  "Free Domain & Hostinger Hosting (1 Year)",
  "Unlimited Revisions Until Satisfaction",
  "Complete Delivery Within 6 Days",
  "Unlimited Pages",
  "1 Month Free SEO",
  "Premium Animations & Effects",
  "Payment Gateway Integration",
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ClaimOfferSection({
  sectionRef,
  features = DEFAULT_FEATURES,
  amount = "15,000",
  packageTitle = "Website Development Package",
  description = "Everything you need to go live - design, hosting, domain, and support. All in one package.",
}) {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleOpenForm = () => {
    setShowForm(true);
    setSent(false);
  };

  const handleChange = (key) => (event) => {
    setForm((currentForm) => ({ ...currentForm, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Claim offer submission:", form);
    setSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      ref={sectionRef}
      id="claim-offer"
      style={{
        background: "var(--color-bg)",
        padding: "110px 0",
        fontFamily: "'DM Sans',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 48 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>
            Limited Offer
          </span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-accent)",
            boxShadow: "0 0 60px rgba(139,92,246,0.15)",
            padding: "clamp(32px,5vw,64px)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -16,
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
              color: "var(--color-accent-contrast)",
              padding: "8px 28px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
            }}
          >
            <Zap size={12} fill="currentColor" /> Best Value
          </div>

          {showForm ? (
            <div>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans',serif",
                    fontSize: "clamp(26px,4vw,42px)",
                    fontWeight: 900,
                    color: "var(--color-text-strong)",
                    lineHeight: 1.1,
                    letterSpacing: -0.5,
                    marginBottom: 16,
                  }}
                >
                  Claim Your Offer
                </h2>
                <p
                  style={{
                    color: "var(--color-text-soft)",
                    fontSize: 15,
                    lineHeight: 1.85,
                    fontWeight: 300,
                    maxWidth: 580,
                    margin: "0 auto",
                  }}
                >
                  Share your details and we&apos;ll reach out with the next steps for your {packageTitle.toLowerCase()}.
                </p>
              </div>

              {sent ? (
                <div
                  style={{
                    background: "var(--color-accent-soft)",
                    border: "1px solid var(--color-accent)",
                    padding: "32px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    maxWidth: 640,
                    margin: "0 auto",
                  }}
                >
                  <CheckCircle size={22} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ color: "var(--color-text-strong)", fontWeight: 700, marginBottom: 6 }}>Request Sent</div>
                    <div style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>
                      Thanks for your interest. We&apos;ll get in touch shortly to confirm your package details.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720, margin: "0 auto" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
                    {[
                      { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                      { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                      { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                      { key: "service", label: "Service Needed", type: "text", placeholder: "Website Development" },
                    ].map(({ key, label, type, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={handleChange(key)}
                          style={{
                            width: "100%",
                            background: "var(--color-surface-strong)",
                            border: "1px solid var(--color-border-soft)",
                            color: "var(--color-text-strong)",
                            padding: "14px 18px",
                            fontSize: 14,
                            fontFamily: "'DM Sans',sans-serif",
                            outline: "none",
                            boxSizing: "border-box",
                            transition: "border-color 0.2s",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "var(--color-accent)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "var(--color-border-soft)";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: "block", color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about the website or features you need..."
                      value={form.message}
                      onChange={handleChange("message")}
                      style={{
                        width: "100%",
                        background: "var(--color-surface-strong)",
                        border: "1px solid var(--color-border-soft)",
                        color: "var(--color-text-strong)",
                        padding: "14px 18px",
                        fontSize: 14,
                        fontFamily: "'DM Sans',sans-serif",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--color-accent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--color-border-soft)";
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
                    <button
                      type="submit"
                      style={{
                        background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                        color: "var(--color-accent-contrast)",
                        padding: "18px 42px",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        border: "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "'DM Sans',sans-serif",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        boxShadow: "0 8px 32px rgba(139,92,246,0.35)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 14px 40px rgba(139,92,246,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,92,246,0.35)";
                      }}
                    >
                      Submit Request <Send size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      style={{
                        background: "transparent",
                        color: "var(--color-text-strong)",
                        padding: "18px 28px",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        border: "1px solid var(--color-border-soft)",
                        cursor: "pointer",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      Back to Offer
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: 44 }}>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans',serif",
                    fontSize: "clamp(26px,4vw,42px)",
                    fontWeight: 900,
                    color: "var(--color-text-strong)",
                    lineHeight: 1.1,
                    letterSpacing: -0.5,
                    marginBottom: 16,
                  }}
                >
                  {packageTitle}
                </h2>
                <p
                  style={{
                    color: "var(--color-text-soft)",
                    fontSize: 15,
                    lineHeight: 1.85,
                    fontWeight: 300,
                    maxWidth: 540,
                    margin: "0 auto 36px",
                  }}
                >
                  {description}
                </p>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',serif", fontSize: 28, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, marginTop: 10 }}>
                    Rs
                  </span>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans',serif",
                      fontSize: "clamp(56px,8vw,88px)",
                      fontWeight: 900,
                      color: "var(--color-text-strong)",
                      lineHeight: 1,
                      letterSpacing: -2,
                    }}
                  >
                    {amount}
                  </span>
                </div>
                <div style={{ color: "var(--color-text-faint)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 44 }}>
                  one-time payment
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                  gap: "12px 32px",
                  marginBottom: 48,
                }}
              >
                {features.map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        flexShrink: 0,
                        background: "var(--color-accent-soft)",
                        border: "1px solid var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircle size={13} color="var(--color-accent)" />
                    </div>
                    <span style={{ color: "var(--color-text-strong)", fontSize: 14, fontWeight: 400, lineHeight: 1.5 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  onClick={handleOpenForm}
                  style={{
                    background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                    color: "var(--color-accent-contrast)",
                    padding: "18px 52px",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "'DM Sans',sans-serif",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 8px 32px rgba(139,92,246,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 14px 40px rgba(139,92,246,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,92,246,0.35)";
                  }}
                >
                  Get Started Today <ArrowRight size={15} />
                </button>

                <div style={{ marginTop: 20, color: "var(--color-text-faint)", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ width: 4, height: 4, background: "var(--color-accent)", display: "inline-block", borderRadius: "50%" }} />
                  <span>No hidden charges</span>
                  <span style={{ width: 4, height: 4, background: "var(--color-accent)", display: "inline-block", borderRadius: "50%" }} />
                  <span>100% satisfaction guaranteed</span>
                  <span style={{ width: 4, height: 4, background: "var(--color-accent)", display: "inline-block", borderRadius: "50%" }} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
