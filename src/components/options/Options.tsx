import "./styles.css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface OptionsProps {
  text: string;
  onClick?: any;
  className?: string;
}

export function Options({ text, onClick }: OptionsProps) {
  return (
    <label className="options">
      <CheckboxPrimitive.Root className="options__box">
        <CheckboxPrimitive.Indicator asChild>
          <Check className="options__indicator" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span onClick={(e) => onClick(e)} className="options__text">{text}</span>
    </label>
  );
}
