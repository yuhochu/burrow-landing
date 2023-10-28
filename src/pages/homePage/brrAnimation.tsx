import React, { forwardRef, Suspense } from 'react';
import Lottie from 'lottie-react';
import brrLottie from '../../assets/animated/brrr-2.7s.mp4.lottie.json';

const BrrAnimation = forwardRef(({ onComplete }: { onComplete: any }, ref: any) => {
  return (
    <Suspense fallback={null}>
      <Lottie
        animationData={brrLottie}
        onComplete={onComplete}
        loop={false}
        autoplay={false}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        height={495}
        width={825}
        lottieRef={ref}
      />
    </Suspense>
  );
});

export default BrrAnimation;