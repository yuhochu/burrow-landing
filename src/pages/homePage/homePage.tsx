import React from 'react';
import Button from '../../components/button';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import Lottie from 'react-lottie';
import a from '../../../public/animated/a.json';
import './homePage.css';
import clsx from 'clsx';
import assets from '../../components/assets';

type Props = {
  children?: string | React.ReactNode,
  className?: string,
}

const HomePage = (props: Props) => {
  return (
    <LayoutContainer className={'home-page'}>
      <Banner1 />
      <Section>
        <Content1 />
      </Section>

    </LayoutContainer>
  );
};

const Section = ({ children }: Props) => {
  return <div className={'my-20'}>{children}</div>;
};

const Content1 = ({ children }: Props) => {
  const ButtonNode = ({ children }: Props) => (
    <Button color={'third'} className={'box-button'}>
      {children}
      <div className={"rounded-full bg-black absolute btn-arrow"}>
        {assets.svg.arrowRight}
      </div>
    </Button>
  );

  return (
    <div className={'lg:flex gap-5'}>
      <Box className={'lg:w-1/2 my-5'}>
        <div className={'t2 mb-4'}>Market Size</div>
        <div className={'t1 mb-4'}>$18,425,690</div>
        <div className={'t3 mb-6'}>The first money market on NEAR native, bring more liquidity and DeFi composability
        </div>
        <div className={'flex gap-5'}>
          <ButtonNode>Supply</ButtonNode>
          <ButtonNode>Borrow</ButtonNode>
        </div>

      </Box>
      <Box className={'lg:w-1/2 my-5'}>
        <div className={'t2 mb-2'}>Yield available</div>
        <div className={'t1 mb-2'}>20+</div>
        <div className={'t3 mb-2'}>Supply and borrow interest-bearing assets (stETH, stNEAR, aUSDC) on NEAR</div>
      </Box>
    </div>
  );
};


const Box = ({ children, className }: Props) => {
  return <div className={clsx('rounded bg-primary-500 text-black p-8', className)}>{children}</div>;
};

const Banner1 = () => {
  return (
    <div className={'flex items-center'}>
      <Lottie options={{
        loop: true,
        autoplay: true,
        animationData: a,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
              height={495}
              width={825} />

      <div>
        <svg xmlns='http://www.w3.org/2000/svg' width='277' height='122' viewBox='0 0 277 122' fill='none'>
          <path d='M1.30543 120.569L108.966 62.5309L105.264 87.2553L275.695 1.00001' stroke='#D2FF3A'
                strokeWidth='2' />
        </svg>
        <div className={'banner-title'}>BRRR!</div>
        <svg xmlns='http://www.w3.org/2000/svg' width='287' height='93' viewBox='0 0 287 93' fill='none'>
          <path d='M1.00004 1.66033L186.025 46.8155L167 63.0348L286.472 91.6144' stroke='#D2FF3A' strokeWidth='2' />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;