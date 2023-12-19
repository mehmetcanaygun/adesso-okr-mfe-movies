import { createApp } from 'vue';
import MovieDetail from './components/MovieDetail.vue';

const mount = (el) => {
  const app = createApp(MovieDetail);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_movie-detail-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
