import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routesList from './routes';

const Routers = (props: any) => {
  const node = routesList?.map((d: any) => {
    if (d.children) {
      return d.children.map((v: any) => <Route path={v.path} element={v.component} key={v.path} />);
    }
    return <Route path={d.path} element={d.component} key={d.path} />;
  });

  return (
    <Routes>
      {node}
    </Routes>
  );
};

export default Routers;
