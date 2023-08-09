import React from 'react';
import Button from '../../components/button';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import Lottie from 'react-lottie';
import a from '../../assets/animated/a.json';
import './homePage.scss';
import clsx from 'clsx';
import assets from '../../components/assets';
import Image from '../../components/image';
import { BaseProps } from '../../interfaces/interfaces';
import HomePageRoadMap from './homePageRoadMap';
import { Box } from '../../components/box';
import HomePageArticles from './homePageArticles';
import HomePageYield from './homePageYield';

const HomePage = (props: BaseProps) => {
  return (
    <LayoutContainer className={'home-page'}>
      <Banner1 />
      <Section><HomePageYield /></Section>
      <Section><HomePageRoadMap /></Section>
      <Section><HomePageArticles /></Section>
    </LayoutContainer>
  );
};

const Section = ({ children, className }: BaseProps) => {
  return <div className={clsx('mb-44', className)}>{children}</div>;
};

const Content1 = ({ children }: BaseProps) => {
  const ButtonNode = ({ children }: BaseProps) => (
    <Button color={'third'} className={'box-button'}>
      {children}
      <div className={'rounded-full bg-black absolute btn-arrow'}>
        {assets.svg.arrowRight}
      </div>
    </Button>
  );

  return (
    <div>
      <div className={'lg:grid gap-5 grid-cols-2'}>
        <Box className={'mb-5 lg:mb-0'}>
          <div className={'t2 mb-4 font-medium'}>Market Size</div>
          <div className={'t1 mb-4'}>$18,425,690</div>
          <div className={'t3 mb-6'}>
            The first money market on NEAR native, bring more liquidity and DeFi
            compatibility
          </div>
          <div className={'flex gap-5'}>
            <ButtonNode>Supply</ButtonNode>
            <ButtonNode>Borrow</ButtonNode>
          </div>
        </Box>
        <Box className={'mb-5 lg:mb-0'}>
          <div className={'t2 mb-4 font-medium'}>Yield available</div>
          <div className={'t1 mb-4'}>20+</div>
          <div className={'t3 mb-6'}>
            Supply and borrow interest-bearing assets (stETH, stNEAR, aUSDC) on NEAR
          </div>
          <div>
            <Image src={assets.svg.svgNear} />
          </div>
        </Box>

        <Box className={'mb-5 lg:mb-0 bg-gray-800 text-white'}>
          <div className={'mb-8'}>
            <Image src={assets.svg.svgNear} />
          </div>
          <div className={'t2 mb-3'}>Yield APY</div>
          <div className={'t1 mb-1 text-primary-500'}>1.02%</div>
        </Box>
        <Box className={'mb-5 lg:mb-0 bg-gray-800 text-white'}>
          <div className={'mb-8 flex'}>
            <Image src={assets.svg.svgUsd} className={'-mx-2'} />
            <Image src={assets.svg.svgUsdt} className={'-mx-2 relative z-10'} />
            <Image src={assets.svg.svgDai} className={'-mx-2'} />
          </div>
          <div className={'t2 mb-3'}>Yield APY</div>
          <div className={'t1 mb-1 text-primary-500'}>8.91%</div>
        </Box>
      </div>
    </div>
  );
};

const Banner1 = () => {
  return (
    <div className={'flex items-center mb-10'}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: a,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={495}
        width={825}
      />

      <div>
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
      </div>
    </div>
  );
};

export default HomePage;
