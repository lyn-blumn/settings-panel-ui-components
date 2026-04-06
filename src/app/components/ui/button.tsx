import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap size-sm font-medium transition-[color,background-color,border-color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "",
        iconOnly: "aspect-square",
      },
      style: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-border",
        dashed: "bg-background text-foreground border-dashed border-border hover:bg-muted/50",
        soft: "bg-muted text-muted-foreground hover:bg-muted/80 border-transparent",
        ghost: "bg-transparent text-foreground hover:bg-muted/50 border-transparent",
        ghostMuted: "bg-transparent text-muted-foreground hover:bg-muted/50 border-transparent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
      },
      state: {
        default: "",
        hover: "",
        press: "scale-[0.98]",
        focused: "ring-2 ring-ring/50",
        loading: "cursor-wait",
        disabled: "opacity-50 cursor-not-allowed",
      },
      size: {
        "2xs": "h-6 px-2 size-xs gap-1",
        xs: "h-7 px-2.5 size-xs gap-1",
        sm: "h-8 px-3 size-sm gap-1.5",
        md: "h-9 px-4 size-sm gap-2",
        lg: "h-10 px-6 size-md gap-2",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
      },
      bordered: {
        true: "border",
        false: "border-0",
      },
    },
    compoundVariants: [
      // Icon only 크기 조정
      {
        variant: "iconOnly",
        size: "2xs",
        className: "w-6 h-6 p-0",
      },
      {
        variant: "iconOnly",
        size: "xs",
        className: "w-7 h-7 p-0",
      },
      {
        variant: "iconOnly",
        size: "sm",
        className: "w-8 h-8 p-0",
      },
      {
        variant: "iconOnly",
        size: "md",
        className: "w-9 h-9 p-0",
      },
      {
        variant: "iconOnly",
        size: "lg",
        className: "w-10 h-10 p-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      style: "primary",
      state: "default",
      size: "md",
      shape: "rounded",
      bordered: true,
    },
  },
);

interface ButtonProps extends 
  React.ComponentProps<"button">,
  Omit<VariantProps<typeof buttonVariants>, 'state'> {
  asChild?: boolean;
  loading?: boolean;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  badge?: React.ReactNode;
}

function Button({
  className,
  variant,
  style,
  size,
  shape,
  bordered,
  loading = false,
  disabled = false,
  leadIcon,
  tailIcon,
  badge,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  
  const state = loading ? 'loading' : disabled ? 'disabled' : 'default';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, style, state, size, shape, bordered, className }))}
      disabled={disabled || loading}
      style={{
        fontFamily: 'var(--font-family-suit)',
        borderRadius: shape === 'pill' ? 'var(--radius-full)' : 'var(--radius-button)',
      }}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={16} />}
      {!loading && leadIcon && leadIcon}
      {children}
      {!loading && tailIcon && tailIcon}
      {!loading && badge && (
        <span 
          className="flex h-5 min-w-5 items-center justify-center rounded px-1 border size-xs"
          style={{ borderColor: 'var(--border)' }}
        >
          {badge}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };