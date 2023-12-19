<script>
export default {
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      const url = window.location.href;
      const regex = /\/detail\/[a-zA-Z0-9]+/;
      const result = url.match(regex);

      if (!result) return;

      const movieId = result[0].split('/').pop();

      try {
        const response = await import('../../data/movie-details-list.json');
        const movies = response.default;

        const selectedMovie = movies.find((movie) => movie.imdbID === movieId);

        if (selectedMovie) {
          this.movie = selectedMovie;
        } else {
          console.error('Movie not found with ID:', movieId);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
  },
};
</script>

<template>
  <div class="movie-details">
    <div class="poster">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="details">
      <h1>{{ movie.Title }} ({{ movie.Year }})</h1>
      <p><strong>Rated:</strong> {{ movie.Rated }}</p>
      <p><strong>Released:</strong> {{ movie.Released }}</p>
      <p><strong>Genre:</strong> {{ movie.Genre }}</p>
      <p><strong>Director:</strong> {{ movie.Director }}</p>
      <p><strong>Writer:</strong> {{ movie.Writer }}</p>
      <p><strong>Actors:</strong> {{ movie.Actors }}</p>
      <p><strong>Plot:</strong> {{ movie.Plot }}</p>
      <p><strong>IMDb Rating:</strong> {{ movie.imdbRating }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-details {
  display: flex;
  max-width: 960px;
  margin: auto;
  font-family: sans-serif;
}

.poster {
  margin-right: 20px;
}

.poster img {
  max-width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border: 4px solid #ec0054;
}

.details {
  flex: 1;
}
</style>
