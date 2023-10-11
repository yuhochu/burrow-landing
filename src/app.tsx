import './app.css'
import './styles/global.css'
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { useAppDispatch } from './redux/hooks';
import { fetchAssets, fetchRefPrices } from './redux/assetsSlice';
import { useEffect } from 'react';
import { fetchConfig } from './redux/appSlice';

const Init = () => {
  //const isIdle = useIdle(IDLE_INTERVAL);
  const dispatch = useAppDispatch();

  const fetchData = () => {
    dispatch(fetchAssets()).then(() => dispatch(fetchRefPrices()));
    // dispatch(fetchAccount());
  };

  useEffect(() => {
    dispatch(fetchConfig());
  }, []);
  useEffect(fetchData, []);
  // useInterval(fetchData, !isIdle ? REFETCH_INTERVAL : null);

  return null;
};

function App() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Init />
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    )
}

export default App
