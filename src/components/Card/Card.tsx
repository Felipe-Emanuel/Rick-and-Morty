import "./styles.css";
import { clsx } from "clsx";
import { Header } from "../Header/Header";
import { Text } from "../Text/Text";
import { useState } from "react";
import { GlobalButton } from "../GlobalButton/GlobalButton";

interface CardProps {
  image?: string;
  alt?: string;
  name?: string;
  status?: string;
  location?: string;
  species?: string;
  disabled?: boolean;
  onClick?: any;
}

export function Card({
  image,
  alt,
  name,
  status,
  location,
  species,
  disabled,
  onClick,
}: CardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPlaceholderOff, setIsPlaceholderOff] = useState(false);

  function handleChoise() {
    onClick();
    setIsActive((isActive) => !isActive);

    setTimeout(() => {
      setIsPlaceholderOff((isPlaceholderOff) => !isPlaceholderOff);
    }, 2500);
  }

  return (
    <div className='card'>
      <GlobalButton
        disabled={disabled}
        onClick={() => handleChoise()}
        className={clsx(
          "card__placeholder",

          isActive && "card__placeholder_active",
          isPlaceholderOff && "card__placeholder_display_none"
        )}
      />
      {disabled && (
        <>
          <Header as="h3" text={name} className="card__title" />

          <img src={image} alt={alt} className="card__image" />
          <div className="card__info-block">
            <Text className="card__info-text">Status: {status}</Text>
            <Text className="card__info-text">Location: {location}</Text>
            <Text className="card__info-text">Species: {species}</Text>
          </div>
        </>
      )}
    </div>
  );
}
