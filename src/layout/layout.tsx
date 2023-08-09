import Header from './header';
import Routers from '../routers/routers';
import Footer from './footer';
import "./layout.scss"

type Props = {
  className?: string,
}
const Layout = (props: Props) => {
  return (
    <div className={'layout'}>
      <Header />
      <Routers {...props} />
      <Footer />
    </div>
  );
};

export default Layout;
