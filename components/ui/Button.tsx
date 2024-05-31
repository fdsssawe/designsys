import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn';

const buttonStyles = cva("rounded-md py-2 px-4 text-white font-sm", {
  variants: {
    intent: {
      primary: "bg-primary hover:bg-primary-dark text-text",
      secondary: "bg-secondary hover:bg-secondary-dark text-text",
      danger: "bg-red-600 hover:bg-red-700 text-white",
      accent: "bg-accent hover:bg-accent-dark text-text",
      outline: "bg-bg hover:bg-gray-100 border-text border-[1px] text-text",
      gradient: "bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary-dark hover:via-secondary-dark hover:to-accent-dark text-text",
    },
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonStyles> {}

export default function Button({ intent, fullWidth, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ intent, fullWidth }),className)} {...props}/>
  );
}

  
  