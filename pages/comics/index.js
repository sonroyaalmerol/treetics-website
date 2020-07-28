import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import WP from 'utils/wordpress';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  }
}));

const List = ({ comics, media }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      Epic comics here!
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
