import assets from '../components/assets';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import { BaseProps } from '../interfaces/interfaces';

const Header = () => {
  const handleEnterAppClick = () => {
    window.location.replace('https://app.burrow.cash');
  };

  return (
    <div className={'header items-center mt-5 mb-5 flex px-5 md:px-20 justify-between'}>
      <Link title={'burrow-cash'} to={'/'}>
        <div className={'logo'}>{assets.svg.logo}</div>
      </Link>
      <div className={'flex gap-2 md:gap-5'}>
        <Navs />
        <Button className={'flex gap-2 items-center'} onClick={handleEnterAppClick}>
          Enter App <ArrowIcon className={'hidden xs:block'} />
        </Button>
      </div>
    </div>
  );
};

const NAVIGATIONS = [
  {
    title: 'Docs',
    to: 'https://docs.burrow.cash/product-docs/introduction/burrow',
    target: '_blank',
  },
];
const Navs = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      {NAVIGATIONS.map((d) => {
        return (
          <Link title={d.title} key={d.title} to={d.to} className={'border border-gray-300 p-2 rounded text-gray-300'} target={d.target}>
            {d.title}
          </Link>
        );
      })}
    </div>
  );
};

const ArrowIcon = ({ className }: BaseProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className={className}>
    <path
      d="M12.814 1.51064C12.8298 0.958584 12.3951 0.498214 11.8431 0.482376L2.84677 0.224276C2.29471 0.208437 1.83434 0.643129 1.81851 1.19519C1.80267 1.74724 2.23736 2.20761 2.78942 2.22345L10.7861 2.45287L10.5567 10.4496C10.5409 11.0016 10.9756 11.462 11.5276 11.4779C12.0797 11.4937 12.54 11.059 12.5559 10.5069L12.814 1.51064ZM1.87208 12.245L12.5009 2.20906L11.1279 0.75487L0.499009 10.7909L1.87208 12.245Z"
      fill="black"
    />
  </svg>
);

export default Header;
