import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';
import BatIcon from '../images/bat-icon.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '2rem',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
    padding: '0',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
    width: '24px',
    height: '24px',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Container className={classes.container}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className={classes.title}
          >
            <img src={BatIcon} alt="Bat Icon" className={classes.icon} />
            BatMovies
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
