import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: '90vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: 50,
    paddingRight: 50
  },
  bannerHeader: {
    fontSize: '7.5vw',
    margin: 0
  },
  bannerImage: {
    width: '50vw'
  },
}));

const List = ({ bannerImage }) => {
  // Get the data of the current list.
  const classes = useStyles();

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
            <img src="/logo.png" style={{ width: '40vw' }} />
            <Typography variant="h4">
              Pretty epic comics and drawings
            </Typography>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
