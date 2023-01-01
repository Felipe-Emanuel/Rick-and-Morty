import "./styles.css";
import { useLottie } from "lottie-react";
import Morty from "./Morty.json";

export function MortyAnimation() {
  const options = {
    animationData: Morty,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className="mortyAnimation">{View}</div>;
}
