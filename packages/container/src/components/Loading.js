import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
