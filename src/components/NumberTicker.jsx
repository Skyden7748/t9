import React from 'react'

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className = "",
  decimalPlaces = 0,
  ...props
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    });

    return () => unsubscribe();
  }, [springValue, decimalPlaces]);

  return (
    <span
      ref={ref}
      className={`inline-block tabular-nums tracking-wider text-black dark:text-white ${className}`}
      {...props}
    />
  );
}

export default NumberTicker;
