import './styles.css';
import { useLottie } from 'lottie-react';
import Loading from './Loading.json';

export function LoadingAnimation() {
  const options = {
    animationData: Loading,
    autoplay: true,
    loop: true,
  }

  const { View } = useLottie(options);
  return (
    <div className='loadingAnimation'>{View}</div>
  )
}
