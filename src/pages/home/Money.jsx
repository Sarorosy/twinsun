import { useEffect, useRef, useState } from "react";

const EMOJIS = ["1.png", "2.png", "3.png", "4.png", "3.png", "6.png", "7.png", "8.png"];

export default function Money() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;

    let timeout;

    let activeEmojis = 0; // Track the number of active emojis
    const MAX_EMOJIS = 3; // Limit to 2-3 emojis at a time

    function spawnOne() {
      if (!canvas || !stage || activeEmojis >= MAX_EMOJIS) return; // Respect the limit

      const el = document.createElement("img"); // Use img element instead of div
      el.className = "floating-emoji";
      el.src = `/emojis/${EMOJIS[Math.floor(Math.random() * EMOJIS.length)]}`; // Set image source

      const stageW = stage.offsetWidth;
      const stageH = stage.offsetHeight;

      const startX = Math.random() * stageW;
      el.style.left = startX + "px";
      el.style.bottom = "-20px";
      el.style.width = (20 + Math.random() * 18) + "px"; // Adjust width for images

      canvas.appendChild(el);

      activeEmojis++; // Increment active emoji count

      const drift = (Math.random() - 0.5) * 80; // Reduced drift for smoother movement
      const sway = 15 + Math.random() * 20; // Reduced sway for slower animation
      const swaySpeed = 1.2 + Math.random() * 1.5;
      const swayDir = Math.random() > 0.5 ? 1 : -1;
      const dur = 3000 + Math.random() * 1000; // Reduced vanish timing
      const rise = stageH * (0.8 + Math.random() * 0.3); // Increased rise for higher floating

      const start = performance.now();

      function frame(now) {
        const t = Math.min((now - start) / dur, 1);
        if (t >= 1) {
          el.remove();
          activeEmojis--; // Decrement active emoji count when removed
          return;
        }

        const ease = 1 - Math.pow(1 - t, 2.2);
        const ty = -(ease * rise);
        const tx = drift * ease + Math.sin(t * Math.PI * swaySpeed) * sway * swayDir;
        const scale = 0.6 + (1 - t) * 0.6;

        let opacity;
        if (t < 0.1) opacity = t / 0.1;
        else if (t > 0.7) opacity = 1 - (t - 0.7) / 0.3;
        else opacity = 1;

        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
        el.style.opacity = opacity;

        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }

    function scheduleNext() {
      spawnOne();
      const delay = 2000 + Math.random() * 1.5; // Reduced delay for faster spawning
      timeout = setTimeout(scheduleNext, delay);
    }

    timeout = setTimeout(scheduleNext, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="money-overlay" ref={stageRef}>
      {/* floating emojis */}
      <div ref={canvasRef} className="money-canvas iicon" />

      <style>{`
        .money-overlay {
          position: absolute; /* KEY: overlay mode */
          inset: 0;
          pointer-events: none; /* don't block clicks */
          overflow: hidden;
          z-index: 5;
          font-family: "Apple Color Emoji";
        }

        .money-canvas {
          position: absolute;
          inset: 0;
        }

        .floating-emoji {
          position: absolute;
          pointer-events: none;
          will-change: transform, opacity;
          line-height: 1;
        }

        @keyframes blink {
          0%,100% { opacity: 1 }
          50% { opacity: 0.25 }
        }

      `}</style>
    </div>
  );
}