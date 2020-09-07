import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterSwitch from '../components/RouterSwitch';
import withLayout from '../layouts';
import routes from '../routes';

const ScreenRouter = () => {
  const MainScreenRouter = ({ ...props }) => {
    const escapeTo = '/';

    return <RouterSwitch routes={routes} escapeTo={escapeTo} {...props} />;
  };

  const RouterContext = withLayout('main')(MainScreenRouter);

  return (
    <Router>
      <Suspense fallback={<div />}>
        <RouterContext />
      </Suspense>
    </Router>
  );
};

export default ScreenRouter;
