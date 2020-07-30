import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import WP from 'utils/wordpress';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '90%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    marginTop: 40,
    width: '100%',
    marginBottom: 80
  }
}));

const List = ({ comics, media }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div className={classes.contentContainer}>
        <Typography variant="h1" style={{ fontSize: '9rem' }}>COMICS</Typography>
        <Typography variant="h5">Some comics you could POSSIBLY enjoy!</Typography>
        <Typography variant="h5">Select a comic series:</Typography>
        <Grid container direction="row" alignItems="center" style={{ marginTop: 40 }} spacing={4}>
          <Grid item>
            <CardActionArea onClick={() => {}}>
              <Card style={{ height: 198, width: 322 }}>
                <CardMedia image="/zooweemama.png" style={{ height: '100%' }} />
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item>
            <CardActionArea onClick={() => {}}>
              <Card style={{ height: 198, width: 322 }} onClick={() => {}}>
                <CardMedia image="/treeticsoriginals.png" style={{ height: '100%' }} />
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const [res, media] = await Promise.all([
      WP.comics(),
      WP.media(),
    ]);
    if (res) { 
      return { props: { comics: res, media }, revalidate: 10 };
    } else {
      return { props: { comics: [], media }, revalidate: 10 };
    }
  } catch (err) {
    return { props: { comics: [], media: [] }, revalidate: 10 };
  }
}

export default List;
