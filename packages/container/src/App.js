import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Loading from './components/Loading';

const MovieSearchLazy = lazy(() => import('./components/MovieSearchApp'));
const MovieDetailLazy = lazy(() => import('./components/MovieDetailApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const onMovieClick = (id) => {
    history.push(`/detail/${id}`);
  };

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/detail/:id" component={MovieDetailLazy} />
              <Route path="/">
                <MovieSearchLazy onMovieClick={onMovieClick} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
