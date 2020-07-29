import React from "react";

import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '95vh',
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    backgroundImage: `url("/notebg.png")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    backgroundAttachment: 'fixed'
  },
  bannerImage: {
    width: '90vw',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
  logoImage: {
    width: '80vw',
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
  }
}));

const List = ({ bannerImage }) => {
  // Get the data of the current list.
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.bannerContainer}>
      <Grid container direction="row" alignItems="center" justify="center" style={{ height: '80%', paddingTop: 20 }}>
        <Grid item sm={6}>
          <CardMedia
            component="img"
            className={classes.bannerImage}
            image="/banner.png"
          />
        </Grid>
        <Grid item sm={6}>
          <center>
            <img src="/logo.png" className={classes.logoImage} />
            <Typography variant="h4">
              Pretty epic comics and drawings
            </Typography>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <Grid item sm={6}>
                <Button variant="contained" color="secondary" size="large" style={{ marginTop: 40 }} onClick={() => window.open('https://www.roblox.com/users/1329769270/profile', '_blank')}>Roblox Profile</Button>
              </Grid>
              <Grid item sm={6}>
                <Button variant="contained" color="secondary" size="large" style={{ marginTop: 40 }} onClick={() => router.push('/comics')}>Comics</Button>
              </Grid>
            </Grid>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
