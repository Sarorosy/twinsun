import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "summary",
  "[role='button']",
  "[data-cursor='interactive']",
  ".cursor-pointer",
].join(", ");

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return undefined;
    }

    const dotElement = dotRef.current;
    const ringElement = ringRef.current;
    if (!dotElement || !ringElement) {
      return undefined;
    }

    document.body.classList.add("has-custom-cursor");

    let animationFrame = 0;
    let isVisible = false;
    let isInteractive = false;
    let isPressed = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const syncAttributes = () => {
      const interactiveValue = isInteractive ? "true" : "false";
      const pressedValue = isPressed ? "true" : "false";

      dotElement.dataset.interactive = interactiveValue;
      ringElement.dataset.interactive = interactiveValue;
      dotElement.dataset.pressed = pressedValue;
      ringElement.dataset.pressed = pressedValue;
    };

    const renderCursor = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;

      dotElement.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${isPressed ? 0.72 : 1})`;
      ringElement.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isInteractive ? 1.35 : isPressed ? 0.92 : 1})`;
      dotElement.style.opacity = isVisible ? "1" : "0";
      ringElement.style.opacity = isVisible ? "1" : "0";

      animationFrame = window.requestAnimationFrame(renderCursor);
    };

    const updateInteractiveState = (eventTarget) => {
      const nextInteractiveState = Boolean(
        eventTarget instanceof Element && eventTarget.closest(INTERACTIVE_SELECTOR),
      );

      if (nextInteractiveState !== isInteractive) {
        isInteractive = nextInteractiveState;
        syncAttributes();
      }
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      isVisible = true;
      updateInteractiveState(event.target);
    };

    const handlePointerDown = (event) => {
      isPressed = true;
      isVisible = true;
      updateInteractiveState(event.target);
      syncAttributes();
    };

    const handlePointerUp = (event) => {
      isPressed = false;
      updateInteractiveState(event.target);
      syncAttributes();
    };

    const handlePointerLeave = () => {
      isVisible = false;
      isPressed = false;
      syncAttributes();
    };

    const handlePointerEnter = () => {
      isVisible = true;
    };

    syncAttributes();
    renderCursor();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("pointerover", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.documentElement.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerover", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}