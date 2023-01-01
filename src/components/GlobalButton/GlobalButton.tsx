import { ReactNode } from 'react';
import './styles.css';

interface GlobalButtonProps{
  className?: string;
  onClick?: any;
  disabled?: boolean;
  text?: ReactNode;
}

export function GlobalButton({className, onClick, disabled, text}: GlobalButtonProps) {
  return (
    <button disabled={disabled} className={className ? className :'globalButton'} onClick={onClick}>
      {text}
    </button>
  )
}
