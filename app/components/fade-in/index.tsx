"use client"; // Required for Next.js client-side components

import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string; // Optional delay for the animation
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = "200ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once the element is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ${delay}, transform 0.6s ${delay}`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;