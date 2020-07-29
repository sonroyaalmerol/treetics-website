import React from "react";
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#f5e1fd'
  },
  bannerHeader: {
    fontSize: '7.5vw',
    margin: 0
  },
  bannerImage: {
    width: '60vw',
    [theme.breakpoints.up('md')]: {
      width: '20vw',
    },
  },
}));

const List = ({ bannerImage }) => {
  // Get the data of the current list.
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.bannerContainer}>
      <Typography variant="h1" align="center" style={{ marginBottom: 40 }}>Latest Stuff</Typography>
      <Grid container direction="row" spacing={6} alignItems="center" justify="center">
        <Grid item>
          <img src="/cover.png" className={classes.bannerImage} />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="body1">
            <p>
              Greg Heffley is in another adventure! But- colored?
            </p>
            <p>
              In this fan-made book, Greg Heffley finds a meteor and touches it- which gives him color! Greg invited Rowley to help find the ERASER! Will they succeed or will Greg be known as the MASTER OF COLOR? Find out in Diary of a Wimpy Kid: The Master of Color.
            </p>
            <p>
              Based on a reddit post on r/LodedDiper!
            </p>
            <Button variant="contained" color="primary" size="large" onClick={() => router.push('/ebooks')}>Read now!</Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
