import { useState } from "react";
import { Zap, X } from "lucide-react";
import ElectricBorder from "./ElectricBorder";

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
        <div
            className="floating-offer-wrap"
            style={{
                position: "fixed",
                bottom: 32,
                right: 28,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
                animation: "floatIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
        >
            <style>{`
        
        @media (max-width: 640px) {
          .floating-offer-wrap {
            right: 12px !important;
            bottom: 14px !important;
          }
          .floating-offer-main {
            min-width: 0 !important;
            width: min(86vw, 220px) !important;
            padding: 10px 14px !important;
            gap: 2px !important;
          }
          .floating-offer-badge {
            font-size: 8px !important;
            letter-spacing: 1.5px !important;
          }
          .floating-offer-title {
            font-size: 12px !important;
          }
          .floating-offer-subtitle {
            font-size: 9px !important;
          }
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
                <ElectricBorder
                    color="#B19EEF"
                    speed={0.5}
                    chaos={0.09}
                    thickness={2}
                    style={{ borderRadius: 0 , color: "var(--color-accent)"}}
                >

                    <button
                        className="floating-offer-main"
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
                            <span
                                className="floating-offer-badge"
                                style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.85 }}
                            >
                                {badge}
                            </span>
                        </div>
                        <div className="floating-offer-title" style={{ fontSize: 14, fontWeight: 700, letterSpacing: 0.2 }}>
                            {title} — {price}
                        </div>
                        <div className="floating-offer-subtitle" style={{ fontSize: 11, opacity: 0.75, fontWeight: 400 }}>
                            {subtitle}
                        </div>
                    </button>
                </ElectricBorder>
            </div>
        </div>
    );
}
