import * as React from "react"
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@lib/cn"

const inputStyles = cva("flex h-10 w-full rounded-md border border-foreground bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-outline focus:bg-foreground focus:border-[1px] focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
      intent: {
        primary: "bg-primary hover:bg-primary-dark text-text",
        secondary: "bg-secondary hover:bg-secondary-dark text-text",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        accent: "bg-accent hover:bg-accent-dark text-text",
        none: " ",
      },
    },
    defaultVariants: {
      intent: "none",
    },
  });

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,VariantProps<typeof inputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, intent, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputStyles({ intent }),className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export default Input 