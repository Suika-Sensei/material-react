import { forwardRef } from "react";
import { BaseProps } from "../utils/createComponent";

export type IconVariant = "rounded" | "outlined" | "sharp";

export interface IconProps extends Omit<BaseProps, "children"> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
}

// Icon using Google Material Symbols
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      variant = "rounded",
      filled = false,
      className = "",
      style,
      slot,
      ...rest
    },
    ref
  ) => {
    const baseClass = `md-icon material-symbols-${variant}`;
    const filledClass = filled ? "filled" : "";
    const iconClassName = `${baseClass} ${filledClass} ${className}`.trim();

    return (
      <span
        ref={ref}
        className={iconClassName}
        style={style}
        slot={slot}
        {...rest}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = "Icon";
