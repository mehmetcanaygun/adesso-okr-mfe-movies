import React, { useRef, useEffect } from 'react';
import { mount } from 'movieSearch/MovieSearchApp';
import { useHistory } from 'react-router-dom';

export default ({ onMovieClick }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPathname: history.location.pathname,
      onMovieClick,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
