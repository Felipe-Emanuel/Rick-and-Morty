import './styles.css';
import { useLottie } from "lottie-react";
import PortalWeapon from "./PortalWeapon.json";

export function PortalWeaponAnimation() {
  const options = {
    animationData: PortalWeapon,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div className='portalWeapon'>{View}</div>;
}
