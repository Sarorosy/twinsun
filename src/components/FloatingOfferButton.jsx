import { useState } from "react";
import { Zap, X } from "lucide-react";

/**
 * FloatingOfferButton - A reusable floating call-to-action button
 * 
 * Props:
 * - targetRef: React ref to scroll to when clicked
 * - price: Price to display (default: "₹15,000")
 * - title: Main title text (default: "Claim Offer")
 * - subtitle: Subtitle text (default: "Website Package · One-time")
 * - badge: Badge text (default: "Best Value")
 * - onDismiss: Optional callback when dismissed
 */
export default function FloatingOfferButton({
  targetRef,
  price = "₹15,000",
  title = "Claim Offer",
  subtitle = "Website Package · One-time",
  badge = "Best Value",
  onDismiss = null,
}) {
  const [dismissed, setDismissed] = useState(false);

  const scrollToOffer = () => {
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (dismissed) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 32,
      right: 28,
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 8,
      animation: "floatIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
    }}>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(24px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
      `}</style>

      {/* Dismiss */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss offer"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-soft)",
          color: "var(--color-text-faint)",
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "color 0.2s",
          alignSelf: "flex-end",
          marginRight: 2,
        }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-faint)"}
      >
        <X size={12} />
      </button>

      {/* Main button */}
      <div style={{ position: "relative" }}>
        {/* Pulse ring */}
        <div style={{
          position: "absolute",
          inset: -6,
          border: "2px solid var(--color-accent)",
          borderRadius: 2,
          animation: "pulse-ring 1.8s ease-out infinite",
          pointerEvents: "none",
        }} />

        <button
          type="button"
          onClick={scrollToOffer}
          style={{
            background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
            color: "var(--color-accent-contrast)",
            border: "none",
            cursor: "pointer",
            padding: "14px 22px",
            fontFamily: "'DM Sans',sans-serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
            boxShadow: "0 8px 28px rgba(139,92,246,0.45)",
            transition: "transform 0.2s, box-shadow 0.2s",
            minWidth: 190,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(139,92,246,0.6)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,92,246,0.45)";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Zap size={13} fill="currentColor" />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.85 }}>
              {badge}
            </span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 0.2 }}>
            {title} — {price}
          </div>
          <div style={{ fontSize: 11, opacity: 0.75, fontWeight: 400 }}>
            {subtitle}
          </div>
        </button>
      </div>
    </div>
  );
}
