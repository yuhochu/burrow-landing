import Lottie from 'lottie-react';
import burrowPC from '../../assets/animated/burrow-pc.json';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const HomePageBanner = () => {
  return (
    <div className={`md:flex mb-10 animate-banner`}>
      <div className={`md:flex md:flex-row-reverse`}>
        <div className={`justify-center flex  md:flex-col`}>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            autoplay={true}
            modules={[EffectFade, Autoplay]}
            className='animate-swiper'
          >
            <SwiperSlide data-swiper-autoplay='4000'>
              <Brrr />
            </SwiperSlide>

            <SwiperSlide data-swiper-autoplay='5000'>
              <TokensText />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={`md:flex md:animate-lottie`}>
          <Lottie animationData={burrowPC} loop={true} autoplay={true}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  height={495}
                  width={825}
          />
        </div>
      </div>
    </div>
  );
};


const Brrr = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='277'
        height='122'
        viewBox='0 0 277 122'
        fill='none'
      >
        <path
          d='M1.30543 120.569L108.966 62.5309L105.264 87.2553L275.695 1.00001'
          stroke='#D2FF3A'
          strokeWidth='2'
        />
      </svg>
      <div className={'banner-title'}>BRRR!</div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='287'
        height='93'
        viewBox='0 0 287 93'
        fill='none'
      >
        <path
          d='M1.00004 1.66033L186.025 46.8155L167 63.0348L286.472 91.6144'
          stroke='#D2FF3A'
          strokeWidth='2'
        />
      </svg>
    </>
  );
};

const TokensText = () => {
  const TEXTS = ['Supply', 'Burrow', 'Loop', 'Thrive'];
  return (
    <div>
      {TEXTS.map(d => (
        <div className={'flex items-end gap-5'} key={d}>
          <div className={'t1b'}>{d}</div>
          <div className={'signboard-ball bg-primary-500'} style={{ width: 10, height: 10, marginBottom: 12 }} />
        </div>
      ))}
    </div>
  );
};

export default HomePageBanner;