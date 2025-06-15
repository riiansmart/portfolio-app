import { type ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees (default 6) */
  maxRotate?: number;
}

// Slight 3-D tilt effect that responds to cursor position.
// Pure CSS transform – no external dependencies.
export const TiltCard = ({
  children,
  className = "",
  maxRotate = 6,
}: TiltCardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const updateTransform = () => {
    frameRef.current = null;
    const el = containerRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = pointerPos.current.x - left;
    const y = pointerPos.current.y - top;

    const rotateY = ((x - width / 2) / (width / 2)) * maxRotate;
    const rotateX = ((y - height / 2) / (height / 2)) * -maxRotate;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = event => {
    pointerPos.current = { x: event.clientX, y: event.clientY };
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(updateTransform);
    }
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const el = containerRef.current;
    if (el) {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
      // ARIA role purely decorative; content is children components
      aria-hidden="true"
    >
      {children}
    </div>
  );
}; 