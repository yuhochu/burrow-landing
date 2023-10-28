import React, { forwardRef, Suspense, PropsWithoutRef } from 'react';
import Lottie from 'lottie-react';
import tokenLottie from '../../assets/animated/tokens-5.64s.mp4.lottie.json';

const TokenAnimation = forwardRef(({ onComplete }: { onComplete: any }, ref: any) => {
  return (
    <Suspense fallback={null}>
      <Lottie
        animationData={tokenLottie}
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

export default TokenAnimation;
