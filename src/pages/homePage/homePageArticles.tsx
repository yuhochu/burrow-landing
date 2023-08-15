import { BaseProps } from '../../interfaces/interfaces';
import { Box, BoxProps } from '../../components/box';
import assets from '../../components/assets';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { ArrowRightIcon } from '../../components/svgIcon';
import React from 'react';

const HomePageArticles = () => {
  return (
    <div className={'remove-container-pd '}>
      <ArticleList />
    </div>
  );
};

const ARTICLE_LIST = [
  {
    image: assets.img.articlejul13,
    title: 'Assessing the Burrow Widgets on Near.social',
    date: 'JUL 13',
    linkTo: 'https://burrowcash.medium.com/assessing-the-burrow-widgets-on-near-social-58882885a85d',
  },
  {
    image: assets.img.articlejun28,
    title: 'Ref Finance to Oversee Protocol Development & Management of Burrow',
    date: 'JUN 28',
    linkTo: 'https://burrowcash.medium.com/ref-finance-to-oversee-protocol-development-management-of-burrow-3e9ea8d32011',
  },
  {
    image: assets.img.articlemay11,
    title: 'NEAR-native $USDT Now Live on Burrow',
    date: 'MAY 11',
    linkTo: 'https://burrowcash.medium.com/near-native-usdt-now-live-on-burrow-5652e0d582fc',
  },
  {
    image: assets.img.articlefeb9,
    title: 'Burrow Partners with ImmuneFi, Offering Up to $250K in Bug Bounties',
    date: 'FEB 9',
    linkTo: 'https://burrowcash.medium.com/burrow-partners-with-immunefi-offering-up-to-250k-in-bug-bounties-cab669e78f80',
  },
  {
    image: assets.img.articleoct122022,
    title: 'Decentralization on Burrow Part 1: Front End',
    date: 'OCT 12',
    linkTo: 'https://burrowcash.medium.com/decentralization-on-burrow-part-1-front-end-5eb9f2ac15a2',
  },
  {
    image: assets.img.articlejul292022,
    title: 'Net Liquidity Farming Part 2: Varied Coefficients',
    date: 'JUL 29',
    linkTo: 'https://burrowcash.medium.com/net-liquidity-farming-part-2-varied-coefficients-6b839ae2178b',
  },
];

const ArticleList = () => {
  const SwiperNext = () => {
    const swiper = useSwiper();

    return (
      <div className={'absolute right-0 z-10 rounded-full border border-white btn-arrow bg-black'} onClick={() => swiper.slideNext()}>
        <ArrowRightIcon stroke={'#fff'} />
      </div>
    );
  };

  return (
    <div className={'relative article-list'}>
      <Swiper
        spaceBetween={0}
        loop={true}
        // autoplay={{
        //   delay: 2000,
        //   pauseOnMouseEnter: true,
        // }}
        slidesPerView={'auto'}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperNext />

        {ARTICLE_LIST.map((d) => (
          <SwiperSlide className={'article-swiper'} key={d.title}>
            <Article title={d.title} image={d.image} date={d.date} linkTo={d.linkTo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface ArticleProps extends BoxProps {
  title: string;
  date: string;
  image: string;
  linkTo?: string;
}

const Article = ({ title, date, image, linkTo }: ArticleProps) => {
  const node = (
    <Box image={image} style={{ borderRadius: 12 }} className={'article-box'}>
      <div style={{ height: 100 }}>
        <div className={'t2 mb-5'}>{title}</div>
        <div className={'t3'}>{date}</div>
      </div>
    </Box>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} target={'_blank'}>
        {node}
      </Link>
    );
  }
  return node;
};

export default HomePageArticles;
