import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (
  el,
  { onNavigate, initialPathname, defaultHistory, onMovieClick }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPathname],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  if (initialPathname) {
    const { pathname } = history.location;
    if (pathname !== initialPathname) {
      history.push(initialPathname);
    }
  }

  ReactDOM.render(<App history={history} onMovieClick={onMovieClick} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_movie-search-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
