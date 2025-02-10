import React from "react";
import { cn } from "../lib/utils";

const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[minmax(0, 1fr)] grid-cols-3 gap-3", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name, // Optional
  className,
  background,
  Icon, // Optional
  description, // Optional
  href,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-5 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]",
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "pt-14 sm:pt-0",
      className
    )}
  >
    <div>{background}</div>

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-3">
      {/* ✅ Render Icon only if provided */}
      {Icon && (
        <Icon className="h-10 w-10 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      )}

      {/* ✅ Render Heading only if provided */}
      {name && (
        <h3 className="text-xl font-semibold text-neutral-200 dark:text-neutral-300">{name}</h3>
      )}

      {/* ✅ Render Paragraph only if provided */}
      {description && (
        <p className="max-w-lg text-neutral-400">
          {description.split(/(\d+%|\d+x|\b\d+\b)/).map((part, index) =>
            /\d+%|\d+x|\b\d+\b/.test(part) ? (
              <span key={index} className="text-neutral-100 font-bold">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

