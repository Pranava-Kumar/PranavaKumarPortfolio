"use client";

import * as React from "react";

/**
 * Tracks the global mouse position with normalized (-1..1) and pixel values.
 * Useful for parallax and 3D effects that respond to cursor movement.
 */
export function useMousePosition() {
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  React.useEffect(() => {
    let raf = 0;
    function handleMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: (e.clientX / innerWidth) * 2 - 1,
          normalizedY: (e.clientY / innerHeight) * 2 - 1,
        });
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return position;
}
