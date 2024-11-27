import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

enum ButtonVariant {
  PRIMARY = "primary",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({ children, variant = ButtonVariant.PRIMARY, ...props }: ButtonProps) {
  return <button className={clsx('flex items-center gap-[6px] font-semibold text-base rounded disabled:text-neutral-400', {
      "text-indigo-700 border-0 hover:text-indigo-800 focus:shadow-button-focus": variant === ButtonVariant.PRIMARY,
    })}
    {...props}
  >
    {children}
  </button>;
}
