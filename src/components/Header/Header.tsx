import "./styles.css";
import { Slot } from '@radix-ui/react-slot'

interface HeaderProps {
  as: string;
  text?: string
  asChild?: boolean;
  className?: string;
  children?: any;
}

export function Header({as, text, asChild, className}: HeaderProps) {
  const Comp = asChild ? Slot : as
  return (
    <Comp className={className ? className : 'header'}>{text}</Comp>
  );
}
