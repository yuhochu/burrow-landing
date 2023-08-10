import Lottie from 'lottie-react';
import burrowPC from '../../assets/animated/burrow.json';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import assets from '../../components/assets';
import Image from '../../components/image';

const HomePageBanner = () => {
  return (
    <div className={`md:flex mb-10 animate-banner pt-10 md:pt-0`}>
      <div className={`md:flex md:flex-row-reverse `}>
        <div className={`justify-center flex  md:flex-col`}>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            autoplay={true}
            fadeEffect={{
              crossFade: true,
            }}
            modules={[EffectFade, Autoplay]}
            className="animate-swiper"
          >
            {/*<SwiperSlide data-swiper-autoplay="2900">*/}
            {/*  <Brrr />*/}
            {/*</SwiperSlide>*/}

            <SwiperSlide data-swiper-autoplay="5100">
              <TokensText />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={`md:flex animate-lottie`}>
          <Lottie
            animationData={burrowPC}
            loop={true}
            autoplay={true}
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
    <div className={'relative brrrline-wrap'}>
      <div className={'brrrline brrrline-left'}>
        <Image src={assets.svg.brrrlinetop} className={'desktop'} />
        <Image src={assets.svg.brrrlineleft} className={'mobile'} />
      </div>
      <div className={'banner-title'}>BRRR!</div>
      <div className={'brrrline brrrline-right'}>
        <Image src={assets.svg.brrrlinebottom} className={'desktop'} />
        <Image src={assets.svg.brrrlineright} className={'mobile'} />
      </div>
    </div>
  );
};

const TokensText = () => {
  const TEXTS = ['Supply', 'Burrow', 'Loop', 'Thrive'];
  return (
    <div className={'mb-4 md:mb-0'}>
      {TEXTS.map((d) => (
        <div className={'flex items-end gap-5 justify-center md:justify-normal'} key={d}>
          <div className={'t1b'}>{d}</div>
          <div className={'signboard-ball bg-primary-500'} style={{ width: 10, height: 10, marginBottom: 12 }} />
        </div>
      ))}
    </div>
  );
};

export default HomePageBanner;
