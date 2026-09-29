import type { HTMLAttributes, PointerEvent } from "react";

export function Glass({ className = "", onPointerMove, ...props }: HTMLAttributes<HTMLDivElement>) {
  const highlight = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    onPointerMove?.(event);
  };
  return <div className={`glass ${className}`} onPointerMove={highlight} {...props} />;
}
