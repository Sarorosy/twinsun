import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ items }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    // total width animation (smooth infinite loop)
    const tween = gsap.to(el, {
      xPercent: -33.33,
      duration: 14, // ⚡ faster (lower = faster)
      ease: "linear",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <div
      style={{
        background: "var(--color-accent)",
        overflow: "hidden",
        padding: "14px 0",
        position: "relative",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--color-accent-contrast)",
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "0 36px",
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {item}

            {/* ✨ Sparkle separator */}
            <span
              style={{
                fontSize: 10,
                opacity: 0.7,
                transform: "translateY(-1px)",
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}