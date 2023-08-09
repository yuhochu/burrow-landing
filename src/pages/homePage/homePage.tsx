import React from 'react';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import Lottie from 'lottie-react';
import a from '../../assets/animated/a.json';
import './homePage.scss';
import clsx from 'clsx';
import { BaseProps } from '../../interfaces/interfaces';
import HomePageRoadMap from './homePageRoadMap';
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

const Banner1 = () => {
  return (
    <div className={'flex items-center mb-10'}>
      <Lottie animationData={a} loop={true} autoplay={true}
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
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
