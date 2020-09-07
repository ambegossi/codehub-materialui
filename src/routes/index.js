import { lazy } from 'react';

const HomeScreen = lazy(() => import('../screens/HomeScreen'));

const routes = {
  dashboard: {
    path: '/',
    exact: true,
    Component: HomeScreen,
  },
};

export default routes;
