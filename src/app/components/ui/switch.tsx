"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-inverted data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 dark:data-[state=checked]:bg-inverted inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      style={{
        backgroundColor: props['data-state'] === 'checked' ? 'var(--inverted)' : undefined
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-inverted-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        )}
        style={{
          backgroundColor: 'var(--inverted-foreground)'
        }}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };