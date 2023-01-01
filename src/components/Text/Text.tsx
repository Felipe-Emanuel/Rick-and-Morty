import './styles.css';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from "react";

interface TextProps {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Text({asChild, children, className}: TextProps) {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp className={className ? className : 'text'}>
      {children}
    </Comp>
  )
}
