/**
 * SignalStay motion primitive — viewport reveals are subtle, directional, and optional.
 * The CSS fallback keeps content visible when observers or reduced-motion preferences apply.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function Reveal({ children, className = "", delay = 0, threshold = 0.12 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return <div ref={ref} className={`reveal ${visible ? "reveal--visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</div>;
}
