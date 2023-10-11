import React, { useEffect } from 'react';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import './homePage.scss';
import clsx from 'clsx';
import { BaseProps } from '../../interfaces/interfaces';
import HomePageRoadMap from './homePageRoadMap';
import HomePageArticles from './homePageArticles';
import HomePageYield from './homePageYield';
import HomePageBanner from './homePageBanner';
import { fetchAssets } from '../../datasource/fetchAssets';



const HomePage = (props: BaseProps) => {

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <LayoutContainer className={'home-page'}>
      <HomePageBanner />
      <Section>
        <HomePageYield />
      </Section>
      <Section>
        <HomePageRoadMap />
      </Section>
      <Section>
        <HomePageArticles />
      </Section>
    </LayoutContainer>
  );
};

const Section = ({ children, className }: BaseProps) => {
  return <div className={clsx('mb-20 md:mb-44', className)}>{children}</div>;
};

export default HomePage;
