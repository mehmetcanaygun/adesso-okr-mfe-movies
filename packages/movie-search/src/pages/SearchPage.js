import React, { useEffect, useRef, useState } from 'react';
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
} from '@material-ui/core';
import { createBrowserHistory } from 'history';
import MOVIES from '../../data/movies.json';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  searchContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  filterInput: {
    flex: 1,
    height: '56px',
  },
  clearButton: {
    height: '56px',
  },
  resultAmountText: {
    marginBottom: '0.5rem',
  },
  movieList: {
    display: 'grid',
    gap: '1rem',
    width: '100%',
    margin: '0 auto',
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
}));

const history = createBrowserHistory();

const SearchPage = ({ onMovieClick }) => {
  const isMount = useRef(true);

  const classes = useStyles();
  const [filterTerm, setFilterTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (isMount.current) {
      // didMount logic
      setMovies(MOVIES);

      isMount.current = false;
    }

    // didUpdate logic
    // Filtering
    if (filterTerm) {
      const filteredMovies = MOVIES.filter((movie) =>
        movie.Title.toLocaleLowerCase()
          .trim()
          .includes(filterTerm.toLocaleLowerCase().trim())
      );

      setMovies(filteredMovies);
    } else {
      setMovies(MOVIES);
    }
  }, [filterTerm]);

  const handleClear = () => {
    setFilterTerm('');
  };

  const handleClick = (movie) => {
    if (!movie || !movie.imdbID) return;

    if (!onMovieClick) return;

    onMovieClick(movie.imdbID);
  };

  return (
    <div className={classes.container}>
      <form className={classes.searchContainer}>
        <TextField
          className={classes.filterInput}
          label="Filter movies by title"
          variant="outlined"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />

        <Button
          type="button"
          className={classes.clearButton}
          variant="outlined"
          disabled={!filterTerm}
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>

      <Chip
        label={`${movies.length} movie${
          movies.length === 1 ? ' is' : 's are'
        } found.`}
        variant="outlined"
        className={classes.resultAmountText}
      />

      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid
            key={movie.imdbID}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => handleClick(movie)}
          >
            <Card key={movie.imdbID}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={movie.Poster}
                  alt="Poster"
                />
                <CardContent className={classes.cardContent}>
                  {movie.Title} ({movie.Year})
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchPage;
