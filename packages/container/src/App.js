import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import './styles/index.css';

import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';

const MovieSearchLazy = lazy(() => import('./components/MovieSearchApp'));
const MovieDetailLazy = lazy(() => import('./components/MovieDetailApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const onMovieClick = (id) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Navigate to the movie detail page
    history.push(`/detail/${id}`);
  };

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div className="App">
          <Header />

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/detail/:id" component={MovieDetailLazy} />
              <Route path="/">
                <MovieSearchLazy onMovieClick={onMovieClick} />
              </Route>
            </Switch>
          </Suspense>

          <Footer />
        </div>
      </StylesProvider>
    </Router>
  );
};
