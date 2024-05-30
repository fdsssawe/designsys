import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva("rounded-md py-2 px-4 text-white font-sm", {
  variants: {
    intent: {
      primary: "bg-primary hover:bg-primary-dark",
      secondary: "bg-secondary hover:bg-secondary-dark",
      danger: "bg-red-600 hover:bg-red-700",
      accent: "bg-accent hover:bg-accent-dark",
      gradient: "bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary-dark hover:via-secondary-dark hover:to-accent-dark",
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

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
}

export default function Button({ intent, fullWidth, text, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ intent, fullWidth })} {...props}>
      {text}
    </button>
  );
}

  
  