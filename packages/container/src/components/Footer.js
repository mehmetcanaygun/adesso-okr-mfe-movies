import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import BatIcon from '../images/bat-icon.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color: theme.palette.common.white,
    padding: '1rem 0',
    marginTop: '2rem',
  },
  container: {
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <img src={BatIcon} alt="Bat Icon" className={classes.icon} />
        <Typography variant="h6" className={classes.text}>
          BatMovies
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
