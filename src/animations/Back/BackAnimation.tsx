import './styles.css';
import { useLottie } from 'lottie-react';
import Back from './Back.json';

export function BackAnimation() {
  const options = {
    animationData: Back,
    autoplay: true,
    loop: true,
  }

  const { View } = useLottie(options);
  return (
    <div className='backAnimation'>{View}</div>
  )
}
